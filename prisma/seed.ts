import { PrismaClient, Role, FeeStatus, ExamStatus } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing records (safe order)
  await prisma.notification.deleteMany();
  await prisma.fee.deleteMany();
  await prisma.examResult.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.student.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.section.deleteMany();
  await prisma.class.deleteMany();
  await prisma.user.deleteMany();

  // Create demo users
  const adminPass = await hash("admin123", 10);
  const teacherPass = await hash("teacher123", 10);
  const studentPass = await hash("student123", 10);

  await prisma.user.create({
    data: {
      email: "admin@vidyalaya.com",
      password: adminPass,
      name: "Admin User",
      role: Role.ADMIN,
    },
  });

  await prisma.user.create({
    data: {
      email: "latha@vidyalaya.com",
      password: teacherPass,
      name: "Mrs. Latha Krishnan",
      role: Role.TEACHER,
    },
  });

  await prisma.user.create({
    data: {
      email: "aryan@vidyalaya.com",
      password: studentPass,
      name: "Aryan Singh",
      role: Role.STUDENT,
    },
  });

  // Create Class X with sections
  const classX = await prisma.class.create({
    data: { name: "Class X", academicYear: "2025-26" },
  });

  const secA = await prisma.section.create({
    data: { name: "A", classId: classX.id },
  });

  // Link teacher to class
  const teacher = await prisma.teacher.findFirst({
    where: { email: "latha@vidyalaya.com" },
  });
  if (teacher) {
    await prisma.teacher.update({
      where: { id: teacher.id },
      data: {
        employeeId: "TCH001",
        firstName: "Latha",
        lastName: "Krishnan",
        subject: "Mathematics",
        contact: "9876543210",
        joinDate: new Date("2020-06-01"),
        classId: classX.id,
        sectionId: secA.id,
      },
    });
  }

  // Link student to class
  const studentUser = await prisma.user.findFirst({
    where: { email: "aryan@vidyalaya.com" },
  });
  if (studentUser) {
    await prisma.student.create({
      data: {
        userId: studentUser.id,
        rollNumber: "1001",
        firstName: "Aryan",
        lastName: "Singh",
        dateOfBirth: new Date("2010-05-15"),
        guardianName: "Mohan Singh",
        contact: "9876543211",
        classId: classX.id,
        sectionId: secA.id,
      },
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
