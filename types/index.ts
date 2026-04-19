export * from "./user"
export * from "./student"
export * from "./teacher"
export * from "./class"

// Extend NextAuth Session & User types
import { Role } from "@prisma/client"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: Role
    } & DefaultSession["user"]
  }
  interface User {
    id: string
    role: Role
  }
}