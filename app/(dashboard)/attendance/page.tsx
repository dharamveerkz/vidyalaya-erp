export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold">Attendance</h2><p className="text-muted-foreground">Mark and track daily attendance.</p></div>
      <div className="flex gap-4 flex-wrap">
        <select className="rounded-md border px-3 py-2 text-sm bg-white"><option>Class X - A</option><option>Class IX - B</option></select>
        <input type="date" className="rounded-md border px-3 py-2 text-sm bg-white" />
        <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 ml-auto">Save Record</button>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="space-y-3">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
              <span className="font-medium">Student {i}</span>
              <div className="flex gap-2">
                <button className="rounded px-3 py-1 text-xs bg-green-100 text-green-700 hover:bg-green-200">P</button>
                <button className="rounded px-3 py-1 text-xs bg-red-100 text-red-700 hover:bg-red-200">A</button>
                <button className="rounded px-3 py-1 text-xs bg-yellow-100 text-yellow-700 hover:bg-yellow-200">L</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}