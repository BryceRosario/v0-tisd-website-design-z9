import { redirect } from "next/navigation"

// Redirect from /dashboard to /dashboard/overview
export default function DashboardPage() {
  redirect("/dashboard/overview")
  return null
}
