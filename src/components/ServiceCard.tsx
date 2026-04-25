import {
  Database, House, Eye, ShieldCheck, ClipboardList, MessageSquare,
  Globe, Stethoscope, Camera, UserCog, Package,
  Landmark, Megaphone, Building2, Lock,
  UserCheck, FileText, Home, Navigation, Mail, CircleUser,
  LucideIcon,
} from "lucide-react"
import { Service } from "@/lib/services"

const iconMap: Record<string, LucideIcon> = {
  database: Database,
  house: House,
  home: Home,
  eye: Eye,
  "shield-check": ShieldCheck,
  "clipboard-list": ClipboardList,
  "message-square": MessageSquare,
  globe: Globe,
  stethoscope: Stethoscope,
  camera: Camera,
  "user-cog": UserCog,
  "user-check": UserCheck,
  "file-text": FileText,
  package: Package,
  navigation: Navigation,
  mail: Mail,
  "circle-user": CircleUser,
  landmark: Landmark,
  megaphone: Megaphone,
  "building-2": Building2,
  lock: Lock,
}

interface Props {
  service: Service
  onSubPage?: (id: string) => void
  showDescription?: boolean
}

export default function ServiceCard({ service, onSubPage, showDescription }: Props) {
  const Icon = iconMap[service.icon] ?? Globe
  const iconColor = service.internal ? "var(--pkp-gold)" : "rgba(255,255,255,0.85)"
  const bgColor = service.internal ? "rgba(213,197,138,0.1)" : "rgba(255,255,255,0.07)"
  const borderColor = service.internal ? "rgba(213,197,138,0.2)" : "rgba(255,255,255,0.1)"

  const inner = (
    <>
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:brightness-125"
        style={{ background: bgColor, border: `1px solid ${borderColor}` }}
      >
        {service.svgIcon ? (
          <img
            src={`/${service.svgIcon}`}
            alt={service.name}
            width={30}
            height={30}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ) : (
          <Icon size={24} strokeWidth={1.5} style={{ color: iconColor }} />
        )}
      </div>
      <p
        className="text-xs font-semibold leading-snug max-w-[90px] mx-auto"
        style={{ color: "rgba(255,255,255,0.85)" }}
      >
        {service.name}
      </p>
      {showDescription && service.description && (
        <p
          className="text-xs leading-snug max-w-[100px] mx-auto -mt-1"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {service.description}
        </p>
      )}
    </>
  )

  const baseClass = "group flex flex-col items-center text-center gap-2 cursor-pointer flex-shrink-0"

  if (service.subPage && onSubPage) {
    return (
      <button className={baseClass} onClick={() => onSubPage(service.subPage!)}>
        {inner}
      </button>
    )
  }

  return (
    <a href={service.link} target="_blank" rel="noopener noreferrer" className={baseClass}>
      {inner}
    </a>
  )
}
