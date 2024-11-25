"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Calendar } from 'lucide-react'

interface Event {
  id: number
  name: string
  date: string
  location: string
  participants: number
}

const initialEvents: Event[] = [
  { id: 1, name: "Summer Basketball Camp", date: "2023-07-15", location: "Main Court", participants: 30 },
  { id: 2, name: "3v3 Tournament", date: "2023-08-05", location: "Outdoor Courts", participants: 48 },
  { id: 3, name: "Youth Training Session", date: "2023-08-12", location: "Training Hall", participants: 20 },
  { id: 4, name: "Charity Game", date: "2023-09-01", location: "City Arena", participants: 100 },
  { id: 5, name: "Members' Meetup", date: "2023-09-15", location: "Club House", participants: 50 },
]

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
      <SiteHeader />
      <main className="flex-1 p-6">
        <div className="container mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Events</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </div>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-300">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                <Input 
                  className="max-w-sm bg-gray-800 border-gray-700 text-gray-300" 
                  placeholder="Search events..." 
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
                    <TableHead className="text-gray-400">Event Name</TableHead>
                    <TableHead className="text-gray-400">Date</TableHead>
                    <TableHead className="text-gray-400">Location</TableHead>
                    <TableHead className="text-gray-400">Participants</TableHead>
                    <TableHead className="text-gray-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium text-gray-300">{event.name}</TableCell>
                      <TableCell className="text-gray-400">{event.date}</TableCell>
                      <TableCell className="text-gray-400">{event.location}</TableCell>
                      <TableCell className="text-gray-400">{event.participants}</TableCell>
                      <TableCell className="text-gray-400">
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                          Edit
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

