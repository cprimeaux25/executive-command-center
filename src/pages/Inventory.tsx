import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { inventory } from "@/data/mockData";
import { Warehouse, AlertTriangle, Package, Boxes } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Inventory = () => {
  const totalItems = inventory.reduce((s, i) => s + i.inStock, 0);
  const allocated = inventory.reduce((s, i) => s + i.allocated, 0);
  const lowStock = inventory.filter(i => i.status === 'Low Stock').length;
  const chartData = inventory.map(i => ({ name: i.item.split(' ').slice(-1)[0], inStock: i.inStock, allocated: i.allocated }));

  return (
    <div className="space-y-6">
      <PageHeader title="Warehouse & Inventory" description="Equipment stock levels, allocations, and reorder alerts" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total In Stock" value={totalItems.toLocaleString()} icon={Package} />
        <KpiCard title="Allocated" value={allocated.toLocaleString()} icon={Boxes} />
        <KpiCard title="Low Stock Items" value={lowStock} icon={AlertTriangle} />
        <KpiCard title="Warehouses" value={2} icon={Warehouse} />
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Stock vs Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="inStock" fill="hsl(212,55%,50%)" name="In Stock" radius={[4, 4, 0, 0]} />
              <Bar dataKey="allocated" fill="hsl(38,92%,50%)" name="Allocated" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Inventory Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Item</TableHead>
                <TableHead className="text-xs">Category</TableHead>
                <TableHead className="text-xs">In Stock</TableHead>
                <TableHead className="text-xs">Allocated</TableHead>
                <TableHead className="text-xs">Available</TableHead>
                <TableHead className="text-xs">Reorder Point</TableHead>
                <TableHead className="text-xs">Warehouse</TableHead>
                <TableHead className="text-xs">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map(i => (
                <TableRow key={i.id} className="text-xs">
                  <TableCell className="font-medium">{i.item}</TableCell>
                  <TableCell>{i.category}</TableCell>
                  <TableCell>{i.inStock}</TableCell>
                  <TableCell>{i.allocated}</TableCell>
                  <TableCell className="font-medium">{i.inStock - i.allocated}</TableCell>
                  <TableCell>{i.reorderPoint}</TableCell>
                  <TableCell>{i.warehouse}</TableCell>
                  <TableCell><StatusBadge status={i.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
