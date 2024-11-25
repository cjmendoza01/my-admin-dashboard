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

interface Event {
  id: number
  name: string
  date: string
  location: string
  participants: number
}

interface EditEventModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
  onSave: (event: Event) => void
}

export function EditEventModal({ event, isOpen, onClose, onSave }: EditEventModalProps) {
  const [editedEvent, setEditedEvent] = useState<Event | null>(null)

  useEffect(() => {
    if (event) {
      setEditedEvent({ ...event })
    }
  }, [event])

  const handleSave = () => {
    if (editedEvent) {
      onSave(editedEvent)
    }
    onClose()
  }

  if (!editedEvent) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Make changes to the event's information here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={editedEvent.name}
              onChange={(e) => setEditedEvent({ ...editedEvent, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={editedEvent.date}
              onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              value={editedEvent.location}
              onChange={(e) => setEditedEvent({ ...editedEvent, location: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="participants" className="text-right">
              Participants
            </Label>
            <Input
              id="participants"
              type="number"
              value={editedEvent.participants}
              onChange={(e) => setEditedEvent({ ...editedEvent, participants: parseInt(e.target.value) })}
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

