// ./lib/actions/class-actions.ts
"use server";
import { auth } from "../auth";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { classSchema } from "../validations/class";
import { Prisma } from "@prisma/client";

export async function getClasses() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  return prisma.class.findMany({
    include: {
      sections: true,
      _count: { select: { students: true } },
      classTeacher: { select: { name: true } },
    },
  });
}

export async function getClassById(id: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  return prisma.class.findUnique({
    where: { id },
    include: { sections: true, students: { take: 10 }, teachers: true },
  });
}

export async function createClass(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" };

  const parsed = classSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.flatten() };

  const { sections, ...classData } = parsed.data;
  
  await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // ✅ FIXED: Added 'data:' key (not '')
    const newClass = await tx.class.create({ 
      data: classData  // ← 'data:' key required
    });
    
    // ✅ FIXED: Added 'data:' key for createMany
    await tx.section.createMany({
      data: sections.map((s) => ({ name: s, classId: newClass.id })),  // ← 'data:' key required
    });
  });

  revalidatePath("/classes");
  return { success: true };
}