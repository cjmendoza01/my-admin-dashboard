"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ExportReportButtonProps {
  onExport: (format: 'csv' | 'xlsx') => void
}

export function ExportReportButton({ onExport }: ExportReportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async (format: 'csv' | 'xlsx') => {
    setIsExporting(true)
    await onExport(format)
    setIsExporting(false)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700" disabled={isExporting}>
          <Download className="mr-2 h-4 w-4" />
          {isExporting ? 'Exporting...' : 'Export Report'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800 text-gray-100">
        <DropdownMenuItem onClick={() => handleExport('csv')} className="hover:bg-gray-700">
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('xlsx')} className="hover:bg-gray-700">
          Export as XLSX
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

