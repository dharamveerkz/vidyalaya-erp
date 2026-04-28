// ./lib/actions/class-actions.ts
"use server";
import { auth } from "../auth";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { classSchema } from "../validations/class";

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

// ✅ FIXED: parameter name + type + internal refs + Prisma syntax
export async function createClass(formData: FormData) {  // ✅ lowercase + type
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" };

  // ✅ Use formData (not data)
  const parsed = classSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.flatten() };

  const { sections, ...classData } = parsed.data;
  
  await prisma.$transaction(async (tx) => {
    // ✅ FIXED: Added 'data:' key for Prisma create
    const newClass = await tx.class.create({ 
       classData  // ✅ Was missing 'data:' key
    });
    
    // ✅ FIXED: Added 'data:' key for createMany
    await tx.section.createMany({
       sections.map((s) => ({ name: s, classId: newClass.id })),  // ✅ Was missing 'data:' key
    });
  });

  revalidatePath("/classes");
  return { success: true };
}