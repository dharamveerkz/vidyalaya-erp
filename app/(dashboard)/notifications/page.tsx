export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold">Notifications</h2><p className="text-muted-foreground">Send alerts and view history.</p></div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
          <h3 className="font-medium">Compose Broadcast</h3>
          <input type="text" placeholder="Title" className="w-full rounded-md border px-3 py-2 text-sm bg-white" />
          <select className="w-full rounded-md border px-3 py-2 text-sm bg-white"><option>All Students & Staff</option><option>Class X Only</option><option>Teachers Only</option></select>
          <textarea placeholder="Message content..." className="w-full rounded-md border px-3 py-2 text-sm min-h-[100px] bg-white" />
          <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Send Notification</button>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="font-medium mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {[
              { msg: "Summer vacation announced (May 15 - Jun 10)", date: "2 days ago" },
              { msg: "April fee reminder sent to defaulters", date: "5 days ago" },
              { msg: "Exam schedule for Unit Test 2 updated", date: "1 week ago" }
            ].map((n, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b last:border-0">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5" />
                <div><p className="text-sm font-medium">{n.msg}</p><p className="text-xs text-muted-foreground">{n.date}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}