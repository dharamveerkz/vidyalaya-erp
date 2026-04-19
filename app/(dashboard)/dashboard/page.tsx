export default function DashboardPage() {
  const stats = [
    { label: "Total Students", value: "1,240" },
    { label: "Teachers", value: "48" },
    { label: "Attendance Rate", value: "94%" },
    { label: "Fee Collected", value: "₹3.8L" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back. Here's an overview of your school.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-3xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm min-h-[300px] flex items-center justify-center text-muted-foreground">
        Activity & Analytics chart will render here
      </div>
    </div>
  );
}