"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AttendanceTable({ students }: { students: Array<{ id: string; name: string; roll: string }> }) {
  const [status, setStatus] = useState<Record<string, string>>({});

  const setAtt = (id: string, val: string) => setStatus(prev => ({ ...prev, [id]: val }));

  return (
    <Table>
      <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Roll</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>
        {students.map((s) => {
          const current = status[s.id] || "";
          return (
            <TableRow key={s.id}>
              <TableCell className="font-medium">{s.name}</TableCell>
              <TableCell className="font-mono text-xs">{s.roll}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {["P", "A", "L"].map(opt => (
                    <Button key={opt} size="sm" variant={current === opt ? "default" : "outline"} onClick={() => setAtt(s.id, opt)} className={current === opt && opt === "P" ? "bg-green-600 hover:bg-green-700" : current === opt && opt === "A" ? "bg-red-600 hover:bg-red-700" : current === opt && opt === "L" ? "bg-yellow-500 hover:bg-yellow-600" : ""}>
                      {opt}
                    </Button>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}