"use client"

import { useState } from "react"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Upload } from 'lucide-react'

interface Document {
  id: number
  name: string
  type: string
  size: string
  uploadDate: string
}

interface UploadDocumentModalProps {
  onUploadDocument: (document: Omit<Document, "id">) => void
}

export function UploadDocumentModal({ onUploadDocument }: UploadDocumentModalProps) {
  const [name, setName] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (file) {
      const newDocument = {
        name: name || file.name,
        type: file.type.split('/')[1].toUpperCase(),
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        uploadDate: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      }
      onUploadDocument(newDocument)
      setName("")
      setFile(null)
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="mr-2 h-4 w-4" /> Upload Document
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-gray-100">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Choose a file to upload. You can optionally provide a custom name for the document.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3 bg-gray-800 border-gray-700 text-gray-100"
                placeholder="Optional custom name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file" className="text-right">
                File
              </Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                className="col-span-3 bg-gray-800 border-gray-700 text-gray-100"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={!file}>
              Upload
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

