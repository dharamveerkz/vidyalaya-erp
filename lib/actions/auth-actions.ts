// ./lib/actions/auth-actions.ts
"use server";

// ✅ Import auth + signIn + signOut from updated mock auth
import { auth, signIn, signOut } from "../auth";
import { prisma } from "../prisma";
import { loginSchema, registerSchema } from "../validations/auth";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";

// ✅ loginUser: now signIn accepts arguments (mock handles them)
export async function loginUser(formData: FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: "Invalid credentials" };

  try {
    // ✅ Mock signIn now accepts (provider, options) - no type error!
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    // Handle mock or real auth errors
    if (error?.type === "CredentialsSignin") {
      return { error: "Invalid email or password" };
    }
    return { error: "Authentication failed" };
  }
}

// ✅ registerUser: fixed Prisma create syntax + formData usage
export async function registerUser(formData: FormData) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return { error: "Unauthorized" };
  }

  const parsed = registerSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }

  const exists = await prisma.user.findUnique({ 
    where: { email: parsed.data.email } 
  });
  if (exists) {
    return { error: "Email already registered" };
  }

  // ✅ FIXED: Added 'data' key for Prisma create
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

// ✅ logoutUser: signOut now accepts options
export async function logoutUser() {
  await signOut({ redirectTo: "/login" });
}