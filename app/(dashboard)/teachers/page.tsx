export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold">Teachers</h2><p className="text-muted-foreground">Manage teaching staff and assignments.</p></div>
        <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Add Teacher</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="rounded-xl border bg-white p-6 shadow-sm flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-sm font-bold">{i}</div>
            <div>
              <h3 className="font-medium">Teacher {i}</h3>
              <p className="text-sm text-muted-foreground">Mathematics · Class X</p>
              <p className="text-xs text-muted-foreground mt-1">Joined 2020</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}