import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

const stats = [
  { label: "Total Revenue", value: "$48,295", change: "+12.5%", up: true },
  { label: "Active Users", value: "3,842", change: "+8.1%", up: true },
  { label: "New Orders", value: "214", change: "-3.2%", up: false },
  { label: "Conversion Rate", value: "4.7%", change: "+1.0%", up: true },
];

const recentActivity = [
  { user: "Alice Chen", action: "Placed a new order", time: "2 min ago", avatar: "AC" },
  { user: "Bob Martinez", action: "Updated their profile", time: "14 min ago", avatar: "BM" },
  { user: "Carol Smith", action: "Submitted a support ticket", time: "1 hr ago", avatar: "CS" },
  { user: "David Kim", action: "Upgraded to Pro plan", time: "3 hr ago", avatar: "DK" },
  { user: "Eva Nguyen", action: "Cancelled subscription", time: "5 hr ago", avatar: "EN" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar + main layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 min-h-screen">
          <div className="flex h-16 items-center gap-2 border-b border-zinc-200 px-6 dark:border-zinc-800">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM3 19.5a9 9 0 1118 0v.75a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V19.5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">Acme Inc.</span>
          </div>

          <nav className="flex-1 space-y-0.5 p-3">
            {[
              { label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: true },
              { label: "Analytics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", active: false },
              { label: "Orders", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", active: false },
              { label: "Customers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", active: false },
              { label: "Settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", active: false },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-zinc-200 p-3 dark:border-zinc-800">
            <Link
              href="/login"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              Sign out
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Dashboard</h1>
            <div className="flex items-center gap-3">
              <button className="relative rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-600" />
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                UC
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-6">
            {/* Greeting */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Good morning, User</h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Here&apos;s what&apos;s happening with your business today.</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{stat.value}</p>
                  <p className={`mt-2 flex items-center gap-1 text-sm font-medium ${stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${stat.up ? "" : "rotate-180"}`}>
                      <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                    </svg>
                    {stat.change} vs last month
                  </p>
                </div>
              ))}
            </div>

            {/* Recent activity */}
            <div className="rounded-xl border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Recent Activity</h3>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  View all
                </button>
              </div>
              <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {recentActivity.map((item) => (
                  <li key={item.user + item.time} className="flex items-center gap-4 px-6 py-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                      {item.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-50">{item.user}</p>
                      <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">{item.action}</p>
                    </div>
                    <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
