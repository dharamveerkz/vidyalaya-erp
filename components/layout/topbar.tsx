"use client";
import { Menu, Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Topbar({ user, onMenuClick }: { user: { name: string; role: string }; onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 w-full">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-1" onClick={onMenuClick}><Menu className="h-5 w-5" /></button>
        <h2 className="text-lg font-semibold capitalize hidden md:block">{window.location.pathname.split("/")[1]?.replace("-", " ") || "Dashboard"}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border">
          <Search className="h-4 w-4 text-slate-400" />
          <input type="text" placeholder="Quick search..." className="bg-transparent text-sm outline-none w-48" />
        </div>
        <button className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-slate-50 transition">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-slate-900 text-white text-xs font-bold">{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}