import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { projects } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Project Management" description="Kamstrup AMI deployment tracking across all states" />
      
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map(p => (
          <Card key={p.id} className="glass-card hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-sm">{p.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">{p.client}</p>
                </div>
                <StatusBadge status={p.status} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px]">{p.state}</Badge>
                <Badge variant="outline" className="text-[10px]">{p.id}</Badge>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Meters Deployed</span>
                  <span className="font-medium">{p.metersDeployed.toLocaleString()} / {p.metersTotal.toLocaleString()}</span>
                </div>
                <Progress value={p.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Collectors</span>
                  <p className="font-medium">{p.collectors}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Network Health</span>
                  <p className="font-medium">{p.networkHealth}%</p>
                </div>
                <div>
                  <span className="text-muted-foreground">ALD Status</span>
                  <p className="font-medium">{p.aldStatus}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Budget</span>
                  <p className="font-medium">${(p.spent / 1000000).toFixed(1)}M / ${(p.budget / 1000000).toFixed(1)}M</p>
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-muted-foreground pt-2 border-t">
                <span>{p.startDate}</span>
                <span>→</span>
                <span>{p.endDate}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
