export interface TeacherSummary {
  id: string
  employeeId: string
  firstName: string
  lastName: string
  fullName: string
  subject: string
  contact: string
  assignedClass?: string
  assignedSection?: string
  joinDate: string
  email?: string
}

export interface TeacherFormData {
  employeeId: string
  firstName: string
  lastName: string
  subject: string
  contact: string
  joinDate: string
  classId?: string
  sectionId?: string
  email?: string
  password?: string
}