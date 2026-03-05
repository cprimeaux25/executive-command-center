import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  Completed: "bg-primary/10 text-primary border-primary/20",
  Planning: "bg-warning/10 text-warning border-warning/20",
  Open: "bg-destructive/10 text-destructive border-destructive/20",
  "In Progress": "bg-info/10 text-info border-info/20",
  Resolved: "bg-success/10 text-success border-success/20",
  Draft: "bg-muted text-muted-foreground border-border",
  Submitted: "bg-primary/10 text-primary border-primary/20",
  Reviewing: "bg-warning/10 text-warning border-warning/20",
  "In Development": "bg-info/10 text-info border-info/20",
  Testing: "bg-warning/10 text-warning border-warning/20",
  Deployed: "bg-success/10 text-success border-success/20",
  Research: "bg-accent text-accent-foreground border-border",
  High: "bg-destructive/10 text-destructive border-destructive/20",
  Medium: "bg-warning/10 text-warning border-warning/20",
  Low: "bg-muted text-muted-foreground border-border",
  "Low Stock": "bg-destructive/10 text-destructive border-destructive/20",
  Adequate: "bg-success/10 text-success border-success/20",
  Current: "bg-success/10 text-success border-success/20",
  "In Review": "bg-warning/10 text-warning border-warning/20",
  Scheduled: "bg-info/10 text-info border-info/20",
};

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <Badge variant="outline" className={cn("font-medium text-[11px]", statusColors[status] || "bg-muted text-muted-foreground", className)}>
      {status}
    </Badge>
  );
}
