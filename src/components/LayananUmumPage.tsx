"use client"
import { useState } from "react"
import { ArrowLeft, MapPin, Clock, Check } from "lucide-react"
import {
  onlineServices,
  offlineCounters,
  dataApps,
  type OfflineCounter,
  type LayananUmumSubPage as SubPage,
} from "@/lib/services"

interface Props { onBack: () => void }

/* ─── Data & Informasi Sub-page ─────────────────────────────────────── */
function DataInformasiPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden relative" style={{ background: "#ffffff" }}>
      <img src="/design/image3.png" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }} />

      <header className="flex-shrink-0 flex items-center justify-between px-4 md:px-6 py-3 relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/design/image6.png" alt="Kemen PKP" className="h-8 md:h-10 w-auto object-contain" />
          <div className="leading-tight text-xs" style={{ color: "var(--pkp-teal)" }}>
            <p className="font-bold tracking-wide">KEMENTERIAN PKP</p>
            <p className="opacity-60 hidden sm:block">Gotong Royong Membangun Rumah Untuk Rakyat</p>
          </div>
        </div>
        <button onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border"
          style={{ borderColor: "var(--pkp-teal)", color: "var(--pkp-teal)" }}>
          <ArrowLeft size={14} /> Kembali
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8 px-4 md:px-8 py-6 md:py-0 relative z-10">
        <div className="px-4 md:px-6 py-3 rounded-lg" style={{ background: "var(--pkp-teal-mid)" }}>
          <p className="text-base md:text-lg font-bold tracking-wide" style={{ color: "var(--pkp-gold)" }}>
            DATA &amp; INFORMASI
          </p>
          <p className="text-xs text-white/60 mt-0.5">
            Akses Layanan Data dan Informasi Perumahan
          </p>
        </div>

        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full">
          {dataApps.map((app, i) => (
            <a key={i} href={app.link} target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl transition-all hover:scale-[1.03] hover:shadow-lg shadow-sm"
              style={{ background: "#ffffff", border: "1px solid rgba(4,73,95,0.15)" }}>
              <img src={app.logo} alt={app.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <div className="text-center">
                <p className="text-sm font-bold leading-tight" style={{ color: "var(--pkp-teal)" }}>{app.name}</p>
                <p className="text-xs mt-1 opacity-60 leading-snug">{app.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}

/* ─── Counter (Layanan Offline) Sub-page ─────────────────────────────── */
function CounterPage({ counter, onBack }: { counter: OfflineCounter; onBack: () => void }) {
  return (
    <div className="min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden relative" style={{ background: "#ffffff" }}>
      <img src="/design/image3.png" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }} />

      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 md:px-6 py-3 relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/design/image6.png" alt="Kemen PKP" className="h-8 md:h-10 w-auto object-contain" />
          <div className="leading-tight text-xs" style={{ color: "var(--pkp-teal)" }}>
            <p className="font-bold tracking-wide">KEMENTERIAN PKP</p>
            <p className="opacity-60 hidden sm:block">Gotong Royong Membangun Rumah Untuk Rakyat</p>
          </div>
        </div>
        <button onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border"
          style={{ borderColor: "var(--pkp-teal)", color: "var(--pkp-teal)" }}>
          <ArrowLeft size={14} /> Kembali
        </button>
      </header>

      {/* Body */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 relative z-10 px-4 md:px-10 py-5 md:py-8 gap-5 md:gap-8">

        {/* Hero photo (placeholder) */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <div className="relative w-full h-48 md:h-full rounded-2xl overflow-hidden shadow-md" style={{ background: "rgba(4,73,95,0.08)" }}>
            <img src={counter.heroImg} alt={counter.name} className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "var(--pkp-gold)", color: "var(--pkp-teal)" }}>
              Foto placeholder
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-4 md:gap-5 overflow-y-auto">
          <div>
            <p className="text-xs md:text-sm font-bold tracking-widest" style={{ color: "var(--pkp-gold-dark)" }}>
              LAYANAN OFFLINE
            </p>
            <h2 className="font-black leading-tight" style={{ fontSize: "clamp(1.4rem, 4vw, 2.4rem)", color: "var(--pkp-teal)" }}>
              {counter.name}
            </h2>
          </div>

          {/* Location + hours */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--pkp-teal)" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--pkp-teal)" }}>{counter.location}</p>
                <p className="text-xs opacity-70 leading-snug">{counter.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--pkp-teal)" }} />
              <div className="text-xs" style={{ color: "#333" }}>
                {counter.hours.map((h, i) => <p key={i} className="leading-relaxed">{h}</p>)}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-wide mb-2" style={{ color: "var(--pkp-teal)" }}>
              LAYANAN DI COUNTER INI
            </p>
            <ul className="flex flex-col gap-1.5">
              {counter.services.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "#333" }}>
                  <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "var(--pkp-gold)" }}>
                    <Check size={11} strokeWidth={3} style={{ color: "var(--pkp-teal)" }} />
                  </span>
                  <span className="leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href={counter.actionLink} target="_blank" rel="noopener noreferrer"
            className="w-fit px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold tracking-widest text-xs text-white transition-opacity hover:opacity-85 shadow-md"
            style={{ background: "var(--pkp-teal)", letterSpacing: "0.1em" }}>
            {counter.actionLabel}
          </a>
        </div>
      </div>

      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}

