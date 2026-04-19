import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClassGrid({ classes }: { classes: Array<{ id: string; name: string; sections: string[]; studentCount: number }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {classes.map((c) => (
        <Link href={`/classes/${c.id}`} key={c.id} className="block hover:shadow-md transition rounded-xl border bg-white group">
          <CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle>{c.name}</CardTitle><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition" /></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2 flex-wrap">{c.sections.map(s => <Badge key={s} variant="secondary">Sec {s}</Badge>)}</div>
            <div className="flex items-center gap-2 text-sm text-slate-500"><Users className="h-4 w-4" /> {c.studentCount} Students</div>
          </CardContent>
        </Link>
      ))}
    </div>
  );
}