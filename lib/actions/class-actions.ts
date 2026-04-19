"use server"
import { auth } from "../auth"
import { prisma } from "../prisma"
import { revalidatePath } from "next/cache"
import { classSchema } from "../validations/class"

export async function getClasses() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
  return prisma.class.findMany({
    include: {
      sections: true,
      _count: { select: { students: true } },
      classTeacher: { select: { name: true } },
    },
  })
}

export async function getClassById(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
  return prisma.class.findUnique({
    where: { id },
    include: { sections: true, students: { take: 10 }, teachers: true },
  })
}

export async function createClass( FormData) {
  const session = await auth()
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" }

  const parsed = classSchema.safeParse(Object.fromEntries(data.entries()))
  if (!parsed.success) return { error: parsed.error.flatten() }

  const { sections, ...classData } = parsed.data
  await prisma.$transaction(async (tx) => {
    const newClass = await tx.class.create({  classData })
    await tx.section.createMany({
       sections.map((s) => ({ name: s, classId: newClass.id })),
    })
  })

  revalidatePath("/classes")
  return { success: true }
}