/* ─── Main Layanan Umum Page ─────────────────────────────────────────── */
export default function LayananUmumPage({ onBack }: Props) {
  const [subPage, setSubPage] = useState<SubPage>(null)

  if (subPage === "data-informasi") return <DataInformasiPage onBack={() => setSubPage(null)} />

  const activeCounter = offlineCounters.find((c) => c.subPage === subPage)
  if (activeCounter) return <CounterPage counter={activeCounter} onBack={() => setSubPage(null)} />

  return (
    <div className="min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden select-none relative" style={{ background: "#ffffff" }}>

      {/* Full-screen Joglo background */}
      <img src="/design/image3.png" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }} />

      {/* ── HEADER ── */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 md:px-8 pt-4 md:pt-5 pb-0 relative z-10">
        <div className="flex flex-col">
          <p className="text-xs font-medium leading-relaxed hidden md:block" style={{ color: "var(--pkp-teal)", opacity: 0.8 }}>
            Gotong Royong Membangun Rumah Untuk Rakyat
          </p>
          <button onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold mt-0 md:mt-1 w-fit"
            style={{ color: "var(--pkp-teal)" }}>
            <ArrowLeft size={12} /> Kembali
          </button>
        </div>
        <img src="/design/image6.png" alt="Kemen PKP" className="h-12 md:h-20 w-auto object-contain" />
      </header>

      {/* ── BODY ── */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 relative z-10">

        {/* ── LAYANAN ONLINE ── */}
        <div className="w-full md:w-[27%] flex flex-col items-center justify-center px-4 md:px-6 py-4 gap-4 md:gap-6">
          <div className="w-full text-center py-2.5 md:py-3 px-4 rounded-full font-bold tracking-widest text-sm"
            style={{ background: "var(--pkp-gold)", color: "var(--pkp-teal)" }}>
            LAYANAN ONLINE
          </div>

          <div className="flex flex-col gap-3 md:gap-5 w-full">
            {onlineServices.map((svc, i) => {
              const inner = (
                <div className="flex items-center gap-3 w-full group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden shadow-md"
                    style={{ background: svc.goldCircle ? "var(--pkp-gold)" : "var(--pkp-teal)" }}>
                    <img src={svc.logo} alt={svc.name} className="w-8 h-8 md:w-9 md:h-9 object-contain" />
                  </div>
                  <div className="flex-1 py-2 md:py-2.5 px-3 md:px-4 rounded-full font-bold text-sm text-center text-white transition-all group-hover:opacity-80 shadow-sm"
                    style={{ background: "var(--pkp-teal)" }}>
                    {svc.name}
                  </div>
                </div>
              )

              if (svc.link) {
                return (
                  <a key={i} href={svc.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    {inner}
                  </a>
                )
              }
              return (
                <button key={i} className="w-full" onClick={() => setSubPage(svc.subPage)}>
                  {inner}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── CENTER HERO — desktop only ── */}
        <div className="hidden md:flex flex-1 relative flex-col items-center justify-end overflow-hidden">
          <p className="absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 pointer-events-none"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
              color: "#7F7F7F",
              letterSpacing: "0.05em",
            }}>
            ꦱꦸꦒꦼꦁ ꦫꦮꦸꦃ [SUGENG RAWUH]
          </p>
          <img
            src="/design/GRIYA_JAWA3.png"
            alt="Griya Jawa3"
            className="absolute z-10 pointer-events-none"
            style={{ top: "8%", left: "50%", transform: "translateX(-50%)", width: "clamp(192px, 31.2%, 336px)" }}
          />
          <img
            src="/design/picture10.png"
            alt="Staff BP3KP"
            className="relative object-contain object-bottom"
            style={{ zIndex: 2, maxHeight: "66vh", width: "auto", maxWidth: "100%" }}
          />
        </div>

        {/* ── LAYANAN OFFLINE ── */}
        <div className="w-full md:w-[27%] flex flex-col items-center justify-center px-4 md:px-6 py-4 gap-4 md:gap-6">
          <div className="w-full text-center py-2.5 md:py-3 px-4 rounded-full font-bold tracking-widest text-sm text-white"
            style={{ background: "var(--pkp-teal)" }}>
            LAYANAN OFFLINE
          </div>

          <div className="flex flex-col gap-3 md:gap-5 w-full">
            {offlineCounters.map((c) => (
              <button key={c.subPage} onClick={() => setSubPage(c.subPage)}
                className="flex flex-col gap-2 w-full group transition-all hover:scale-[1.02]">
                <div className="w-full rounded-xl overflow-hidden shadow-md" style={{ height: "90px" }}>
                  <img src={c.cardImg} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-full text-center py-2 md:py-2.5 px-4 rounded-full font-bold text-sm text-white shadow-sm transition-all group-hover:opacity-80"
                  style={{ background: "var(--pkp-teal)" }}>
                  {c.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}
