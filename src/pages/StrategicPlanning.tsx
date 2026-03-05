import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { initiatives } from "@/data/mockData";

const StrategicPlanning = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Strategic Planning" description="Business development strategies, initiatives, and market opportunities" />

      <div className="grid md:grid-cols-2 gap-4">
        {initiatives.map(i => (
          <Card key={i.id} className="glass-card hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-medium">{i.title}</h3>
                <StatusBadge status={i.priority} />
              </div>
              <p className="text-xs text-muted-foreground mb-3">{i.description}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px]">{i.category}</Badge>
                <StatusBadge status={i.status} />
                <span className="text-[10px] text-muted-foreground ml-auto">Target: {i.target}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StrategicPlanning;
