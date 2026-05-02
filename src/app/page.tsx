"use client"
import { useState } from "react"
import ProfilPage from "@/components/ProfilPage"
import LayananUmumPage from "@/components/LayananUmumPage"
import LayananPengaduanPage from "@/components/LayananPengaduanPage"
import LayananInternalPage from "@/components/LayananInternalPage"

type Page = "home" | "profil" | "layanan-umum" | "layanan-pengaduan" | "layanan-internal"

const menuItems: { label: string; page?: Page; href?: string; gold?: boolean; outline?: boolean }[] = [
  { label: "PROFIL BP3KP JAWA III",            page: "profil" },
  { label: "LAYANAN UMUM",                     page: "layanan-umum" },
  { label: "LAYANAN PENGADUAN",                page: "layanan-pengaduan" },
  { label: "LAYANAN INTERNAL BP3KP JAWA III",  page: "layanan-internal", gold: true },
  { label: "PENDAFTARAN LAYANAN",              href: "https://skm-bp3kpj3.vercel.app/", outline: true },
]

const socialLinks = [
  { icon: "/design/instagram.png",  href: "https://www.instagram.com/bp3kp_jawa3",      label: "Instagram", isImg: true  },
  { icon: "/design/youtube.svg",    href: "https://www.youtube.com/@KlinikPKPJawa3",     label: "YouTube",   isImg: false },
  { icon: "/design/whatsapp.svg",   href: "https://wa.me/6282137191145",                 label: "WhatsApp",  isImg: false },
  { icon: "/design/email.svg",      href: "mailto:bp3kp.jawa3@pkp.go.id",               label: "Email",     isImg: false },
]

export default function Home() {
  const [page, setPage] = useState<Page>("home")

  if (page === "profil")            return <ProfilPage           onBack={() => setPage("home")} />
  if (page === "layanan-umum")      return <LayananUmumPage      onBack={() => setPage("home")} />
  if (page === "layanan-pengaduan") return <LayananPengaduanPage onBack={() => setPage("home")} />
  if (page === "layanan-internal")  return <LayananInternalPage  onBack={() => setPage("home")} />

  return (
    <div
      className="h-screen flex flex-col overflow-hidden select-none"
      style={{ background: "#ffffff" }}
    >
      {/* ── TOP BAR ── */}
      <header className="flex-shrink-0 flex items-start justify-between px-8 pt-5 pb-0 z-10">
        {/* Top-left tagline */}
        <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--pkp-teal)", opacity: 0.8 }}>
          Gotong Royong Membangun Rumah Untuk Rakyat
        </p>
        {/* Top-right: KEMENPKP logo */}
        <img src="/design/image6.png" alt="Kemen PKP" className="h-20 w-auto object-contain" />
      </header>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex min-h-0">

        {/* ── LEFT: wordmark + staff ── */}
        <div className="relative w-1/2 flex flex-col justify-end overflow-hidden">

          {/* Building background — Joglo sketch */}
          <img
            src="/design/image3.png"
            alt="Gedung BP3KP"
            className="absolute bottom-0 right-0 object-contain object-bottom pointer-events-none"
            style={{ zIndex: 1, width: "80%", opacity: 0.18 }}
          />

          {/* Staff photo — transparent background */}
          <img
            src="/design/image5_processed.png"
            alt="Staff BP3KP Jawa III"
            className="relative w-4/5 object-contain object-bottom"
            style={{ zIndex: 2, maxHeight: "84vh" }}
          />

          {/* GRIYA_JAWA3 wordmark */}
          <img
            src="/design/GRIYA_JAWA3.png"
            alt="griya Jawa3"
            className="absolute z-10 pointer-events-none"
            style={{ top: "8%", left: "clamp(56px, 10%, 110px)", width: "clamp(240px, 42%, 400px)" }}
          />
        </div>

        {/* ── RIGHT: greeting + buttons + social ── */}
        <div className="w-1/2 flex flex-col justify-center px-12 gap-6">

          {/* Javanese greeting — Bebas Neue, grey, positioned higher */}
          <div style={{ marginTop: "-2rem" }}>
            <p
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                color: "#7F7F7F",
                letterSpacing: "0.05em",
                lineHeight: 1.1,
              }}
            >
              ꦱꦸꦒꦼꦁ ꦫꦮꦸꦃ [SUGENG RAWUH]
            </p>
            <p
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.75rem, 1.1vw, 1rem)",
                color: "var(--pkp-teal)",
                letterSpacing: "0.08em",
                marginTop: "1.1rem",
              }}
            >
              GERBANG INFORMASI RUJUKAN DAN LAYANAN BP3KP JAWA III
            </p>
          </div>

          {/* Menu buttons */}
          <div className="flex flex-col gap-4">
            {menuItems.map(({ label, page: p, href, gold, outline }) => {
              const cls = "w-full font-bold tracking-widest text-sm py-4 rounded-full transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.99] shadow-md text-center"
              const style = {
                background: outline ? "transparent" : gold ? "var(--pkp-gold)" : "var(--pkp-teal)",
                color: outline ? "var(--pkp-teal)" : gold ? "var(--pkp-teal)" : "#ffffff",
                border: outline ? "2px solid var(--pkp-teal)" : "none",
                letterSpacing: "0.12em",
                fontFamily: "'Poppins', sans-serif",
              }
              if (href) {
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
                    {label}
                  </a>
                )
              }
              return (
                <button key={p} onClick={() => setPage(p!)} className={cls} style={style}>
                  {label}
                </button>
              )
            })}
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon, href, label, isImg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all hover:scale-110 hover:opacity-70"
              >
                <img
                  src={icon}
                  alt={label}
                  className="h-6 w-6 object-contain"
                  style={{ filter: isImg ? "none" : "none" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="flex-shrink-0 h-4 w-full" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}
