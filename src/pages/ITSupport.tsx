import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supportTickets } from "@/data/mockData";
import { Headphones, AlertCircle, CheckCircle, Clock } from "lucide-react";

const ITSupport = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="IT Support & Help Desk" description="Support tickets, knowledgebase, and technical documentation" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Open Tickets" value={supportTickets.filter(t => t.status === 'Open').length} icon={AlertCircle} />
        <KpiCard title="In Progress" value={supportTickets.filter(t => t.status === 'In Progress').length} icon={Clock} />
        <KpiCard title="Resolved Today" value={0} icon={CheckCircle} />
        <KpiCard title="Avg Resolution" value="4.2h" icon={Headphones} />
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">ID</TableHead>
                <TableHead className="text-xs">Title</TableHead>
                <TableHead className="text-xs">Category</TableHead>
                <TableHead className="text-xs">Priority</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs">Submitter</TableHead>
                <TableHead className="text-xs">Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {supportTickets.map(t => (
                <TableRow key={t.id} className="text-xs">
                  <TableCell className="font-mono text-muted-foreground">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.title}</TableCell>
                  <TableCell>{t.category}</TableCell>
                  <TableCell><StatusBadge status={t.priority} /></TableCell>
                  <TableCell><StatusBadge status={t.status} /></TableCell>
                  <TableCell>{t.submitter}</TableCell>
                  <TableCell>{t.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        {['Getting Started Guide', 'Network Troubleshooting', 'Meter Configuration'].map(article => (
          <Card key={article} className="glass-card hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-5">
              <p className="text-sm font-medium">{article}</p>
              <p className="text-xs text-muted-foreground mt-1">Knowledgebase article</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ITSupport;
