"use server"
import { auth } from "../auth"
import { prisma } from "../prisma"
import { revalidatePath } from "next/cache"
import { teacherSchema } from "../validations/teacher"

export async function getTeachers() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
  return prisma.teacher.findMany({
    include: { class: true, section: true, _count: { select: { exams: true } } },
    orderBy: { joinDate: "asc" },
  })
}

export async function createTeacher( FormData) {
  const session = await auth()
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" }

  const parsed = teacherSchema.safeParse(Object.fromEntries(data.entries()))
  if (!parsed.success) return { error: parsed.error.flatten() }

  await prisma.teacher.create({  parsed.data })
  revalidatePath("/teachers")
  return { success: true }
}