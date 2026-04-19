import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ClassDetail({ data }: { data: { name: string; year: string; teacher: string; students: Array<{ name: string; roll: string; sec: string; att: number }> } }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Badge variant="outline">{data.name}</Badge>
        <Badge variant="secondary">{data.year}</Badge>
        <Badge>Class Teacher: {data.teacher}</Badge>
      </div>
      <Card>
        <CardHeader><CardTitle>Student Roster</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Roll</TableHead><TableHead>Section</TableHead><TableHead className="text-right">Attendance</TableHead></TableRow></TableHeader>
            <TableBody>
              {data.students.map((s, i) => (
                <TableRow key={i}><TableCell className="font-medium">{s.name}</TableCell><TableCell className="font-mono text-xs">{s.roll}</TableCell><TableCell>{s.sec}</TableCell><TableCell className="text-right"><span className={s.att > 90 ? "text-green-600" : "text-red-600"}>{s.att}%</span></TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}