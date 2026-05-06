import { ArrowLeft, UserCog, Package, Navigation, Mail, CircleUser, BarChart2 } from "lucide-react"

interface Props { onBack: () => void }

const services = [
  {
    icon: { desktop: <UserCog size={28} strokeWidth={1.5} />, mobile: <UserCog size={22} strokeWidth={1.5} /> },
    name: "Layanan Kepegawaian",
    link: "https://kepegawaian-bp3kpj3.vercel.app/",
  },
  {
    icon: { desktop: <Package size={28} strokeWidth={1.5} />, mobile: <Package size={22} strokeWidth={1.5} /> },
    name: "Inventarisasi BMN",
    link: "https://bmn-app.vercel.app/",
  },
  {
    icon: { desktop: <Navigation size={28} strokeWidth={1.5} />, mobile: <Navigation size={22} strokeWidth={1.5} /> },
    name: "Go PKP",
    link: "https://go.pkp.go.id/",
  },
  {
    icon: { desktop: <Mail size={28} strokeWidth={1.5} />, mobile: <Mail size={22} strokeWidth={1.5} /> },
    name: "E-office PKP",
    link: "https://eoffice.pkp.go.id",
  },
  {
    icon: { desktop: <CircleUser size={28} strokeWidth={1.5} />, mobile: <CircleUser size={22} strokeWidth={1.5} /> },
    name: "MyPKP",
    link: "https://my.pkp.go.id",
  },
  {
    icon: { desktop: <BarChart2 size={28} strokeWidth={1.5} />, mobile: <BarChart2 size={22} strokeWidth={1.5} /> },
    name: "Sistem Pelaporan Kinerja",
    link: "https://lapkin-app.vercel.app/",
  },
]

export default function LayananInternalPage({ onBack }: Props) {
  return (
    <div
      className="min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden relative"
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
      <header className="flex-shrink-0 flex items-center justify-between px-4 md:px-6 py-3 relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/design/image6.png" alt="Kemen PKP" className="h-8 md:h-10 w-auto object-contain" />
          <div className="leading-tight text-xs" style={{ color: "var(--pkp-teal)" }}>
            <p className="font-bold tracking-wide">KEMENTERIAN PKP</p>
            <p className="opacity-60 hidden sm:block">Gotong Royong Membangun Rumah Untuk Rakyat</p>
          </div>
        </div>
        <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border"
          style={{ borderColor: "var(--pkp-teal)", color: "var(--pkp-teal)" }}>
          <ArrowLeft size={14} /> Kembali
        </button>
      </header>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-10 gap-8 md:gap-10 relative z-10">

        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg mb-3"
            style={{ background: "var(--pkp-teal)" }}>
            <span className="text-sm md:text-lg font-bold text-white tracking-wide text-center">
              LAYANAN INTERNAL BP3KP JAWA III
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
              style={{ background: "var(--pkp-gold)", color: "var(--pkp-teal)" }}>
              Khusus Pegawai
            </span>
          </div>
          <p className="text-xs opacity-50">Akses layanan internal khusus untuk pegawai BP3KP Jawa III</p>
        </div>

        {/* Service buttons */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 md:gap-x-10 md:gap-y-6"
          style={{ alignItems: "flex-start" }}>
          {services.map((svc, i) => (
            <a
              key={i}
              href={svc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
              style={{ width: "76px" }}
            >
              {/* Mobile circle */}
              <div
                className="w-[76px] h-[76px] md:hidden rounded-full flex items-center justify-center text-white transition-all group-hover:scale-105 group-hover:shadow-xl shadow-md flex-shrink-0"
                style={{ background: "var(--pkp-teal)" }}
              >
                {svc.icon.mobile}
              </div>
              {/* Desktop circle */}
              <div
                className="hidden md:flex w-24 h-24 rounded-full items-center justify-center text-white transition-all group-hover:scale-105 group-hover:shadow-xl shadow-md flex-shrink-0"
                style={{ background: "var(--pkp-teal)" }}
              >
                {svc.icon.desktop}
              </div>
              <p className="text-xs font-bold text-center leading-tight w-full" style={{ color: "var(--pkp-teal)" }}>
                {svc.name}
              </p>
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex-shrink-0 h-4 w-full relative z-10" style={{ background: "var(--pkp-teal)" }} />
    </div>
  )
}
