import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { marketingAssets } from "@/data/mockData";
import { FileImage, Presentation, FileText, BookOpen } from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  Brochure: BookOpen, Flyer: FileImage, 'Case Study': FileText, Presentation: Presentation,
};

const Marketing = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Marketing & Presentations" description="Marketing assets, sales materials, and strategy resources" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {marketingAssets.map(a => {
          const Icon = typeIcons[a.type] || FileText;
          return (
            <Card key={a.id} className="glass-card hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{a.name}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] text-muted-foreground">{a.type}</span>
                      <span className="text-[10px] text-muted-foreground">·</span>
                      <span className="text-[10px] text-muted-foreground">{a.modified}</span>
                    </div>
                    <div className="mt-2">
                      <StatusBadge status={a.status} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Marketing;
