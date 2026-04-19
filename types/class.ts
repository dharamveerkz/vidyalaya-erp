export interface ClassSummary {
  id: string
  name: string
  academicYear: string
  sectionCount: number
  studentCount: number
  teacherCount: number
  sections: Array<{ id: string; name: string; studentCount: number }>
}

export interface SectionSummary {
  id: string
  name: string
  classId: string
  studentCount: number
  teacherCount: number
}

export interface ClassFormData {
  name: string
  academicYear: string
  sections: string[] // e.g., ["A", "B"]
  classTeacherId?: string
}