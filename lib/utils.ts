import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, locale = "en-IN") {
  return new Intl.NumberFormat(locale, { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(amount)
}

export function formatDate(date: Date | string, locale = "en-IN") {
  return new Date(date).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })
}