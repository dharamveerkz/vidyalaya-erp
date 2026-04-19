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

// 3. Mock Sign In/Out
export const signIn = async () => ({ url: "/dashboard", error: null });
export const signOut = async () => ({ url: "/login" });
