'use client'

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, Bell, ShieldAlert } from 'lucide-react'

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 p-6">
        <div className="container mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <AdminCard
              title="User Management"
              description="Manage user accounts and permissions"
              icon={<Users className="h-6 w-6" />}
              href="/admin/users"
            />
            <AdminCard
              title="Content Management"
              description="Manage documents and pages"
              icon={<FileText className="h-6 w-6" />}
              href="/admin/content"
            />
            <AdminCard
              title="Notifications"
              description="Manage system notifications"
              icon={<Bell className="h-6 w-6" />}
              href="/admin/notifications"
            />
            <AdminCard
              title="Security Settings"
              description="Configure security options"
              icon={<ShieldAlert className="h-6 w-6" />}
              href="/admin/security"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function AdminCard({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Button className="mt-4 w-full" variant="outline" asChild>
          <a href={href}>Manage</a>
        </Button>
      </CardContent>
    </Card>
  )
}

