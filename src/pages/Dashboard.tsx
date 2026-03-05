import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { projects, bids, salesPipeline, serviceTickets, inventory, meetings, revenueByState, monthlyRevenue } from "@/data/mockData";
import { FolderKanban, FileText, DollarSign, Wrench, Warehouse, Activity, Users, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const COLORS = ["hsl(212,55%,50%)", "hsl(142,60%,40%)", "hsl(38,92%,50%)", "hsl(280,60%,55%)", "hsl(0,72%,55%)"];

const Dashboard = () => {
  const activeProjects = projects.filter(p => p.status === 'Active').length;
  const totalMetersDeployed = projects.reduce((s, p) => s + p.metersDeployed, 0);
  const openBids = bids.filter(b => b.status !== 'Submitted').length;
  const pipelineValue = salesPipeline.reduce((s, p) => s + p.value, 0);
  const openTickets = serviceTickets.filter(t => t.status !== 'Resolved').length;
  const lowStockItems = inventory.filter(i => i.status === 'Low Stock').length;

  const pipelineStages = ['Discovery', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won'];
  const pipelineData = pipelineStages.map(stage => ({
    stage,
    value: salesPipeline.filter(s => s.stage === stage).reduce((sum, s) => sum + s.value, 0) / 1000000,
    count: salesPipeline.filter(s => s.stage === stage).length
  }));

  return (
    <div className="space-y-6">
      <PageHeader title="Executive Dashboard" description="ETEC Operations Command Center — Kamstrup AMI Deployments" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <KpiCard title="Active Projects" value={activeProjects} subtitle={`${totalMetersDeployed.toLocaleString()} meters deployed`} icon={FolderKanban} />
        <KpiCard title="Open Bids" value={openBids} subtitle="3 due this month" icon={FileText} />
        <KpiCard title="Pipeline Value" value={`$${(pipelineValue / 1000000).toFixed(1)}M`} subtitle="6 opportunities" icon={DollarSign} trend={{ value: "12% vs last qtr", positive: true }} />
        <KpiCard title="Service Tickets" value={openTickets} subtitle="2 high priority" icon={Wrench} />
        <KpiCard title="Inventory Alerts" value={lowStockItems} subtitle="Items below reorder" icon={Warehouse} />
        <KpiCard title="Team Utilization" value="76%" subtitle="8 team members" icon={Users} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue by State</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={revenueByState}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
                <XAxis dataKey="state" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={v => `$${v / 1000000}M`} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number) => `$${(v / 1000000).toFixed(1)}M`} />
                <Bar dataKey="revenue" fill="hsl(212,55%,50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pipeline by Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={pipelineData} dataKey="value" nameKey="stage" cx="50%" cy="50%" outerRadius={90} label={({ stage, value }) => `${stage}: $${value.toFixed(1)}M`} labelLine={false} fontSize={9}>
                  {pipelineData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => `$${v.toFixed(1)}M`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
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

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Project Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {projects.filter(p => p.status === 'Active').map(p => (
              <div key={p.id} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium truncate">{p.name}</span>
                  <span className="text-muted-foreground">{p.progress}%</span>
                </div>
                <Progress value={p.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2"><Calendar className="h-4 w-4" />Upcoming</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {meetings.slice(0, 4).map(m => (
              <div key={m.id} className="flex items-start gap-3 text-xs">
                <div className="text-center bg-primary/10 rounded px-2 py-1 shrink-0">
                  <div className="font-bold text-primary">{new Date(m.date).getDate()}</div>
                  <div className="text-[10px] text-muted-foreground">Mar</div>
                </div>
                <div>
                  <p className="font-medium">{m.title}</p>
                  <p className="text-muted-foreground">{m.time} · {m.type}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recent Service Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {serviceTickets.slice(0, 4).map(t => (
                <div key={t.id} className="flex items-center justify-between text-xs py-2 border-b last:border-0">
                  <div>
                    <span className="font-mono text-muted-foreground mr-2">{t.id}</span>
                    <span className="font-medium">{t.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={t.priority} />
                    <StatusBadge status={t.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Bid Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {bids.map(b => (
                <div key={b.id} className="flex items-center justify-between text-xs py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-muted-foreground">{b.agency} · {b.state}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{b.dueDate}</span>
                    <StatusBadge status={b.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
