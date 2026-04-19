"use client";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function StudentForm({ open, onClose, onSubmit }: { open: boolean; onClose: () => void; onSubmit: ( any) => void }) {
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); };
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Full Name" required />
        <div className="grid grid-cols-2 gap-3">
          <Input name="roll" placeholder="Roll Number" required />
          <Select name="class" required><option value="">Select Class</option><option>Class X</option><option>Class IX</option></Select>
        </div>
        <Input name="dob" type="date" required />
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Create Student</Button>
        </div>
      </form>
    </Dialog>
  );
}