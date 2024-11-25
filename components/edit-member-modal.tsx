"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Member {
  id: number
  name: string
  email: string
  status: "Active" | "Inactive"
  joinDate: string
}

interface EditMemberModalProps {
  member: Member | null
  isOpen: boolean
  onClose: () => void
  onSave: (member: Member) => void
}

export function EditMemberModal({ member, isOpen, onClose, onSave }: EditMemberModalProps) {
  const [editedMember, setEditedMember] = useState<Member | null>(null)

  useEffect(() => {
    if (member) {
      setEditedMember({ ...member })
    }
  }, [member])

  const handleSave = () => {
    if (editedMember) {
      onSave(editedMember)
    }
    onClose()
  }

  if (!editedMember) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Member</DialogTitle>
          <DialogDescription>
            Make changes to the member's information here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={editedMember.name}
              onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={editedMember.email}
              onChange={(e) => setEditedMember({ ...editedMember, email: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select 
              value={editedMember.status} 
              onValueChange={(value: "Active" | "Inactive") => setEditedMember({ ...editedMember, status: value })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="joinDate" className="text-right">
              Join Date
            </Label>
            <Input
              id="joinDate"
              type="date"
              value={editedMember.joinDate}
              onChange={(e) => setEditedMember({ ...editedMember, joinDate: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

