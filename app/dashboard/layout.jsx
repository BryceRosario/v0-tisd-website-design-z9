"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BarChart, PieChart, Calendar, Users, Lightbulb, Bell, Settings, Search, ChevronDown, Menu } from "lucide-react"

export default function DashboardLayout({ children, activeTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname.includes("/dashboard/projects")) return "projects"
    if (pathname.includes("/dashboard/analytics")) return "analytics"
    if (pathname.includes("/dashboard/calendar")) return "calendar"
    if (pathname.includes("/dashboard/team")) return "team"
    return "overview"
  }

  const currentTab = activeTab || getActiveTab()

  // Handle navigation
  const navigateTo = (tab) => {
    if (tab === "overview") {
      router.push("/dashboard/overview")
    } else {
      router.push(`/dashboard/${tab}`)
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border p-4 flex justify-between items-center bg-background">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline-block">TISD</span>
          </Link>
        </div>

        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9 w-[300px] bg-background" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`w-64 border-r border-border bg-card/50 p-4 ${mobileMenuOpen ? "block" : "hidden"} md:block fixed md:static top-16 bottom-0 z-30 bg-background md:bg-transparent`}
        >
          <nav className="space-y-1">
            <Button
              variant={currentTab === "overview" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard/overview">
                <BarChart className="mr-2 h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button
              variant={currentTab === "projects" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard/projects">
                <Lightbulb className="mr-2 h-4 w-4" />
                Projects
              </Link>
            </Button>
            <Button
              variant={currentTab === "analytics" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard/analytics">
                <PieChart className="mr-2 h-4 w-4" />
                Analytics
              </Link>
            </Button>
            <Button
              variant={currentTab === "calendar" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard/calendar">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Link>
            </Button>
            <Button variant={currentTab === "team" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
              <Link href="/dashboard/team">
                <Users className="mr-2 h-4 w-4" />
                Team
              </Link>
            </Button>
          </nav>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Recent Projects</h3>
            <div className="space-y-2">
              <div className="p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <p className="text-sm font-medium">AI Resource Allocation</p>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">65%</span>
                </div>
              </div>
              <div className="p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <p className="text-sm font-medium">Knowledge Platform</p>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: "40%" }}></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">40%</span>
                </div>
              </div>
              <div className="p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <p className="text-sm font-medium">Learning Environment</p>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">85%</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-background/50 md:ml-0">{children}</main>
      </div>
    </div>
  )
}
