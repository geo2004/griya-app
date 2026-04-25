export interface Service {
  name: string
  description: string
  icon: string
  svgIcon?: string   // filename in /public, takes priority over lucide icon
  link: string
  internal?: boolean
  subPage?: string   // triggers in-page sub-page instead of navigating
}

export const layananDataServices: Service[] = [
  {
    name: "SIBARU",
    description: "Sistem Informasi Bantuan Perumahan",
    icon: "building-2",
    link: "https://sibaru.pkp.go.id/",
  },
  {
    name: "SIRENG",
    description: "Sistem Informasi Registrasi Pengembang",
    icon: "user-check",
    link: "https://sireng.pkp.go.id/",
  },
  {
    name: "SIKUMBANG",
    description: "Sistem Informasi Rumah Subsidi dan Pengembang",
    icon: "home",
    link: "https://sikumbang.tapera.go.id/",
  },
  {
    name: "E-PPID PKP",
    description: "Permohonan Informasi Publik Kementerian PKP",
    icon: "file-text",
    link: "https://e-ppid.pkp.go.id/",
  },
]

export interface ServiceGroup {
  group: string
  groupIcon: string
  services: Service[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    group: "Layanan Umum",
    groupIcon: "landmark",
    services: [
      {
        name: "Layanan Data & Informasi",
        description: "Akses data dan informasi terkait perumahan dan kawasan permukiman",
        icon: "database",
        link: "#",
        subPage: "layanan-data",
      },
      {
        name: "Konsultasi Perumahan",
        description: "Konsultasi teknis perumahan dan permukiman bagi masyarakat",
        icon: "house",
        link: "#",
      },
    ],
  },
  {
    group: "Pengaduan",
    groupIcon: "megaphone",
    services: [
      {
        name: "Awasi PKP",
        description: "Pengawasan program perumahan dan kawasan permukiman",
        icon: "eye",
        svgIcon: "awasi-pkp.svg",
        link: "https://awasi.pkp.go.id/",
      },
      {
        name: "Benar PKP",
        description: "Pelaporan dan verifikasi informasi seputar PKP",
        icon: "shield-check",
        svgIcon: "benar-pkp.svg",
        link: "https://wa.me/6281288888911",
      },
      {
        name: "SP4N LAPOR!",
        description: "Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional",
        icon: "clipboard-list",
        svgIcon: "sp4n lapor.svg",
        link: "https://www.lapor.go.id/",
      },
      {
        name: "Pengaduan BP3KP Jawa III",
        description: "Sampaikan pengaduan langsung kepada BP3KP Jawa III",
        icon: "message-square",
        link: "https://wa.me/6281288888911",
      },
    ],
  },
  {
    group: "Profil BP3KP Jawa III",
    groupIcon: "building-2",
    services: [
      {
        name: "Website BP3KP Jawa III",
        description: "Situs resmi Balai Perumahan, Permukiman dan Penataan Kawasan Permukiman Jawa III",
        icon: "globe",
        link: "https://pkp.go.id/balai/p2p-jawa-iii",
      },
      {
        name: "Klinik PKP Jawa III",
        description: "Pusat konsultasi dan asistensi teknis PKP wilayah Jawa III",
        icon: "stethoscope",
        link: "https://krsjawa3.com",
      },
      {
        name: "Instagram BP3KP Jawa III",
        description: "Ikuti kami di Instagram untuk informasi dan berita terkini",
        icon: "camera",
        link: "https://www.instagram.com/bp3kp_jawa3",
      },
    ],
  },
  {
    group: "Layanan Internal BP3KP Jawa III",
    groupIcon: "lock",
    services: [
      {
        name: "Layanan Kepegawaian",
        description: "Sistem informasi kepegawaian internal BP3KP Jawa III",
        icon: "user-cog",
        link: "#",
        internal: true,
      },
      {
        name: "Inventarisasi BMN",
        description: "Sistem inventarisasi Barang Milik Negara BP3KP Jawa III",
        icon: "package",
        link: "https://bmn-app.vercel.app/",
        internal: true,
      },
      {
        name: "Go PKP",
        description: "Portal layanan terpadu Kementerian PKP",
        icon: "navigation",
        link: "https://go.pkp.go.id/",
        internal: true,
      },
      {
        name: "Eoffice PKP",
        description: "Sistem surat elektronik Kementerian PKP",
        icon: "mail",
        link: "https://eoffice.pkp.go.id",
        internal: true,
      },
      {
        name: "MyPKP",
        description: "Portal layanan kepegawaian personal PKP",
        icon: "circle-user",
        link: "https://my.pkp.go.id",
        internal: true,
      },
    ],
  },
]
