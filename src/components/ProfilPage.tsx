"use client"
import { useEffect, useRef } from "react"
import { ArrowLeft } from "lucide-react"

interface Props { onBack: () => void }

const offices = [
  {
    coords: [-7.782631957344028, 110.39480415979104] as [number, number],
    name: "Kantor Yogyakarta",
    address: "Jalan Laksda Adisucipto 165, Yogyakarta",
  },
  {
    coords: [-7.181291481441925, 110.42609354370057] as [number, number],
    name: "Kantor Ungaran",
    address: "Jalan PTPN Ngobo XVIII, Ungaran, Semarang",
  },
]

/* ── Interactive map (Leaflet via CDN, SSR-safe) ── */
function OfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef       = useRef<any>(null)

  useEffect(() => {
    let destroyed = false

    // Inject Leaflet CSS once
    if (!document.querySelector('link[href*="leaflet@1.9"]')) {
      const link = document.createElement("link")
      link.rel   = "stylesheet"
      link.href  = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)
    }

    const initMap = () => {
      if (destroyed || !containerRef.current || mapRef.current) return
      const L = (window as any).L

      const map = L.map(containerRef.current, {
        zoomControl: true,
        closePopupOnClick: true,
      }).setView([-7.48, 110.41], 9)
      mapRef.current = map

      // Carto Light basemap
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map)

      // Custom teardrop marker
      const makeIcon = () =>
        L.divIcon({
          className: "",
          html: `<div style="
            width:24px;height:24px;
            background:#04495F;border:3px solid #D5C68B;
            border-radius:50% 50% 50% 0;transform:rotate(-45deg);
            box-shadow:0 2px 8px rgba(0,0,0,0.35);cursor:pointer;
          "></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 24],
          popupAnchor: [0, -28],
        })

      offices.forEach(({ coords, name, address }) => {
        // Popup always open, no close button
        L.marker(coords, { icon: makeIcon() })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:Poppins,sans-serif;padding:2px 0">
              <p style="font-weight:700;color:#04495F;margin:0 0 4px;font-size:13px">${name}</p>
              <p style="font-size:11px;color:#555;margin:0;line-height:1.4">${address}</p>
            </div>`,
            { autoClose: false, closeOnClick: false, closeButton: false, maxWidth: 220 }
          )
          .openPopup()
      })
    }

    if ((window as any).L) {
      initMap()
    } else if (!document.querySelector('script[src*="leaflet@1.9"]')) {
      const script = document.createElement("script")
      script.src   = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      // Script tag exists but may still be loading
      document.querySelector('script[src*="leaflet@1.9"]')!
        .addEventListener("load", initMap, { once: true })
    }

    return () => {
      destroyed = true
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

/* ── Main Profil Page ── */
export default function ProfilPage({ onBack }: Props) {
  return (
    <div className="h-screen flex flex-col overflow-hidden select-none relative" style={{ background: "#ffffff" }}>

      {/* Full-screen Joglo background */}
      <img src="/design/image3.png" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }} />

      {/* ── MAIN SPLIT ── */}
      <div className="flex-1 flex min-h-0 relative z-10">

        {/* ── LEFT PANEL ── */}
        <div className="w-[43%] flex flex-col px-10 pt-8 pb-6 gap-5 overflow-y-auto">

          {/* Sugeng Rawuh + wordmark */}
          <div>
            <p style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
              color: "#7F7F7F",
              letterSpacing: "0.05em",
            }}>
              ꦱꦸꦒꦼꦁ ꦫꦮꦸꦃ [SUGENG RAWUH]
            </p>
            <img
              src="/design/GRIYA_JAWA3.png"
              alt="Griya Jawa3"
              className="mt-1 pointer-events-none"
              style={{ width: "clamp(160px, 55%, 260px)" }}
            />
          </div>

          {/* Subtitle */}
          <p className="text-xs font-bold tracking-widest" style={{ color: "var(--pkp-teal)" }}>
            GERBANG INFORMASI RUJUKAN DAN LAYANAN BP3KP JAWA III
          </p>

          {/* Profil heading */}
          <div style={{ marginTop: "-0.5rem" }}>
            <p className="text-sm font-bold tracking-widest" style={{ color: "var(--pkp-gold)" }}>
              PROFIL
            </p>
            <h2 className="font-black leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--pkp-teal)" }}>
              BP3KP JAWA III
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed" style={{ color: "#333" }}>
            Balai Pelaksana Penyediaan Perumahan dan Kawasan Permukiman Jawa III mempunyai tugas
            melaksanakan pembangunan rumah susun, rumah khusus, rumah swadaya, prasarana, sarana,
            dan utilitas umum (PSU), serta koordinasi penyediaan lahan dan pengembangan hunian di
            wilayah Provinsi Jawa Tengah dan Daerah Istimewa Yogyakarta.
          </p>

          {/* Website button */}
          <a
            href="https://pkp.go.id/balai/p2p-jawa-iii"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-8 py-3 rounded-full font-bold tracking-widest text-xs text-white transition-opacity hover:opacity-85 shadow-md"
            style={{ background: "var(--pkp-teal)", letterSpacing: "0.15em" }}
          >
            WEBSITE BP3KP JAWA III
          </a>

          {/* Back link */}
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold w-fit mt-auto"
            style={{ color: "var(--pkp-teal)" }}
          >
            <ArrowLeft size={13} /> Kembali
          </button>
        </div>

        {/* ── RIGHT PANEL: Webmap ── */}
        <div className="flex-1 relative">
          <OfficeMap />
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}
