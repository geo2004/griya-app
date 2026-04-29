"use client"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"

interface Props { onBack: () => void }

type SubPage = null | "data-informasi"

const onlineServices = [
  {
    logo: "/design/klinikpkp.png",
    name: "Klinik PKP Jawa III",
    link: "https://krsjawa3.com",
    subPage: null,
    goldCircle: true,
  },
  {
    logo: "/design/logo_pkp.png",
    name: "Data & Informasi",
    link: null,
    subPage: "data-informasi" as SubPage,
    goldCircle: false,
  },
  {
    logo: "/design/logo_pkp.png",
    name: "Konsultasi Perumahan",
    link: "https://wa.me/6282137191145",
    subPage: null,
    goldCircle: false,
  },
]

const offlineServices = [
  {
    img: "/design/image30.png",
    name: "Klinik PKP Jawa III",
    link: "https://krsjawa3.com",
  },
  {
    img: "/design/image29.png",
    name: "MPP Yogyakarta",
    link: "https://mpp.jogjakota.go.id/",
  },
]

const dataApps = [
  { name: "SIBARU",      desc: "Sistem Informasi Pengusulan Bantuan Perumahan",                   link: "https://sibaru.pkp.go.id",        logo: "/design/logo_pkp.png" },
  { name: "SIRENG",      desc: "Sistem Informasi dan Registrasi Pengembang Perumahan",             link: "https://sireng.pkp.go.id",        logo: "/design/logo_pkp.png" },
  { name: "SIKUMBANG",   desc: "Sistem Informasi Ketersediaan Rumah Umum dan Pengembang",          link: "https://sikumbang.tapera.go.id/", logo: "/design/logo_pkp.png" },
  { name: "E-PPID PKP",  desc: "Layanan Informasi Publik Kementerian PKP",   link: "https://e-ppid.pkp.go.id/",      logo: "/design/logo_pkp.png" },
]

