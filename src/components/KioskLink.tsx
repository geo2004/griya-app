"use client"
/**
 * KioskLink — drop-in replacement for <a target="_blank">.
 *
 * • Normal browser session  → behaves exactly like a regular link (new tab).
 * • Fullscreen / kiosk mode → intercepts click, opens URL inside the in-app
 *   iframe overlay so the user can always return via "Kembali ke GRIYA".
 *
 * wa.me / mailto / tel links are always opened natively regardless of mode.
 */
import { useExternal } from "@/lib/ExternalContext"
import { ReactNode, MouseEvent, CSSProperties } from "react"

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
  const { isFullscreen, openExternal } = useExternal()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isFullscreen) {
      e.preventDefault()
      openExternal(href)
    }
    // Not fullscreen → let normal <a target="_blank"> behavior run
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
