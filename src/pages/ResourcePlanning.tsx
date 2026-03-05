import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { team, projects } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ResourcePlanning = () => {
  const chartData = team.map(t => ({ name: t.name.split(' ')[0], workload: t.workload }));

  return (
    <div className="space-y-6">
      <PageHeader title="Resource Planning" description="Team workload, staffing allocation, and subcontractor coordination" />

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Team Workload</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="workload" fill="hsl(212,55%,50%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {team.map(t => {
          const memberProjects = projects.filter(p => t.projects.includes(p.id));
          return (
            <Card key={t.id} className="glass-card">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className={`text-xs font-bold ${t.workload >= 90 ? 'text-destructive' : t.workload >= 75 ? 'text-warning' : 'text-success'}`}>
                    {t.workload}%
                  </span>
                </div>
                <Progress value={t.workload} className="h-2 mb-2" />
                <div className="flex flex-wrap gap-1 mt-2">
                  {memberProjects.map(p => (
                    <span key={p.id} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">{p.name.split(' ').slice(0, 2).join(' ')}</span>
                  ))}
                  {memberProjects.length === 0 && <span className="text-[10px] text-muted-foreground">Sales / BD</span>}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcePlanning;
