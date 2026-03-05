import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { salesPipeline } from "@/data/mockData";
import { DollarSign, TrendingUp, Users, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SalesOperations = () => {
  const totalPipeline = salesPipeline.reduce((s, p) => s + p.value, 0);
  const weightedPipeline = salesPipeline.reduce((s, p) => s + p.value * p.probability / 100, 0);
  const stages = ['Discovery', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won'];
  const funnelData = stages.map(stage => ({
    stage: stage.split(' ').pop(),
    value: salesPipeline.filter(s => s.stage === stage).reduce((sum, s) => sum + s.value, 0) / 1000000,
  }));

  return (
    <div className="space-y-6">
      <PageHeader title="Sales Operations" description="Pipeline tracking, territory management, and forecasting" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Pipeline" value={`$${(totalPipeline / 1000000).toFixed(1)}M`} icon={DollarSign} />
        <KpiCard title="Weighted Pipeline" value={`$${(weightedPipeline / 1000000).toFixed(1)}M`} icon={TrendingUp} />
        <KpiCard title="Active Opportunities" value={salesPipeline.length} icon={Target} />
        <KpiCard title="Win Rate" value="35%" icon={Users} trend={{ value: "+5% vs Q4", positive: true }} />
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Sales Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={funnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
              <XAxis type="number" tickFormatter={v => `$${v}M`} tick={{ fontSize: 11 }} />
              <YAxis dataKey="stage" type="category" tick={{ fontSize: 11 }} width={80} />
              <Tooltip formatter={(v: number) => `$${v.toFixed(1)}M`} />
              <Bar dataKey="value" fill="hsl(212,55%,50%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Pipeline Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Opportunity</TableHead>
                <TableHead className="text-xs">State</TableHead>
                <TableHead className="text-xs">Stage</TableHead>
                <TableHead className="text-xs">Value</TableHead>
                <TableHead className="text-xs">Probability</TableHead>
                <TableHead className="text-xs">Salesperson</TableHead>
                <TableHead className="text-xs">Next Meeting</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesPipeline.map(s => (
                <TableRow key={s.id} className="text-xs">
                  <TableCell className="font-medium">{s.opportunity}</TableCell>
                  <TableCell>{s.state}</TableCell>
                  <TableCell><StatusBadge status={s.stage} /></TableCell>
                  <TableCell>${(s.value / 1000000).toFixed(1)}M</TableCell>
                  <TableCell>{s.probability}%</TableCell>
                  <TableCell>{s.salesperson}</TableCell>
                  <TableCell>{s.nextMeeting || '—'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesOperations;
