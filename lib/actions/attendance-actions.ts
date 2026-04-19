"use server";
import { auth } from "../auth";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

export async function getAttendanceByDate(date: string, sectionId: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  return prisma.attendance.findMany({
    where: { date: new Date(date), sectionId },
    include: {
      student: {
        select: { firstName: true, lastName: true, rollNumber: true },
      },
    },
  });
}

export async function markAttendance(FormData) {
  const session = await auth();
  if (!session || !["ADMIN", "TEACHER"].includes(session.user.role))
    return { error: "Unauthorized" };

  const date = new Date(data.get("date") as string);
  const sectionId = data.get("sectionId") as string;
  const records: Array<{
    studentId: string;
    status: "PRESENT" | "ABSENT" | "LEAVE";
  }> = [];

  for (const [key, value] of data.entries()) {
    if (
      key.startsWith("student_") &&
      ["PRESENT", "ABSENT", "LEAVE"].includes(value as string)
    ) {
      records.push({
        studentId: key.replace("student_", ""),
        status: value as any,
      });
    }
  }

  await prisma.$transaction(
    records.map((rec) =>
      prisma.attendance.upsert({
        where: { studentId_date: { studentId: rec.studentId, date } },
        update: { status: rec.status },
        create: {
          studentId: rec.studentId,
          date,
          sectionId,
          status: rec.status,
        },
      }),
    ),
  );

  revalidatePath("/attendance");
  return { success: true };
}
