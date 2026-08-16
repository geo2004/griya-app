import type { LucideIcon } from "lucide-react"
import { UserCog, Package, Navigation, Mail, CircleUser, BarChart2, Scale } from "lucide-react"

/* ────────────────────────────────────────────────────────────────────────
 * Single source of truth for every service rendered across the portal.
 * Each page component imports its slice from here — do not re-declare these
 * arrays inside the components.
 * ──────────────────────────────────────────────────────────────────────── */

/* ── Layanan Umum ─────────────────────────────────────────────────────── */

export type LayananUmumSubPage = null | "data-informasi" | "counter-balai" | "counter-mpp"
export type CounterSubPage = Extract<LayananUmumSubPage, "counter-balai" | "counter-mpp">

export interface OnlineService {
  logo: string
  name: string
  link: string | null          // external link; null when it opens a sub-page
  subPage: LayananUmumSubPage   // in-page sub-page to open instead of navigating
  goldCircle: boolean           // gold avatar circle instead of teal
}

export const onlineServices: OnlineService[] = [
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
    subPage: "data-informasi",
    goldCircle: false,
  },
  {
    logo: "/design/logo_pkp.png",
    name: "Konsultasi Perumahan",
    link: "https://wa.me/6282137191145",
    subPage: null,
    goldCircle: false,
  },
  {
    logo: "/design/logo_pkp.png",
    name: "Peminjaman Pendopo BP3KP Jawa III",
    link: "https://pendopobp3kpjawaiii.netlify.app/",
    subPage: null,
    goldCircle: false,
  },
]

/**
 * Physical service counters (Layanan Offline). Each entry powers both the
 * card in the Layanan Offline column AND its own dedicated in-page sub-page.
 * NOTE: heroImg photos, operating hours, and some addresses are PLACEHOLDERS —
 * confirm/replace before this goes to the public.
 */
export interface OfflineCounter {
  subPage: CounterSubPage
  cardImg: string      // thumbnail shown on the Layanan Offline card
  heroImg: string      // large photo on the dedicated page (TODO: real photo)
  name: string         // card label + page title
  location: string     // venue name
  address: string      // full address line
  hours: string[]      // operating hours (TODO: confirm)
  services: string[]   // services available at this counter
  actionLabel: string  // CTA button label
  actionLink: string   // CTA button href (maps / website)
}

export const offlineCounters: OfflineCounter[] = [
  {
    subPage: "counter-balai",
    cardImg: "/design/image30.png",
    heroImg: "/design/image3.png", // TODO(placeholder): real photo of the Balai counter
    name: "Counter Layanan Balai",
    location: "Kantor BP3KP Jawa III — Ungaran",
    address: "Jalan PTPN Ngobo XVIII, Ungaran, Kabupaten Semarang, Jawa Tengah",
    hours: [
      "Senin – Kamis: 08.00 – 15.00 WIB",
      "Jumat: 08.00 – 15.30 WIB",
    ],
    services: [
      "Konsultasi teknis perumahan & kawasan permukiman",
      "Informasi program BSPS, Rumah Susun, dan Rumah Khusus",
      "Layanan pengaduan langsung masyarakat",
      "Pendampingan pengusulan bantuan perumahan",
    ],
    actionLabel: "Petunjuk Arah",
    actionLink: "https://www.google.com/maps/search/?api=1&query=-7.181291481441925,110.42609354370057",
  },
  {
    subPage: "counter-mpp",
    cardImg: "/design/image29.png",
    heroImg: "/design/image3.png", // TODO(placeholder): real photo of the MPP counter
    name: "Counter MPP Yogyakarta",
    location: "Mal Pelayanan Publik (MPP) Kota Yogyakarta",
    address: "Mal Pelayanan Publik Kota Yogyakarta, Daerah Istimewa Yogyakarta", // TODO: alamat lengkap
    hours: [
      "Senin – Kamis: 08.00 – 15.00 WIB",
      "Jumat: 08.00 – 14.30 WIB",
    ],
    services: [
      "Konsultasi perumahan bagi masyarakat Yogyakarta",
      "Informasi bantuan & program perumahan",
      "Penerimaan berkas & pengaduan",
    ],
    actionLabel: "Kunjungi Website MPP",
    actionLink: "https://mpp.jogjakota.go.id/",
  },
]

export interface DataApp {
  name: string
  desc: string
  link: string
  logo: string
}

export const dataApps: DataApp[] = [
  { name: "SIBARU",     desc: "Sistem Informasi Pengusulan Bantuan Perumahan",          link: "https://sibaru.pkp.go.id",        logo: "/design/logo_pkp.png" },
  { name: "SIRENG",     desc: "Sistem Informasi dan Registrasi Pengembang Perumahan",   link: "https://sireng.pkp.go.id",        logo: "/design/logo_pkp.png" },
  { name: "SIKUMBANG",  desc: "Sistem Informasi Ketersediaan Rumah Umum dan Pengembang", link: "https://sikumbang.tapera.go.id/", logo: "/design/logo_pkp.png" },
  { name: "E-PPID PKP", desc: "Layanan Informasi Publik Kementerian PKP",               link: "https://e-ppid.pkp.go.id/",       logo: "/design/logo_pkp.png" },
]

/* ── Layanan Pengaduan ────────────────────────────────────────────────── */

export interface PengaduanService {
  img: string
  name: string
  desc: string
  link: string
}

export const pengaduanServices: PengaduanService[] = [
  {
    img: "/design/image32.png",
    name: "Awasi PKP",
    desc: "Asistensi Pengawasan Integritas Kementerian PKP",
    link: "https://wbs.pkp.go.id/",
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

/* ── Layanan Internal (khusus pegawai) ────────────────────────────────── */

export interface InternalService {
  icon: LucideIcon
  name: string
  link: string
}

export const internalServices: InternalService[] = [
  { icon: UserCog,    name: "Layanan Kepegawaian",       link: "https://kepegawaian-bp3kpj3.vercel.app/" },
  { icon: Package,    name: "Inventarisasi BMN",          link: "https://bmn-app.vercel.app/" },
  { icon: Navigation, name: "Go PKP",                     link: "https://go.pkp.go.id/" },
  { icon: Mail,       name: "E-office PKP",               link: "https://eoffice.pkp.go.id" },
  { icon: CircleUser, name: "MyPKP",                      link: "https://my.pkp.go.id" },
  { icon: BarChart2,  name: "Sistem Pelaporan Kinerja",   link: "https://lapkin-app.vercel.app/" },
  { icon: Scale,      name: "JDIH BP3KP Jawa III",        link: "https://jdih-bp3kpjawa3.vercel.app/" },
]
