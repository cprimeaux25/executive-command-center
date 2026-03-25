import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  PackagePlus,
  Truck,
  RadioTower,
  BarChart3,
  Timer,
  ClipboardList,
  Shield,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Inventory Overview",
    description: "Core stock visibility, category tabs, low-stock alerts, quick scan, import/export, allocations, receipts, and shipping workflows.",
    icon: Package,
    status: "Primary",
  },
  {
    title: "Receipts",
    description: "Inbound receiving workflows, item matching, quantity reconciliation, and receipt history.",
    icon: PackagePlus,
    status: "Operational",
  },
  {
    title: "Shipments",
    description: "Outbound shipment tracking, serial number handling, customer references, and shipment history.",
    icon: Truck,
    status: "Operational",
  },
  {
    title: "Collector Sets",
    description: "Collector set management, restock thresholds, and grouped equipment handling.",
    icon: RadioTower,
    status: "Module",
  },
  {
    title: "Analytics",
    description: "Inventory analytics, category performance, and planning metrics.",
    icon: BarChart3,
    status: "Insights",
  },
  {
    title: "Lead Times",
    description: "Lead-time reporting to support procurement and schedule planning.",
    icon: Timer,
    status: "Reporting",
  },
  {
    title: "Open Orders",
    description: "Purchase order visibility, order tracking, and pending fulfillment review.",
    icon: ClipboardList,
    status: "Planning",
  },
  {
    title: "Admin",
    description: "Administrative controls, elevated configuration, and system governance.",
    icon: Shield,
    status: "Restricted",
  },
];

const InventoryPortal = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory Portal"
        description="Integration shell for the msinventoryportal application. This page is the Executive Command Center entry point for inventory-specific modules and workflows."
      />

      <Card className="glass-card border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Integration status</CardTitle>
          <CardDescription>
            The Inventory Portal module map below reflects the screens and workflows identified in the standalone inventory repository.
            Wire these modules into nested routes under <code>/inventory-portal/*</code> as the next implementation step.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border bg-background p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Source app</p>
            <p className="mt-2 font-semibold">cprimeaux25/msinventoryportal</p>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Target area</p>
            <p className="mt-2 font-semibold">Executive Command Center / Inventory Portal</p>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Recommended route base</p>
            <p className="mt-2 font-semibold">/inventory-portal</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card key={module.title} className="glass-card h-full">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary">{module.status}</Badge>
                </div>
                <div>
                  <CardTitle className="text-base">{module.title}</CardTitle>
                  <CardDescription className="mt-2">{module.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full justify-between" disabled>
                  Route wiring pending
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryPortal;
