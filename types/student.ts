// types/student.ts
export type Student = {
  id: string;
  rollNumber: string;
  firstName: string;
  lastName: string;
  contact: string;
  class: { name: string };
  section: { name: string };
  fees: Array<{ status: string }>;
  examResults: any[];
};

export type StudentListItem = {
  id: string;
  firstName: string;
  lastName: string;
  rollNumber: string;
  className?: string;
  sectionName?: string;
  class?: { name: string };
  section?: { name: string };
  feeStatus?: "PAID" | "PENDING" | "OVERDUE";
};
