import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { meetings } from "@/data/mockData";
import { Calendar, Clock, Users } from "lucide-react";

const Meetings = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Meetings & Communications" description="Meeting coordination, notes, and action item tracking" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meetings.map(m => (
          <Card key={m.id} className="glass-card hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{m.date}</span>
                  <Clock className="h-3.5 w-3.5 ml-1" />
                  <span>{m.time}</span>
                </div>
                <StatusBadge status={m.status} />
              </div>
              <h3 className="text-sm font-medium mb-2">{m.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <StatusBadge status={m.type} />
              </div>
              <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                <span>{m.attendees.join(', ')}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Meetings;
