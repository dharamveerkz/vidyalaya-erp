import { z } from "zod"

export const classSchema = z.object({
  name: z.string().min(1, "Class name required"),
  academicYear: z.string().regex(/^\d{4}-\d{2}$/, "Format: YYYY-YY"),
  classTeacherId: z.string().optional(),
  sections: z.array(z.string().min(1)).min(1, "At least one section required"),
})

export type ClassSchema = z.infer<typeof classSchema>