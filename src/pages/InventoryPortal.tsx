import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Search, BarChart3, Truck } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { inventory } from "@/data/mockData";

const InventoryPortal = () => {
  const totalItems = inventory.reduce((s, i) => s + i.inStock, 0);
  const allocated = inventory.reduce((s, i) => s + i.allocated, 0);
  const available = totalItems - allocated;

  return (
    <div className="space-y-6">
      <PageHeader title="Inventory Portal" description="Quick-access inventory lookup and tracking" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Items" value={totalItems.toLocaleString()} icon={Package} />
        <KpiCard title="Allocated" value={allocated.toLocaleString()} icon={Truck} />
        <KpiCard title="Available" value={available.toLocaleString()} icon={Search} />
        <KpiCard title="Categories" value={inventory.length} icon={BarChart3} />
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {inventory.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">{item.item}</p>
                  <p className="text-xs text-muted-foreground">In Stock: {item.inStock} | Allocated: {item.allocated}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.status === 'Low Stock' ? 'bg-destructive/10 text-destructive' :
                  item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryPortal;
