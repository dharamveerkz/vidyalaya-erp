import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

export function StudentCard({ student }: { student: { name: string; roll: string; cls: string; sec: string; dob: string; email: string; phone: string; address: string } }) {
  return (
    <Card className="max-w-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16"><AvatarFallback className="bg-slate-200 text-lg font-bold">{student.name[0]}</AvatarFallback></Avatar>
        <div><CardTitle className="text-xl">{student.name}</CardTitle><p className="text-sm text-slate-500">Roll: {student.roll} · {student.cls}-{student.sec}</p></div>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-slate-400" /> {student.address}</div>
        <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-slate-400" /> {student.email}</div>
        <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-slate-400" /> {student.phone}</div>
        <div className="flex gap-2 mt-2"><Badge variant="secondary">DOB: {new Date(student.dob).toLocaleDateString()}</Badge></div>
      </CardContent>
    </Card>
  );
}