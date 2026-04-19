export default function FeesPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold">Fee Management</h2><p className="text-muted-foreground">Track payments and outstanding dues.</p></div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-muted-foreground">Collected</p><p className="mt-2 text-2xl font-bold text-green-600">₹3.8L</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-muted-foreground">Pending</p><p className="mt-2 text-2xl font-bold text-amber-600">₹42K</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-muted-foreground">Overdue</p><p className="mt-2 text-2xl font-bold text-red-600">₹15K</p></div>
      </div>
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b"><tr><th className="py-3 px-4 font-medium">Student</th><th className="py-3 px-4 font-medium">Type</th><th className="py-3 px-4 font-medium">Amount</th><th className="py-3 px-4 font-medium">Status</th></tr></thead>
          <tbody className="divide-y">
            {[["Aryan Singh", "Tuition", "₹8,500", "Paid"], ["Preethi N.", "Transport", "₹3,200", "Pending"], ["Ravi T.", "Exam", "₹1,500", "Overdue"]].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50"><td className="py-3 px-4">{row[0]}</td><td className="py-3 px-4">{row[1]}</td><td className="py-3 px-4 font-mono">{row[2]}</td><td className="py-3 px-4"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row[3]==="Paid"?"bg-green-100 text-green-700":row[3]==="Pending"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700"}`}>{row[3]}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}