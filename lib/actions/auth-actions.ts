// ./lib/actions/auth-actions.ts
"use server";
import { auth, signIn, signOut } from "../auth";
import { prisma } from "../prisma";
import { loginSchema, registerSchema } from "../validations/auth";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";

// ✅ FIXED: parameter name + type + internal reference
export async function loginUser(formData: FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData.entries())); // ✅ formData
  if (!parsed.success) return { error: "Invalid credentials" };

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });
    return { success: true };
  } catch {
    return { error: "Invalid email or password" };
  }
}

// ✅ FIXED: parameter + type + internal ref + prisma.create syntax
export async function registerUser(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") return { error: "Unauthorized" };

  const parsed = registerSchema.safeParse(Object.fromEntries(formData.entries())); // ✅ formData
  if (!parsed.success) return { error: parsed.error.flatten() };

  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (exists) return { error: "Email already registered" };

  // ✅ FIXED: Added 'data:' key for Prisma create
  await prisma.user.create({
    data: {  // ← This was missing!
      email: parsed.data.email,
      password: await hash(parsed.data.password, 10),
      name: parsed.data.name,
      role: parsed.data.role,
    },
  });
  
  revalidatePath("/teachers");
  return { success: true };
}

export async function logoutUser() {
  await signOut({ redirectTo: "/login" });
}