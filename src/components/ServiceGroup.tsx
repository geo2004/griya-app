"use client"
import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Landmark, Megaphone, Building2, Lock, LucideIcon } from "lucide-react"
import { ServiceGroup as ServiceGroupType } from "@/lib/services"
import ServiceCard from "./ServiceCard"

const groupIconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  megaphone: Megaphone,
  "building-2": Building2,
  lock: Lock,
}

interface Props {
  group: ServiceGroupType
  onSubPage?: (id: string) => void
}

export default function ServiceGroup({ group, onSubPage }: Props) {
  const isInternal = group.services.some((s) => s.internal)
  const GroupIcon = groupIconMap[group.groupIcon] ?? Landmark
  const headingColor = isInternal ? "var(--pkp-gold)" : "rgba(255,255,255,0.55)"

  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 2)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    checkScroll()
    el?.addEventListener("scroll", checkScroll, { passive: true })
    const ro = new ResizeObserver(checkScroll)
    if (el) ro.observe(el)
    return () => {
      el?.removeEventListener("scroll", checkScroll)
      ro.disconnect()
    }
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 180 : -180, behavior: "smooth" })
  }

  return (
    <section
      className="flex-1 min-h-0 rounded-2xl px-5 py-3 flex flex-col"
      style={{
        background: isInternal ? "rgba(213,197,138,0.07)" : "rgba(255,255,255,0.06)",
        border: isInternal ? "1px solid rgba(213,197,138,0.25)" : "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Group heading */}
      <div className="flex items-center gap-2 mb-2 flex-shrink-0">
        <GroupIcon size={13} strokeWidth={1.8} style={{ color: headingColor }} />
        <h2 className="text-xs font-semibold tracking-widest uppercase" style={{ color: headingColor }}>
          {group.group}
        </h2>
        {isInternal && (
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              background: "rgba(213,197,138,0.15)",
              color: "var(--pkp-gold)",
              border: "1px solid rgba(213,197,138,0.3)",
            }}
          >
            Khusus Pegawai
          </span>
        )}
      </div>

      {/* Carousel */}
      <div className="flex-1 min-h-0 flex items-center gap-1">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            opacity: showLeft ? 1 : 0,
            pointerEvents: showLeft ? "auto" : "none",
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)",
          }}
          aria-hidden={!showLeft}
        >
          <ChevronLeft size={14} strokeWidth={2} />
        </button>

        {/* Scrollable cards */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-start gap-8 overflow-x-scroll py-1"
            style={{ scrollbarWidth: "none" }}
            onScroll={checkScroll}
          >
            {/* Centering wrapper when no scroll needed */}
            <div className="flex items-start gap-8 mx-auto">
              {group.services.map((service) => (
                <ServiceCard key={service.name} service={service} onSubPage={onSubPage} />
              ))}
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            opacity: showRight ? 1 : 0,
            pointerEvents: showRight ? "auto" : "none",
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)",
          }}
          aria-hidden={!showRight}
        >
          <ChevronRight size={14} strokeWidth={2} />
        </button>
      </div>
    </section>
  )
}
