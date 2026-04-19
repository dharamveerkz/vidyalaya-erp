import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, CalendarCheck, DollarSign } from "lucide-react";

const stats = [
  { title: "Total Students", value: "1,248", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Teachers", value: "48", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Attendance", value: "94%", icon: CalendarCheck, color: "text-green-600", bg: "bg-green-50" },
  { title: "Fee Collected", value: "₹3.8L", icon: DollarSign, color: "text-amber-600", bg: "bg-amber-50" },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.title}>
          <CardContent className="p-6 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${s.bg}`}><s.icon className={`h-5 w-5 ${s.color}`} /></div>
            <div><p className="text-sm text-slate-500 font-medium">{s.title}</p><p className="text-2xl font-bold">{s.value}</p></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}