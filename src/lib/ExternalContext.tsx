"use client"
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react"
import ExternalBrowser from "@/components/ExternalBrowser"

interface ExternalContextValue {
  isFullscreen: boolean
  openExternal: (url: string) => void
}

const ExternalContext = createContext<ExternalContextValue>({
  isFullscreen: false,
  openExternal: () => {},
})

/** URLs that should always open natively (app links, mail clients) */
const isNativeUrl = (url: string) =>
  url.startsWith("https://wa.me") ||
  url.startsWith("mailto:") ||
  url.startsWith("tel:")

/**
 * True when browser is in fullscreen.
 * Uses a generous 95% threshold to handle display scaling differences.
 */
const checkFullscreen = () =>
  !!document.fullscreenElement ||
  window.outerHeight >= screen.height - 10 ||
  window.innerHeight >= screen.height * 0.95

export function ExternalProvider({ children }: { children: ReactNode }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [externalUrl, setExternalUrl] = useState<string | null>(null)

  useEffect(() => {
    // ── Priority 1: explicit URL parameter ──────────────────────────────
    // Configure the kiosk browser to open: http://<host>?kiosk=1
    // This is the most reliable method for dedicated kiosk machines.
    const params = new URLSearchParams(window.location.search)
    if (params.get("kiosk") === "1") {
      setIsFullscreen(true)
      return // no need to track resize/fullscreenchange
    }

    // ── Priority 2: automatic detection (F11 / --kiosk Chrome flag) ─────
    const update = () => setIsFullscreen(checkFullscreen())
    document.addEventListener("fullscreenchange", update)
    window.addEventListener("resize", update)
    update() // check immediately on mount
    return () => {
      document.removeEventListener("fullscreenchange", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const openExternal = useCallback(
    (url: string) => {
      // WhatsApp / mailto always go native — never iframe
      if (isNativeUrl(url)) {
        window.open(url, "_blank", "noopener,noreferrer")
        return
      }
      if (isFullscreen) {
        setExternalUrl(url)
      } else {
        window.open(url, "_blank", "noopener,noreferrer")
      }
    },
    [isFullscreen]
  )

  return (
    <ExternalContext.Provider value={{ isFullscreen, openExternal }}>
      {children}
      {externalUrl && (
        <ExternalBrowser url={externalUrl} onClose={() => setExternalUrl(null)} />
      )}
    </ExternalContext.Provider>
  )
}

export const useExternal = () => useContext(ExternalContext)
