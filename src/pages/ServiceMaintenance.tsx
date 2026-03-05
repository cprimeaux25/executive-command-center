import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { serviceTickets } from "@/data/mockData";
import { Wrench, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const ServiceMaintenance = () => {
  const open = serviceTickets.filter(t => t.status === 'Open').length;
  const inProgress = serviceTickets.filter(t => t.status === 'In Progress').length;
  const resolved = serviceTickets.filter(t => t.status === 'Resolved').length;

  return (
    <div className="space-y-6">
      <PageHeader title="Service & Maintenance" description="Field service tickets, maintenance requests, and warranty tracking" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Open Tickets" value={open} icon={AlertTriangle} />
        <KpiCard title="In Progress" value={inProgress} icon={Clock} />
        <KpiCard title="Resolved" value={resolved} icon={CheckCircle} />
        <KpiCard title="Total Active" value={serviceTickets.length} icon={Wrench} />
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Service Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">ID</TableHead>
                <TableHead className="text-xs">Title</TableHead>
                <TableHead className="text-xs">Utility</TableHead>
                <TableHead className="text-xs">Priority</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs">Assignee</TableHead>
                <TableHead className="text-xs">Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serviceTickets.map(t => (
                <TableRow key={t.id} className="text-xs">
                  <TableCell className="font-mono text-muted-foreground">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.title}</TableCell>
                  <TableCell>{t.utility}</TableCell>
                  <TableCell><StatusBadge status={t.priority} /></TableCell>
                  <TableCell><StatusBadge status={t.status} /></TableCell>
                  <TableCell>{t.assignee}</TableCell>
                  <TableCell>{t.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceMaintenance;
