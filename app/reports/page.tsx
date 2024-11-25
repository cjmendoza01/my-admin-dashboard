"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ExportReportButton } from "@/components/export-report-button"

const membershipData = [
  { month: 'Jan', active: 800, inactive: 200 },
  { month: 'Feb', active: 850, inactive: 220 },
  { month: 'Mar', active: 900, inactive: 180 },
  { month: 'Apr', active: 920, inactive: 200 },
  { month: 'May', active: 950, inactive: 210 },
  { month: 'Jun', active: 980, inactive: 220 },
]

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("6months")

  const handleExport = async (format: 'csv' | 'xlsx') => {
    // In a real application, this would call an API endpoint to generate and download the report
    console.log(`Exporting report in ${format} format`)
    
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate a file download
    const blob = new Blob([JSON.stringify(membershipData)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `membership_report.${format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
      <SiteHeader />
      <main className="flex-1 p-6">
        <div className="container mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Reports</h1>
            <ExportReportButton onExport={handleExport} />
          </div>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-300">Membership Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-gray-300">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-gray-300">
                    <SelectItem value="1month">Last Month</SelectItem>
                    <SelectItem value="3months">Last 3 Months</SelectItem>
                    <SelectItem value="6months">Last 6 Months</SelectItem>
                    <SelectItem value="1year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={membershipData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      itemStyle={{ color: '#E5E7EB' }}
                    />
                    <Bar dataKey="active" fill="#4ADE80" name="Active Members" />
                    <Bar dataKey="inactive" fill="#EF4444" name="Inactive Members" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Total Members</dt>
                    <dd className="font-semibold text-gray-200">1,234</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Active Members</dt>
                    <dd className="font-semibold text-gray-200">980</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">New Members (This Month)</dt>
                    <dd className="font-semibold text-gray-200">45</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Retention Rate</dt>
                    <dd className="font-semibold text-gray-200">92%</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Activity Summary</span>
                    <ExportReportButton onExport={handleExport} />
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Quarterly Financial Report</span>
                    <ExportReportButton onExport={handleExport} />
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Annual Membership Growth</span>
                    <ExportReportButton onExport={handleExport} />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

