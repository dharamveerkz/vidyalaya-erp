// lib/mock-data.ts
import { Student } from "@/types/student";

export const mockStudents: Student[] = [
  {
    id: "1",
    rollNumber: "1001",
    firstName: "Aryan",
    lastName: "Singh",
    contact: "9876543210",
    class: { name: "Class X" },
    section: { name: "A" },
    fees: [{ status: "PAID" }],
    examResults: [],
  },
  {
    id: "2",
    rollNumber: "1002",
    firstName: "Preethi",
    lastName: "Nair",
    contact: "9876543211",
    class: { name: "Class IX" },
    section: { name: "B" },
    fees: [{ status: "PENDING" }],
    examResults: [],
  },
  {
    id: "3",
    rollNumber: "1003",
    firstName: "Mohammed",
    lastName: "Faris",
    contact: "9876543212",
    class: { name: "Class VIII" },
    section: { name: "C" },
    fees: [{ status: "OVERDUE" }],
    examResults: [],
  },
];

export const getStudents = async (): Promise<Student[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockStudents;
};

// Mock auth
export const mockUser = {
  id: "1",
  name: "Admin User",
  email: "admin@vidyalaya.com",
  role: "ADMIN" as const,
};

export const loginUser = async (credentials: any) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true, user: mockUser };
};
