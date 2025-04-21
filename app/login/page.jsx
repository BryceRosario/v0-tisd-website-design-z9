"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LoginPage() {
  const [userType, setUserType] = useState("student")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect or show success message
      window.location.href = "/dashboard/overview"
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 text-foreground/80 hover:text-primary group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md space-y-6 p-6">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-primary-foreground">T</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Welcome to TISD</h1>
            <p className="text-muted-foreground">Please select your user type and login</p>
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="grid grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant={userType === "student" ? "default" : "outline"}
                  className={userType === "student" ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setUserType("student")}
                >
                  Student
                </Button>
                <Button
                  type="button"
                  variant={userType === "mentor" ? "default" : "outline"}
                  className={userType === "mentor" ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setUserType("mentor")}
                >
                  Mentor
                </Button>
                <Button
                  type="button"
                  variant={userType === "admin" ? "default" : "outline"}
                  className={userType === "admin" ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setUserType("admin")}
                >
                  Admin
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {userType === "student" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="student-email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="student@tisd.edu"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="student-password" className="text-foreground">
                          Password
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="student-password"
                        type="password"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </>
                )}

                {userType === "mentor" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="mentor-email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="mentor-email"
                        type="email"
                        placeholder="mentor@tisd.edu"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="mentor-password" className="text-foreground">
                          Password
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="mentor-password"
                        type="password"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mentor-id" className="text-foreground">
                        Mentor ID
                      </Label>
                      <Input
                        id="mentor-id"
                        placeholder="Enter your mentor ID"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </>
                )}

                {userType === "admin" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="admin-username" className="text-foreground">
                        Username
                      </Label>
                      <Input
                        id="admin-username"
                        placeholder="Enter your admin username"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="admin-password" className="text-foreground">
                          Password
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="admin-password"
                        type="password"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-code" className="text-foreground">
                        Admin Access Code
                      </Label>
                      <Input
                        id="admin-code"
                        type="password"
                        placeholder="Enter your access code"
                        className="bg-background border-border focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="remember"
                    className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none text-foreground/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me for 30 days
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center text-sm">
            <p className="text-foreground/80">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:text-primary/80 font-medium">
                Sign up
              </Link>
            </p>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>
              By logging in, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-full relative">
              <hr className="w-full border-t border-border" />
              <span className="absolute px-3 text-xs text-muted-foreground bg-background">Need Help?</span>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/help" className="text-sm text-muted-foreground hover:text-primary">
                Help Center
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact Support
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} TISD. All rights reserved.</p>
      </footer>
    </div>
  )
}
