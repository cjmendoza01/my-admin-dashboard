"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Admin Profile</DialogTitle>
          <DialogDescription>
            Your profile information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/avatars/01.png" alt="@admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">Admin User</p>
              <p className="text-sm text-muted-foreground">admin@example.com</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

