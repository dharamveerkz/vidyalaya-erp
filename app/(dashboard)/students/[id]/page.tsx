export default function StudentDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-lg font-bold">{params.id.charAt(0).toUpperCase()}</div>
        <div><h2 className="text-2xl font-bold">Student #{params.id}</h2><p className="text-muted-foreground">Academic records and attendance history.</p></div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm"><h3 className="font-medium">Profile</h3><p className="mt-2 text-sm text-muted-foreground">Personal details, guardians, contact info...</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><h3 className="font-medium">Attendance</h3><p className="mt-2 text-sm text-muted-foreground">Monthly calendar & percentage...</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><h3 className="font-medium">Fees</h3><p className="mt-2 text-sm text-muted-foreground">Payment history & dues...</p></div>
      </div>
    </div>
  );
}