import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { documents } from "@/data/mockData";
import { FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const DocumentControl = () => {
  const categories = [...new Set(documents.map(d => d.category))];

  return (
    <div className="space-y-6">
      <PageHeader title="Document Control" description="Centralized document repository with version control" />

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search documents..." className="pl-9" />
      </div>

      {categories.map(cat => (
        <div key={cat}>
          <h3 className="text-sm font-semibold mb-3">{cat}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {documents.filter(d => d.category === cat).map(doc => (
              <Card key={doc.id} className="glass-card hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{doc.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-[10px]">v{doc.version}</Badge>
                        <span className="text-[10px] text-muted-foreground">{doc.modified}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">by {doc.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentControl;