/* ─── Data & Informasi Sub-page ─────────────────────────────────────── */
function DataInformasiPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative" style={{ background: "#ffffff" }}>
      <img src="/design/image3.png" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }} />

      <header className="flex-shrink-0 flex items-center justify-between px-6 py-3 relative z-10">
        <div className="flex items-center gap-3">
          <img src="/design/image6.png" alt="Kemen PKP" className="h-10 w-auto object-contain" />
          <div className="leading-tight text-xs" style={{ color: "var(--pkp-teal)" }}>
            <p className="font-bold tracking-wide">KEMENTERIAN PKP</p>
            <p className="opacity-60">Gotong Royong Membangun Rumah Untuk Rakyat</p>
          </div>
        </div>
        <button onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border"
          style={{ borderColor: "var(--pkp-teal)", color: "var(--pkp-teal)" }}>
          <ArrowLeft size={14} /> Kembali
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8 relative z-10">
        <div className="px-6 py-3 rounded-lg" style={{ background: "var(--pkp-teal-mid)" }}>
          <p className="text-lg font-bold tracking-wide" style={{ color: "var(--pkp-gold)" }}>
            DATA &amp; INFORMASI
          </p>
          <p className="text-xs text-white/60 mt-0.5">
            Akses data dan informasi seputar PKP Jawa III
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 max-w-4xl w-full">
          {dataApps.map((app, i) => (
            <a key={i} href={app.link} target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-xl transition-all hover:scale-[1.03] hover:shadow-lg shadow-sm"
              style={{ background: "#ffffff", border: "1px solid rgba(4,73,95,0.15)" }}>
              <img src={app.logo} alt={app.name} className="w-16 h-16 object-contain" />
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

/* ─── Main Layanan Umum Page ─────────────────────────────────────────── */
export default function LayananUmumPage({ onBack }: Props) {
  const [subPage, setSubPage] = useState<SubPage>(null)

  if (subPage === "data-informasi") return <DataInformasiPage onBack={() => setSubPage(null)} />

  return (
    <div className="h-screen flex flex-col overflow-hidden select-none relative" style={{ background: "#ffffff" }}>

      {/* Full-screen Joglo background */}
      <img src="/design/image3.png" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }} />

      {/* ── HEADER ── */}
      <header className="flex-shrink-0 flex items-start justify-between px-8 pt-5 pb-0 relative z-10">
        <div className="flex flex-col">
          <p className="text-xs font-medium leading-relaxed" style={{ color: "var(--pkp-teal)", opacity: 0.8 }}>
            Gotong Royong Membangun Rumah Untuk Rakyat
          </p>
          <button onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold mt-1 w-fit"
            style={{ color: "var(--pkp-teal)" }}>
            <ArrowLeft size={12} /> Kembali
          </button>
        </div>
        <img src="/design/image6.png" alt="Kemen PKP" className="h-20 w-auto object-contain" />
      </header>

      {/* ── MAIN 3-COLUMN BODY ── */}
      <div className="flex-1 flex min-h-0 relative z-10">

        {/* ── LEFT: LAYANAN ONLINE ── */}
        <div className="w-[27%] flex flex-col items-center justify-center px-6 py-4 gap-6">

          {/* Section pill */}
          <div className="w-full text-center py-3 px-4 rounded-full font-bold tracking-widest text-sm"
            style={{ background: "var(--pkp-gold)", color: "var(--pkp-teal)" }}>
            LAYANAN ONLINE
          </div>

          {/* Service rows */}
          <div className="flex flex-col gap-5 w-full">
            {onlineServices.map((svc, i) => {
              const inner = (
                <div key={i} className="flex items-center gap-3 w-full group cursor-pointer">
                  {/* Circle icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden shadow-md"
                    style={{ background: svc.goldCircle ? "var(--pkp-gold)" : "var(--pkp-teal)" }}>
                    <img src={svc.logo} alt={svc.name} className="w-9 h-9 object-contain" />
                  </div>
                  {/* Label pill */}
                  <div className="flex-1 py-2.5 px-4 rounded-full font-bold text-sm text-center text-white transition-all group-hover:opacity-80 shadow-sm"
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

        {/* ── CENTER: HERO ── */}
        <div className="flex-1 relative flex flex-col items-center justify-end overflow-hidden">

          {/* Sugeng Rawuh */}
          <p className="absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 pointer-events-none"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
              color: "#7F7F7F",
              letterSpacing: "0.05em",
            }}>
            ꦱꦸꦒꦼꦁ ꦫꦮꦸꦃ [SUGENG RAWUH]
          </p>

          {/* GRIYA wordmark */}
          <img
            src="/design/GRIYA_JAWA3.png"
            alt="Griya Jawa3"
            className="absolute z-10 pointer-events-none"
            style={{ top: "8%", left: "50%", transform: "translateX(-50%)", width: "clamp(160px, 26%, 280px)" }}
          />

          {/* Person image — centered, proportional */}
          <img
            src="/design/picture10.png"
            alt="Staff BP3KP"
            className="relative object-contain object-bottom"
            style={{ zIndex: 2, maxHeight: "66vh", width: "auto", maxWidth: "100%" }}
          />
        </div>

        {/* ── RIGHT: LAYANAN OFFLINE ── */}
        <div className="w-[27%] flex flex-col items-center justify-center px-6 py-4 gap-6">

          {/* Section pill */}
          <div className="w-full text-center py-3 px-4 rounded-full font-bold tracking-widest text-sm text-white"
            style={{ background: "var(--pkp-teal)" }}>
            LAYANAN OFFLINE
          </div>

          {/* Service items */}
          <div className="flex flex-col gap-5 w-full">
            {offlineServices.map((svc, i) => (
              <a key={i} href={svc.link} target="_blank" rel="noopener noreferrer"
                className="flex flex-col gap-2 w-full group transition-all hover:scale-[1.02]">
                {/* Building photo */}
                <div className="w-full rounded-xl overflow-hidden shadow-md" style={{ height: "110px" }}>
                  <img src={svc.img} alt={svc.name} className="w-full h-full object-cover" />
                </div>
                {/* Label pill */}
                <div className="w-full text-center py-2.5 px-4 rounded-full font-bold text-sm text-white shadow-sm transition-all group-hover:opacity-80"
                  style={{ background: "var(--pkp-teal)" }}>
                  {svc.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}
