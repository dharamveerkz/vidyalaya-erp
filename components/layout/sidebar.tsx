"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, BookOpen, Calendar, FileText, DollarSign, Bell, Settings, GraduationCap } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", roles: ["ADMIN", "TEACHER", "STUDENT"] },
  { href: "/students", icon: Users, label: "Students", roles: ["ADMIN", "TEACHER"] },
  { href: "/classes", icon: BookOpen, label: "Classes", roles: ["ADMIN"] },
  { href: "/attendance", icon: Calendar, label: "Attendance", roles: ["ADMIN", "TEACHER"] },
  { href: "/exams", icon: FileText, label: "Exams", roles: ["ADMIN", "TEACHER", "STUDENT"] },
  { href: "/fees", icon: DollarSign, label: "Fees", roles: ["ADMIN", "STUDENT"] },
  { href: "/notifications", icon: Bell, label: "Alerts", roles: ["ADMIN", "TEACHER", "STUDENT"] },
];

export function Sidebar({ role = "ADMIN" }: { role?: string }) {
  const pathname = usePathname();
  const items = navItems.filter(item => item.roles.includes(role));

  return (
    <aside className="hidden w-64 flex-col border-r bg-white md:flex h-screen sticky top-0">
      <div className="flex items-center gap-3 px-6 py-5 border-b">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white"><GraduationCap className="h-5 w-5" /></div>
        <span className="font-bold text-lg tracking-tight">Vidyalaya</span>
      </div>
      <nav className="flex-1 space-y-1 p-3 overflow-y-auto">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors", isActive ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}>
              <item.icon className="h-4 w-4" /> {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t">
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700">
          <Settings className="h-4 w-4" /> Settings
        </Link>
      </div>
    </aside>
  );
}