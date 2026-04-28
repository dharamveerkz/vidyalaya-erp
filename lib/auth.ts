// lib/auth.ts
import { NextResponse } from "next/server";

// 1. Valid Mock Handlers for API Route
export const handlers = {
  GET: async (req: Request) => NextResponse.json({ status: "ok" }),
  POST: async (req: Request) => NextResponse.json({ status: "ok" }),
};

// 2. Mock Session (Returns Admin by default)
export const auth = async () => ({
  user: {
    id: "1",
    name: "Admin User",
    email: "admin@vidyalaya.com",
    role: "ADMIN",
    image: null,
  },
});

// 3. ✅ UPDATED: Mock Sign In/Out - now accepts arguments to match usage
export const signIn = async (provider?: string, options?: any) => {
  // Mock: log for debugging, always succeed
  if (options?.email) {
    console.log("🔐 Mock signIn:", { provider, email: options.email });
  }
  return { url: "/dashboard", error: null };
};

export const signOut = async (options?: { redirectTo?: string }) => {
  const redirect = options?.redirectTo || "/login";
  console.log("🔓 Mock signOut →", redirect);
  return { url: redirect };
};