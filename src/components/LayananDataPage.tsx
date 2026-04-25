"use client"
import { ArrowLeft, Database } from "lucide-react"
import { layananDataServices } from "@/lib/services"
import ServiceCard from "./ServiceCard"

export default function LayananDataPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full flex flex-col">
      {/* Back nav — sits just below the shared header */}
      <div
        className="flex-shrink-0 flex items-center gap-2 px-6 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <ArrowLeft size={13} strokeWidth={2} />
          Kembali
        </button>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          Layanan Data &amp; Informasi
        </span>
      </div>

      {/* Title */}
      <section className="flex-shrink-0 flex flex-col items-center text-center px-4 py-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <Database size={22} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.85)" }} />
        </div>
        <h2 className="font-bold text-white text-xl mb-1">Layanan Data &amp; Informasi</h2>
        <p className="text-xs" style={{ color: "var(--pkp-gold)" }}>
          Akses sistem informasi perumahan dan kawasan permukiman
        </p>
        <div className="w-10 h-px mt-3 rounded-full" style={{ background: "var(--pkp-gold)" }} />
      </section>

      {/* Cards */}
      <section className="flex-1 min-h-0 flex items-center justify-center px-6">
        <div
          className="w-full max-w-2xl rounded-2xl px-8 py-6"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex items-start justify-center gap-12 flex-wrap">
            {layananDataServices.map((service) => (
              <ServiceCard key={service.name} service={service} showDescription />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
