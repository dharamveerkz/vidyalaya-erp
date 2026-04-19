import { z } from "zod"

export const studentSchema = z.object({
  rollNumber: z.string().min(1, "Roll number is required"),
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  dateOfBirth: z.coerce.date(),
  guardianName: z.string().min(2, "Guardian name required"),
  contact: z.string().regex(/^\d{10}$/, "Invalid 10-digit contact"),
  classId: z.string().min(1, "Class is required"),
  sectionId: z.string().min(1, "Section is required"),
  address: z.string().optional(),
})

export type StudentSchema = z.infer<typeof studentSchema>