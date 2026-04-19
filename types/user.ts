import { Role } from "@prisma/client"

export interface AuthUser {
  id: string
  email: string
  name: string
  role: Role
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  name: string
  role: Role
}