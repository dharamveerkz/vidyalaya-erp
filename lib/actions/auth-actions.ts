"use server"
import { auth, signIn, signOut } from "../auth"
import { prisma } from "../prisma"
import { loginSchema, registerSchema } from "../validations/auth"
import { hash } from "bcryptjs"
import { revalidatePath } from "next/cache"

export async function loginUser( FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(data.entries()))
  if (!parsed.success) return { error: "Invalid credentials" }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    })
    return { success: true }
  } catch {
    return { error: "Invalid email or password" }
  }
}

export async function registerUser( FormData) {
  const session = await auth()
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" }

  const parsed = registerSchema.safeParse(Object.fromEntries(data.entries()))
  if (!parsed.success) return { error: parsed.error.flatten() }

  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } })
  if (exists) return { error: "Email already registered" }

  await prisma.user.create({
     {
      email: parsed.data.email,
      password: await hash(parsed.data.password, 10),
      name: parsed.data.name,
      role: parsed.data.role,
    },
  })
  revalidatePath("/teachers")
  return { success: true }
}

export async function logoutUser() {
  await signOut({ redirectTo: "/login" })
}