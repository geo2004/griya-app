export default function Header() {
  return (
    <header className="flex-shrink-0 flex items-center justify-between px-6 py-2">
      <div className="flex items-center gap-2.5">
        <img
          src="https://pkp.go.id/s3/website-perumahan/prod-storage/perumahan/logo_atas/01hc9gwh0kry136fvcpws0w1a2/01knjyf8hb7svzbn44p1a3sh3y.webp"
          alt="Logo PKP"
          height={36}
          className="h-9 w-auto object-contain"
        />
        <div>
          <p className="text-white text-xs font-bold tracking-widest uppercase leading-none opacity-70">
            BP3KP Jawa III
          </p>
          <p className="leading-none mt-0.5" style={{ color: "var(--pkp-gold)", fontSize: "10px" }}>
            Kementerian PKP
          </p>
        </div>
      </div>
      <a href="#" className="text-white text-xs font-medium hover:opacity-70 transition-opacity">
        Login
      </a>
    </header>
  )
}
