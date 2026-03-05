import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { bids } from "@/data/mockData";

const BidManagement = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Bid & RFP Management" description="Track proposals, pricing reviews, and bid deadlines" />

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Active Bids & RFPs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">ID</TableHead>
                <TableHead className="text-xs">Title</TableHead>
                <TableHead className="text-xs">Agency</TableHead>
                <TableHead className="text-xs">State</TableHead>
                <TableHead className="text-xs">Due Date</TableHead>
                <TableHead className="text-xs">Meters</TableHead>
                <TableHead className="text-xs">Est. Value</TableHead>
                <TableHead className="text-xs">Estimator</TableHead>
                <TableHead className="text-xs">Pricing</TableHead>
                <TableHead className="text-xs">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bids.map(b => (
                <TableRow key={b.id} className="text-xs">
                  <TableCell className="font-mono text-muted-foreground">{b.id}</TableCell>
                  <TableCell className="font-medium">{b.title}</TableCell>
                  <TableCell>{b.agency}</TableCell>
                  <TableCell>{b.state}</TableCell>
                  <TableCell>{b.dueDate}</TableCell>
                  <TableCell>{b.meters.toLocaleString()}</TableCell>
                  <TableCell>${(b.estimatedValue / 1000000).toFixed(1)}M</TableCell>
                  <TableCell>{b.estimator}</TableCell>
                  <TableCell><StatusBadge status={b.pricingReview} /></TableCell>
                  <TableCell><StatusBadge status={b.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        {['T&Cs Template', 'NaaS Agreement', 'ALD Service Agreement'].map(template => (
          <Card key={template} className="glass-card hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">📄</div>
                <div>
                  <p className="text-sm font-medium">{template}</p>
                  <p className="text-xs text-muted-foreground">Template document</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BidManagement;
