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

/** True when browser is in fullscreen — covers F11 and --kiosk Chrome mode */
const checkFullscreen = () =>
  !!document.fullscreenElement || window.innerHeight >= screen.height - 5

export function ExternalProvider({ children }: { children: ReactNode }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [externalUrl, setExternalUrl] = useState<string | null>(null)

  useEffect(() => {
    const update = () => setIsFullscreen(checkFullscreen())
    document.addEventListener("fullscreenchange", update)
    window.addEventListener("resize", update)
    update() // check on mount
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
