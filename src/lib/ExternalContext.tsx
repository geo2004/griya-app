"use client"
import { useState, useEffect, ReactNode } from "react"
import ExternalBrowser from "@/components/ExternalBrowser"

/**
 * Listens for 'griya:open' custom DOM events (fired by KioskLink)
 * and renders the in-app iframe overlay.
 *
 * Kiosk mode is detected synchronously in KioskLink at click time —
 * no React state/context needed for the detection.
 */
export function ExternalProvider({ children }: { children: ReactNode }) {
  const [externalUrl, setExternalUrl] = useState<string | null>(null)

  useEffect(() => {
    const handler = ((e: CustomEvent<string>) => {
      setExternalUrl(e.detail)
    }) as EventListener

    window.addEventListener("griya:open", handler)
    return () => window.removeEventListener("griya:open", handler)
  }, [])

  return (
    <>
      {children}
      {externalUrl && (
        <ExternalBrowser url={externalUrl} onClose={() => setExternalUrl(null)} />
      )}
    </>
  )
}
