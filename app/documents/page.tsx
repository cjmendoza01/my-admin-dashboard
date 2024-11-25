"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Trash2 } from 'lucide-react'
import { UploadDocumentModal } from "@/components/upload-document-modal"

interface Document {
  id: number
  name: string
  type: string
  size: string
  uploadDate: string
}

const initialDocuments: Document[] = [
  { id: 1, name: "Annual Report 2023", type: "PDF", size: "2.5 MB", uploadDate: "2023-06-15" },
  { id: 2, name: "Member List", type: "XLSX", size: "1.2 MB", uploadDate: "2023-05-22" },
  { id: 3, name: "Event Photos", type: "ZIP", size: "15 MB", uploadDate: "2023-07-01" },
  { id: 4, name: "Budget Proposal", type: "DOCX", size: "500 KB", uploadDate: "2023-06-28" },
  { id: 5, name: "Newsletter Template", type: "PDF", size: "1.8 MB", uploadDate: "2023-06-10" },
]

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleUploadDocument = (newDocument: Omit<Document, "id">) => {
    const id = Math.max(...documents.map(d => d.id)) + 1
    setDocuments([...documents, { ...newDocument, id }])
  }

  const handleDeleteDocument = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  const handleDownloadDocument = (document: Document) => {
    // In a real application, this would initiate a file download
    console.log(`Downloading document: ${document.name}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
      <SiteHeader />
      <main className="flex-1 p-6">
        <div className="container mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Documents</h1>
            <UploadDocumentModal onUploadDocument={handleUploadDocument} />
          </div>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-300">Document Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                <Input 
                  className="max-w-sm bg-gray-800 border-gray-700 text-gray-300" 
                  placeholder="Search documents..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="ghost" className="ml-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-400">Name</TableHead>
                    <TableHead className="text-gray-400">Type</TableHead>
                    <TableHead className="text-gray-400">Size</TableHead>
                    <TableHead className="text-gray-400">Upload Date</TableHead>
                    <TableHead className="text-gray-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium text-gray-300">{doc.name}</TableCell>
                      <TableCell className="text-gray-400">{doc.type}</TableCell>
                      <TableCell className="text-gray-400">{doc.size}</TableCell>
                      <TableCell className="text-gray-400">{doc.uploadDate}</TableCell>
                      <TableCell className="text-gray-400">
                        <Button variant="ghost" size="sm" className="mr-2" onClick={() => handleDownloadDocument(doc)}>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600" onClick={() => handleDeleteDocument(doc.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

