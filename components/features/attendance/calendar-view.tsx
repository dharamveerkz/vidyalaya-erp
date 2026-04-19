export function CalendarView({ month = "April 2026", attendance = "p,p,p,a,p,h,h,p,p,l,p,p,p,h,h,p,p,p,a,p,p,h,h,p,p,p,p,a,p,p,h" }: { month?: string; attendance?: string }) {
  const days = attendance.split(",");
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center"><h3 className="font-semibold">{month}</h3><span className="text-sm font-medium text-green-600">92% Present</span></div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-400 mb-2">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div key={i} className={`aspect-square flex items-center justify-center rounded text-xs font-medium transition hover:scale-105 cursor-pointer ${d === "p" ? "bg-green-100 text-green-700" : d === "a" ? "bg-red-100 text-red-700" : d === "l" ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-400"}`}>
            {i + 1}
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-xs text-slate-500 pt-2">
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-green-100"></div>Present</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-red-100"></div>Absent</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-yellow-100"></div>Leave</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-slate-100"></div>Holiday</span>
      </div>
    </div>
  );
}