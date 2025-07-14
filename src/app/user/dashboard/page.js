"use client";

import { useRouter } from "next/navigation";
import Navigation from "@/app/components/menu-items/navigation-user";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const Riwayat = [
  { id: 1, tanggal: "20 Juli 2025", waktuMasuk: "07.43", waktuPulang: "17.00", keterangan: "Hadir", background: "bg-green-500" },
  { id: 2, tanggal: "19 Juli 2025", waktuMasuk: "07.50", waktuPulang: "17.08", keterangan: "Hadir", background: "bg-green-500" },
  { id: 3, tanggal: "18 Juli 2025", waktuMasuk: "07.43", waktuPulang: "-", keterangan: "Kurang", background: "bg-yellow-600" },
  { id: 4, tanggal: "17 Juli 2025", waktuMasuk: "-", waktuPulang: "-", keterangan: "Nihil", background: "bg-red-700" },
  { id: 6, tanggal: "16 Juli 2025", waktuMasuk: "07.00", waktuPulang: "17.01", keterangan: "Hadir", background: "bg-green-500" },
  { id: 7, tanggal: "15 Juli 2025", waktuMasuk: "07.43", waktuPulang: "17.30", keterangan: "Hadir", background: "bg-green-500" },
  { id: 8, tanggal: "14 Juli 2025", waktuMasuk: "07.13", waktuPulang: "17.44", keterangan: "Hadir", background: "bg-green-500" },
  { id: 9, tanggal: "13 Juli 2025", waktuMasuk: "07.40", waktuPulang: "17.23", keterangan: "Hadir", background: "bg-green-500" },
  { id: 10, tanggal: "12 Juli 2025", waktuMasuk: "07.39", waktuPulang: "17.05", keterangan: "Hadir", background: "bg-green-500" },
];

export default function Dashboard() {
  const router = useRouter();

  const total = Riwayat.length;

  const counts = {
    Hadir: Riwayat.filter((r) => r.keterangan === "Hadir").length,
    Kurang: Riwayat.filter((r) => r.keterangan === "Kurang").length,
    Nihil: Riwayat.filter((r) => r.keterangan === "Nihil").length,
  };

  const data = [
    { name: "Hadir", value: (counts.Hadir / total) * 100 },
    { name: "Kurang", value: (counts.Kurang / total) * 100 },
    { name: "Nihil", value: (counts.Nihil / total) * 100 },
  ];

  const COLORS = {
    Hadir: "#22c55e", // Tailwind green-500
    Kurang: "#eab308", // Tailwind yellow-500
    Nihil: "#ef4444", // Tailwind red-500
  };

  const features = [
    {
      name: "Absensi",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      onClick: () => router.push("/user/absensi"),
      color: "bg-blue-500",
    },
    {
      name: "Riwayat",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      onClick: () => router.push("/user/riwayat"),
      color: "bg-green-500",
    },
    {
      name: "Profil",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      onClick: () => router.push("/user/profil"),
      color: "bg-purple-500",
    },
    {
      name: "Ubah Password",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c1.105 0 2-.672 2-1.5S13.105 8 12 8s-2 .672-2 1.5S10.895 11 12 11zM12 11v2m0 4h.01M12 17v.01M21 12.5A8.38 8.38 0 0112 21a8.38 8.38 0 01-9-8.5A8.38 8.38 0 0112 3a8.38 8.38 0 019 9.5z"
          />
        </svg>
      ),
      onClick: () => router.push("/user/ubah-password"),
      color: "bg-red-500",
    },
  ];

  return (
    <>
      <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Dashboard</div>
      <div className="min-h-screen px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <button key={idx} onClick={feature.onClick} className={`rounded-xl flex flex-col items-center justify-center p-4 ${feature.color} shadow-lg text-white h-28 transition-transform hover:scale-105`}>
              {feature.icon}
              <span className="mt-2 text-sm font-semibold">{feature.name}</span>
            </button>
          ))}
        </div>
        <div className="w-full h-64 p-4 rounded-lg shadow">
          <h2 className="text-center font-semibold mb-4 text-gray-800 dark:text-white">Statistik Kehadiran</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis unit="%" />
              <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
              <Bar dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="fixed bottom-0 left-0 w-full">
          <Navigation />
        </div>
      </div>
    </>
  );
}
