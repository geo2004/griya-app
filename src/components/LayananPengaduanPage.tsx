import { ArrowLeft } from "lucide-react"

interface Props { onBack: () => void }

const services = [
  {
    img: "/design/image32.png",
    name: "Awasi PKP",
    desc: "Asistensi Pengawasan Integritas Kementerian PKP",
    link: "https://awasi.pkp.go.id/",
  },
  {
    img: "/design/image33.png",
    name: "Benar PKP",
    desc: "Pelaporan dan verifikasi informasi seputar PKP",
    link: "https://wa.me/6281288888911",
  },
  {
    img: "/design/lapor.png",
    name: "SP4N LAPOR!",
    desc: "Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional",
    link: "https://www.lapor.go.id/",
  },
  {
    img: "/design/logo_pkp.png",
    name: "Pengaduan BP3KP Jawa III",
    desc: "Sampaikan pengaduan langsung via WhatsApp",
    link: "https://wa.me/6282137191145",
  },
]

export default function LayananPengaduanPage({ onBack }: Props) {
  return (
    <div
      className="h-screen flex flex-col overflow-hidden relative"
      style={{ background: "#ffffff" }}
    >
      {/* Full-screen Joglo background */}
      <img
        src="/design/image3.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08, zIndex: 0 }}
      />
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between px-6 py-3 relative z-10">
        <div className="flex items-center gap-3">
          <img src="/design/image6.png" alt="Kemen PKP" className="h-10 w-auto object-contain" />
          <div className="leading-tight text-xs" style={{ color: "var(--pkp-teal)" }}>
            <p className="font-bold tracking-wide">KEMENTERIAN PKP</p>
            <p className="opacity-60">Gotong Royong Membangun Rumah Untuk Rakyat</p>
          </div>
        </div>
        <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border"
          style={{ borderColor: "var(--pkp-teal)", color: "var(--pkp-teal)" }}>
          <ArrowLeft size={14} /> Kembali
        </button>
      </header>

      {/* Body */}
      <div className="flex-1 flex min-h-0 relative z-10">
        {/* Left: hero image */}
        <div className="w-5/12 relative flex items-end overflow-hidden">
          <img
            src="/design/image31.png"
            alt="Staff BP3KP"
            className="w-full h-full object-contain object-bottom"
            style={{ maxHeight: "85vh" }}
          />
        </div>

        {/* Right: services */}
        <div className="w-7/12 flex flex-col justify-center px-10 py-8 gap-6">
          {/* Section header */}
          <div className="px-6 py-3 rounded-lg" style={{ background: "var(--pkp-teal-mid)" }}>
            <p className="text-lg font-bold tracking-wide" style={{ color: "var(--pkp-gold)" }}>
              LAYANAN PENGADUAN
            </p>
            <p className="text-xs text-white/60 mt-0.5">
              Gerbang Informasi Rujukan dan Layanan BP3KP Jawa III
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((svc, i) => (
              <a
                key={i}
                href={svc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl transition-all hover:scale-[1.03] hover:shadow-lg shadow-sm"
                style={{ background: "rgba(127,127,127,0.7)", border: "1px solid rgba(127,127,127,0.3)" }}
              >
                <img src={svc.img} alt={svc.name} className="w-20 h-20 object-contain" />
                <div>
                  <p className="text-sm font-bold leading-tight text-white">{svc.name}</p>
                  <p className="text-xs mt-1 leading-snug text-white/75">{svc.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}
