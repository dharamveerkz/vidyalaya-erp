// components/features/students/student-list.tsx
"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Student } from "@/types/student";

export function StudentList({ students }: { students: Student[] }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Roll</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((s) => {
            const feeStatus = s.fees[0]?.status || "PENDING";
            return (
              <TableRow key={s.id} className="hover:bg-slate-50/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-slate-200 text-xs font-medium">
                        {s.firstName[0]}
                        {s.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">
                      {s.firstName} {s.lastName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-xs text-slate-600">
                  {s.rollNumber}
                </TableCell>
                <TableCell className="text-sm">
                  {s.class.name} - {s.section.name}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      feeStatus === "PAID"
                        ? "success"
                        : feeStatus === "PENDING"
                          ? "warning"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {feeStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-1 justify-end">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4 text-slate-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
