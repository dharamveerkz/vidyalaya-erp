export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold">Exams & Marks</h2><p className="text-muted-foreground">Schedule examinations and record results.</p></div>
        <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Schedule Exam</button>
      </div>
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b"><tr><th className="py-3 px-4 font-medium">Exam</th><th className="py-3 px-4 font-medium">Subject</th><th className="py-3 px-4 font-medium">Date</th><th className="py-3 px-4 font-medium">Status</th></tr></thead>
          <tbody className="divide-y">
            {[["Unit Test 1", "Mathematics", "Mar 15, 2026", "Completed"], ["Mid Term", "Science", "Apr 20, 2026", "Upcoming"], ["Final", "English", "Jul 10, 2026", "Scheduled"]].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50"><td className="py-3 px-4">{row[0]}</td><td className="py-3 px-4">{row[1]}</td><td className="py-3 px-4">{row[2]}</td><td className="py-3 px-4"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row[3]==="Completed"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`}>{row[3]}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}