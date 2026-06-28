import type { LucideIcon } from "lucide-react"
import { UserCog, Package, Navigation, Mail, CircleUser, BarChart2, Scale } from "lucide-react"

/* ────────────────────────────────────────────────────────────────────────
 * Single source of truth for every service rendered across the portal.
 * Each page component imports its slice from here — do not re-declare these
 * arrays inside the components.
 * ──────────────────────────────────────────────────────────────────────── */

/* ── Layanan Umum ─────────────────────────────────────────────────────── */

export type LayananUmumSubPage = null | "data-informasi"

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

export interface OfflineService {
  img: string
  name: string
  link: string
}

export const offlineServices: OfflineService[] = [
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
