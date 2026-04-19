export default function ClassDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Class {params.id.toUpperCase()}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm"><h3 className="font-medium">Sections</h3><p className="mt-2 text-sm text-muted-foreground">A, B, C</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><h3 className="font-medium">Class Teacher</h3><p className="mt-2 text-sm text-muted-foreground">Mrs. Sharma</p></div>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="font-medium mb-4">Student Roster</h3>
        <p className="text-muted-foreground">Detailed list with attendance & fee status will render here...</p>
      </div>
    </div>
  );
}