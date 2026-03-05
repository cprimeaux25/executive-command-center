import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { devProjects } from "@/data/mockData";

const SoftwareDev = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Software Development" description="Internal tools and development project oversight" />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {devProjects.map(p => (
          <Card key={p.id} className="glass-card hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm">{p.name}</CardTitle>
                <StatusBadge status={p.status} />
              </div>
              <p className="text-xs text-muted-foreground">{p.description}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{p.progress}%</span>
                </div>
                <Progress value={p.progress} className="h-2" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <Badge variant="outline" className="text-[10px] font-mono">{p.techStack}</Badge>
                <span className="text-muted-foreground">Deploy: {p.deployStatus}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SoftwareDev;
