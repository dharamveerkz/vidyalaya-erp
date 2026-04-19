export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold">Classes & Sections</h2><p className="text-muted-foreground">Manage academic structure.</p></div>
        <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Add Class</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["X", "IX", "VIII", "VII", "VI"].map((cls) => (
          <div key={cls} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition cursor-pointer">
            <h3 className="text-lg font-semibold">Class {cls}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["A", "B", "C"].map(sec => <span key={sec} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">Section {sec}</span>)}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">32 Students · 2 Teachers</p>
          </div>
        ))}
      </div>
    </div>
  );
}