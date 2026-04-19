// app/(dashboard)/students/page.tsx
import { getStudents } from "@/lib/mock-data";
import { StudentList } from "@/components/features/students/student-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Students</h2>
          <p className="text-sm text-slate-500">
            Manage student records and profiles
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>
      <StudentList students={students} />
    </div>
  );
}
