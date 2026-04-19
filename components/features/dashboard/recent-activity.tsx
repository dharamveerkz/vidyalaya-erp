import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentActivity() {
  const activities = [
    { msg: "Aryan Singh paid tuition fee", time: "10:30 AM" },
    { msg: "Unit Test 2 marks updated for Class X", time: "09:15 AM" },
    { msg: "Mrs. Sharma marked attendance absent", time: "Yesterday" },
  ];
  return (
    <Card className="col-span-2">
      <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        {activities.map((a, i) => (
          <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
            <p className="text-sm text-slate-700">{a.msg}</p><span className="text-xs text-slate-400">{a.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}