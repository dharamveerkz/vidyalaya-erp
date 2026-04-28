"use server";
import { signIn } from "@/auth";  // Make sure path is correct
import { loginSchema } from "../validations/auth";
import { revalidatePath } from "next/cache";

export async function loginUser(formData: FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: "Invalid credentials" };

  try {
    // ✅ Auth.js v5: pass credentials directly in formData-style object
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    // Auth.js v5 throws on error
    if (error.type === "CredentialsSignin") {
      return { error: "Invalid email or password" };
    }
    return { error: "Authentication failed" };
  }
}