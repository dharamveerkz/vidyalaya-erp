// lib/actions/student-actions.ts
'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { studentSchema } from '@/types/student' // adjust path as needed

export async function createStudent(formData: FormData) {
  const parsed = studentSchema.safeParse(Object.fromEntries(formData))
  
  if (!parsed.success) {
    return { error: 'Validation failed', details: parsed.error.flatten() }
  }

  try {
    await prisma.student.create({
      data: parsed.data 
    })
    
    revalidatePath('/students')
    return { success: true }
    
  } catch (error) {
    console.error('Database error:', error)
    return { error: 'Failed to create student' }
  }
}
