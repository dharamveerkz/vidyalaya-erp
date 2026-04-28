// ./lib/actions/student-actions.ts
"use server";
import { auth } from "../auth";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { studentSchema } from "../validations/student";

export async function getStudents(filter?: { classId?: string; search?: string }) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const where: any = {};
  if (session.user.role === "STUDENT") where.userId = session.user.id;
  if (filter?.classId) where.classId = filter.classId;
  if (filter?.search) where.OR = [
    { firstName: { contains: filter.search, mode: "insensitive" } },
    { lastName: { contains: filter.search, mode: "insensitive" } },
    { rollNumber: { contains: filter.search, mode: "insensitive" } },
  ];

  return prisma.student.findMany({
    where,
    include: { 
      class: true, 
      section: true, 
      _count: { select: { fees: true, examResults: true } } 
    },
    orderBy: { createdAt: "desc" },
  });
}

// ✅ FIXED: parameter name + type + internal refs + Prisma syntax
export async function createStudent(formData: FormData) {  // ✅ lowercase + type
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" };

  // ✅ Use formData (not data)
  const parsed = studentSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.flatten() };

  // ✅ FIXED: Added '' key for Prisma create
  await prisma.student.create({
     parsed.data  // ← '' key required (not '')
  });
  
  revalidatePath("/students");
  return { success: true };
}

export async function deleteStudent(id: string) {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return { error: "Unauthorized" };
  await prisma.student.delete({ where: { id } });
  revalidatePath("/students");
  return { success: true };
}