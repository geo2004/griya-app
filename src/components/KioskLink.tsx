"use client"
/**
 * KioskLink — drop-in replacement for <a target="_blank">.
 *
 * Kiosk mode is detected SYNCHRONOUSLY at click time by checking:
 *   1. ?kiosk=1 URL parameter  (dedicated kiosk machine — most reliable)
 *   2. document.fullscreenElement  (Fullscreen API / programmatic)
 *   3. window.innerHeight >= screen.height * 0.95  (F11 / --kiosk Chrome)
 *
 * When in kiosk mode: fires a 'griya:open' DOM event → ExternalProvider
 * renders the in-app iframe overlay with a "Kembali ke GRIYA" button.
 *
 * When NOT in kiosk mode: behaves exactly like a normal <a target="_blank">.
 *
 * wa.me / mailto / tel links are always opened natively (no iframe).
 */
import { ReactNode, MouseEvent, CSSProperties } from "react"

const NATIVE_PREFIXES = ["https://wa.me", "mailto:", "tel:"]

const isNativeUrl = (url: string) =>
  NATIVE_PREFIXES.some((prefix) => url.startsWith(prefix))

const isKioskMode = () => {
  if (typeof window === "undefined") return false
  // Running inside Electron — navigation is handled natively via BrowserWindow,
  // not the iframe overlay. Let <a target="_blank"> fire normally so Electron's
  // setWindowOpenHandler can intercept it.
  if (navigator.userAgent.toLowerCase().includes("electron")) return false
  // 1. Explicit URL parameter — set browser homepage to /?kiosk=1
  if (window.location.search.includes("kiosk=1")) return true
  // 2. Fullscreen API (programmatic fullscreen)
  if (document.fullscreenElement) return true
  // 3. F11 / Chrome --kiosk heuristic (95% of screen height)
  if (window.innerHeight >= screen.height * 0.95) return true
  return false
}

interface Props {
  href: string
  children: ReactNode
  className?: string
  style?: CSSProperties
  "aria-label"?: string
}

export default function KioskLink({
  href,
  children,
  className,
  style,
  "aria-label": ariaLabel,
}: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isNativeUrl(href)) return // always let browser handle natively

    if (isKioskMode()) {
      e.preventDefault()
      window.dispatchEvent(
        new CustomEvent("griya:open", { detail: href })
      )
    }
    // else: normal <a target="_blank"> behavior — new tab
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
