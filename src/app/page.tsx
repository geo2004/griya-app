"use client"
import { useState } from "react"
import Header from "@/components/Header"
import ServiceGroup from "@/components/ServiceGroup"
import LayananDataPage from "@/components/LayananDataPage"
import { serviceGroups } from "@/lib/services"

const BG = "linear-gradient(160deg, #0a1f2e 0%, #113F51 50%, #0a2535 100%)"

export default function Home() {
  const [page, setPage] = useState<"home" | "layanan-data">("home")

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background: BG }}>
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header — always visible */}
      <Header />

      {/* Sliding content area */}
      <div className="flex-1 min-h-0 relative overflow-hidden">
        {/* Home page */}
        <div
          className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out"
          style={{ transform: page === "home" ? "translateX(0)" : "translateX(-100%)" }}
        >
          <section className="flex-shrink-0 flex flex-col items-center text-center px-4 py-2">
            <h1 className="font-black text-white leading-none text-3xl mb-0.5">GRIYA</h1>
            <p className="text-white text-sm font-light tracking-widest mb-0.5">BP3KP Jawa III</p>
            <p className="text-xs mb-2" style={{ color: "var(--pkp-gold)" }}>
              Gerbang Informasi Rujukan dan Layanan Perumahan Balai Pelaksana Penyediaan Perumahan dan Kawasan Permukiman Jawa III
            </p>
            <div className="w-12 h-px rounded-full" style={{ background: "var(--pkp-gold)" }} />
          </section>

          <section className="flex-1 min-h-0 w-full max-w-5xl mx-auto px-5 py-2 pb-3 grid grid-cols-2 gap-2">
            {serviceGroups.map((group) => (
              <ServiceGroup key={group.group} group={group} onSubPage={(id) => setPage(id as "home" | "layanan-data")} />
            ))}
          </section>
        </div>

        {/* Sub-page */}
        <div
          className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out"
          style={{ transform: page === "layanan-data" ? "translateX(0)" : "translateX(100%)" }}
        >
          <LayananDataPage onBack={() => setPage("home")} />
        </div>
      </div>

      {/* Footer — always visible */}
      <footer
        className="flex-shrink-0 flex flex-wrap items-center gap-4 px-6 py-2 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
      >
        <span>BP3KP Jawa III © {new Date().getFullYear()}</span>
        <a href="#" className="hover:text-white transition-colors">Tata Cara Permohonan</a>
        <a href="#" className="hover:text-white transition-colors">Kontak</a>
        <a href="https://pkp.go.id/balai/p2p-jawa-iii" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          Website BP3KP Jawa III
        </a>
      </footer>
    </div>
  )
}
