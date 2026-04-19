"use client";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AddClassForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Create New Class</h2>
      <form className="space-y-4">
        <Input placeholder="Class Name (e.g., Class X)" required />
        <Input placeholder="Academic Year (e.g., 2025-26)" required />
        <Input placeholder="Sections (comma separated, e.g., A,B,C)" required />
        <Select><option>Select Class Teacher</option><option>Mrs. Latha</option><option>Mr. Joshi</option></Select>
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Create Class</Button>
        </div>
      </form>
    </Dialog>
  );
}