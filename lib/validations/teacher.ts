import { z } from "zod"

export const teacherSchema = z.object({
  employeeId: z.string().min(1, "Employee ID required"),
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  subject: z.string().min(1, "Subject required"),
  contact: z.string().regex(/^\d{10}$/, "Invalid contact"),
  joinDate: z.coerce.date(),
  classId: z.string().optional(),
  sectionId: z.string().optional(),
})

export type TeacherSchema = z.infer<typeof teacherSchema>