// src/app/components/charts/PieChartClient.tsx
"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Chrome", value: 63 },
  { name: "Safari", value: 20 },
  { name: "Firefox", value: 10 },
  { name: "Edge", value: 7 },
];

const COLORS = ["#1d4ed8", "#22c55e", "#facc15", "#f87171"];

export default function PieChartClient() {
  return (
    <div className="w-full h-64 min-w-[300px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
