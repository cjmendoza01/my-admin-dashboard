"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", total: 100 },
  { name: "Feb", total: 120 },
  { name: "Mar", total: 150 },
  { name: "Apr", total: 180 },
  { name: "May", total: 200 },
  { name: "Jun", total: 220 },
  { name: "Jul", total: 240 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          contentStyle={{ background: "#1f2937", border: "none" }}
          itemStyle={{ color: "#e5e7eb" }}
        />
        <Bar dataKey="total" fill="#4ade80" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

