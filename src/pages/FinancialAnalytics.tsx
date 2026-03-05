import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, revenueByState, monthlyRevenue } from "@/data/mockData";
import { DollarSign, TrendingUp, PieChart as PieChartIcon, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const COLORS = ["hsl(212,55%,50%)", "hsl(142,60%,40%)", "hsl(38,92%,50%)", "hsl(280,60%,55%)", "hsl(0,72%,55%)"];

const FinancialAnalytics = () => {
  const totalBudget = projects.reduce((s, p) => s + p.budget, 0);
  const totalSpent = projects.reduce((s, p) => s + p.spent, 0);
  const totalRevenue = revenueByState.reduce((s, r) => s + r.revenue, 0);
  const profitMargin = ((totalBudget - totalSpent) / totalBudget * 100).toFixed(1);

  const budgetData = projects.map(p => ({
    name: p.name.split(' ').slice(0, 2).join(' '),
    budget: p.budget / 1000000,
    spent: p.spent / 1000000,
  }));

  return (
    <div className="space-y-6">
      <PageHeader title="Financial Analytics" description="Budget tracking, revenue analysis, and forecasting" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Revenue" value={`$${(totalRevenue / 1000000).toFixed(1)}M`} icon={DollarSign} trend={{ value: "+15% YoY", positive: true }} />
        <KpiCard title="Total Budget" value={`$${(totalBudget / 1000000).toFixed(1)}M`} icon={BarChart3} />
        <KpiCard title="Total Spent" value={`$${(totalSpent / 1000000).toFixed(1)}M`} icon={TrendingUp} />
        <KpiCard title="Avg Profit Margin" value={`${profitMargin}%`} icon={PieChartIcon} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget vs Spent by Project</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={v => `$${v}M`} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number) => `$${v.toFixed(1)}M`} />
                <Bar dataKey="budget" fill="hsl(212,55%,50%)" name="Budget" radius={[4, 4, 0, 0]} />
                <Bar dataKey="spent" fill="hsl(38,92%,50%)" name="Spent" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue by State</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={revenueByState} dataKey="revenue" nameKey="state" cx="50%" cy="50%" outerRadius={100} label={({ state, revenue }) => `${state}: $${(revenue / 1000000).toFixed(1)}M`} labelLine={false} fontSize={10}>
                  {revenueByState.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => `$${(v / 1000000).toFixed(1)}M`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Monthly Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tickFormatter={v => `$${v / 1000000}M`} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `$${(v / 1000000).toFixed(2)}M`} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(212,55%,50%)" fill="hsl(212,55%,50%)" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialAnalytics;
