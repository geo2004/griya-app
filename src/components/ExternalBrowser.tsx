"use client"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface Props {
  url: string
  onClose: () => void
}

export default function ExternalBrowser({ url, onClose }: Props) {
  return (
    <div className="fixed inset-0 flex flex-col" style={{ zIndex: 9999 }}>

      {/* ── Return bar ── */}
      <div
        className="flex-shrink-0 flex items-center gap-3 px-4 py-2"
        style={{ background: "var(--pkp-teal)" }}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-bold text-sm px-5 py-2 rounded-full flex-shrink-0 transition-opacity hover:opacity-80"
          style={{ background: "var(--pkp-gold)", color: "var(--pkp-teal)" }}
        >
          <ArrowLeft size={14} strokeWidth={2.5} />
          Kembali ke GRIYA
        </button>

        {/* Current URL — truncated */}
        <span className="text-white/50 text-xs truncate flex-1 min-w-0">{url}</span>

        {/* Fallback: open in new tab if iframe is blank */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/60 text-xs hover:text-white flex-shrink-0 transition-colors"
          title="Buka di tab baru"
        >
          <ExternalLink size={13} />
          <span className="hidden sm:inline">Tab baru</span>
        </a>
      </div>

      {/* ── Iframe ── */}
      <iframe
        src={url}
        title="External site"
        className="flex-1 w-full border-none bg-white"
      />
    </div>
  )
}
