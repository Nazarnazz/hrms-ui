// src/app/components/charts/PieChartClient.tsx
"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Present", value: 63 },
  { name: "Absent", value: 20 },
  { name: "Day off", value: 10 },
  { name: "Unknown", value: 7 },
];

const COLORS = ["#304dd8", "#52ee", "#4abc91", "#124f16"];

export default function PieChartClient({ location }) {
  return (
    <div className="w-full h-64 min-w-[300px]">
      <p className="text-sm mb-2">
        Menampilkan data untuk: <strong>{location}</strong>
      </p>

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
