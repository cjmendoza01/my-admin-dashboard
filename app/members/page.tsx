"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from 'lucide-react'
import { AddMemberModal } from "@/components/add-member-modal"

interface Member {
  id: number
  name: string
  email: string
  status: "Active" | "Inactive"
  joinDate: string
}

const initialMembers: Member[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", joinDate: "2023-01-15" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive", joinDate: "2022-11-30" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active", joinDate: "2023-03-22" },
  { id: 4, name: "Diana Ross", email: "diana@example.com", status: "Active", joinDate: "2023-02-14" },
  { id: 5, name: "Edward Norton", email: "edward@example.com", status: "Inactive", joinDate: "2022-12-05" },
]

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddMember = (newMember: Omit<Member, "id">) => {
    const id = Math.max(...members.map(m => m.id)) + 1
    setMembers([...members, { ...newMember, id }])
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
      <SiteHeader />
      <main className="flex-1 p-6">
        <div className="container mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Members</h1>
            <AddMemberModal onAddMember={handleAddMember} />
          </div>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-300">Member List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                <Input 
                  className="max-w-sm bg-gray-800 border-gray-700 text-gray-300" 
                  placeholder="Search members..." 
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
                    <TableHead className="text-gray-400">Email</TableHead>
                    <TableHead className="text-gray-400">Status</TableHead>
                    <TableHead className="text-gray-400">Join Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium text-gray-300">{member.name}</TableCell>
                      <TableCell className="text-gray-400">{member.email}</TableCell>
                      <TableCell className="text-gray-400">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          member.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                        }`}>
                          {member.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-400">{member.joinDate}</TableCell>
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

