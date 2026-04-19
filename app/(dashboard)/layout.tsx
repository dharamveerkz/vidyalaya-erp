import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/login");

  const navItems = ["dashboard", "students", "classes", "attendance", "exams", "fees", "teachers", "notifications"];

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 border-r bg-white p-4 md:block">
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">V</div>
          <span className="font-semibold">Vidyalaya</span>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a key={item} href={`/${item}`} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 capitalize">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6">
          <h1 className="text-lg font-semibold capitalize">{new URL(process.env.VERCEL_URL || "http://localhost:3000").pathname.split("/")[1]?.replace("-", " ") || "Dashboard"}</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{session.user.role}</span>
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">{session.user.name?.charAt(0) || "U"}</div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}