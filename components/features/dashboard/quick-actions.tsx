import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Printer, Download, BarChart3 } from "lucide-react";

export function QuickActions() {
  const actions = [
    { label: "Add Student", icon: Plus, variant: "default" as const },
    { label: "Print Report", icon: Printer, variant: "outline" as const },
    { label: "Export Data", icon: Download, variant: "outline" as const },
    { label: "Analytics", icon: BarChart3, variant: "secondary" as const },
  ];
  return (
    <Card className="col-span-2">
      <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <Button key={a.label} variant={a.variant} className="h-20 flex flex-col gap-1.5">
            <a.icon className="h-5 w-5" /> {a.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}