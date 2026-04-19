"use client";
import { cn } from "@/lib/utils";
import { X, GraduationCap, LayoutDashboard, Users, Calendar, Bell } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const links = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/students", icon: Users, label: "Students" },
  { href: "/attendance", icon: Calendar, label: "Attendance" },
  { href: "/notifications", icon: Bell, label: "Alerts" },
];

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => { if (open) document.body.style.overflow = "hidden"; else document.body.style.overflow = ""; }, [open]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("fixed inset-y-0 left-0 w-72 bg-white p-5 shadow-xl transform transition-transform", open ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2"><div className="h-7 w-7 rounded-md bg-slate-900 flex items-center justify-center text-white"><GraduationCap className="h-4 w-4"/></div><span className="font-bold">Vidyalaya</span></div>
          <button onClick={onClose}><X className="h-5 w-5 text-slate-500" /></button>
        </div>
        <nav className="space-y-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700 transition">
              <link.icon className="h-5 w-5" /> {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}