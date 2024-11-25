"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentActivities() {
  return (
    <div className="space-y-8">
      <div className="text-sm text-gray-400">
        You have 3 new activities this month.
      </div>
      <ActivityItem
        initials="OM"
        name="Olivia Martin"
        action="Updated membership status to Active"
        time="Just now"
      />
      <ActivityItem
        initials="JL"
        name="Jackson Lee"
        action="Uploaded new document"
        time="5m ago"
      />
      <ActivityItem
        initials="IN"
        name="Isabella Nguyen"
        action="Created a new member account"
        time="2h ago"
      />
    </div>
  )
}

function ActivityItem({ initials, name, action, time }: { initials: string; name: string; action: string; time: string }) {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9 bg-gray-800">
        <AvatarFallback className="text-gray-400">{initials}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium text-gray-200">{name}</p>
        <p className="text-sm text-gray-400">{action}</p>
      </div>
      <div className="ml-auto text-sm text-gray-500">{time}</div>
    </div>
  )
}

