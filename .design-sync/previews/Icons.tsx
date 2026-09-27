import { Icons } from "sosek-system"

const groups = {
  "Actions": [
    "Search",
    "Plus",
    "Minus",
    "X",
    "Check",
    "Pencil",
    "Trash2",
    "Copy",
    "Download",
    "Upload",
    "Share2",
    "Save",
    "RefreshCw",
    "Filter",
    "SlidersHorizontal",
    "ExternalLink",
    "Link",
    "LogIn",
    "LogOut",
    "Send",
    "Paperclip"
  ],
  "Navigation": [
    "ChevronDown",
    "ChevronUp",
    "ChevronLeft",
    "ChevronRight",
    "ChevronsUpDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "ArrowUpRight",
    "Menu",
    "Ellipsis",
    "EllipsisVertical",
    "House",
    "LayoutDashboard",
    "LayoutGrid",
    "List",
    "PanelLeft"
  ],
  "Status": [
    "Info",
    "CircleAlert",
    "TriangleAlert",
    "CircleCheck",
    "CircleX",
    "CircleHelp",
    "LoaderCircle",
    "Bell",
    "Lock",
    "LockOpen",
    "Eye",
    "EyeOff",
    "Star",
    "Heart",
    "ThumbsUp",
    "Flag"
  ],
  "Objects": [
    "User",
    "Users",
    "UserPlus",
    "Settings",
    "Mail",
    "Phone",
    "Calendar",
    "Clock",
    "File",
    "FileText",
    "Folder",
    "Image",
    "Camera",
    "MapPin",
    "Globe",
    "CreditCard",
    "ShoppingCart",
    "Tag",
    "ChartColumn",
    "ChartLine",
    "TrendingUp",
    "TrendingDown",
    "DollarSign",
    "Package",
    "Inbox",
    "MessageSquare",
    "Bookmark",
    "Sparkles",
    "Zap",
    "Sun",
    "Moon",
    "Code",
    "Database",
    "Cloud",
    "Shield",
    "Key",
    "Building2",
    "Briefcase",
    "Gift",
    "Mic",
    "Play",
    "Pause",
    "Archive",
    "Printer",
    "Smile",
    "Bot",
    "Wand"
  ]
} as const

const Grid = ({ names }: { names: readonly string[] }) => (
  <div className="grid grid-cols-6 gap-2">
    {names.map((n) => {
      const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[n]
      return (
        <div key={n} className="flex flex-col items-center gap-1 rounded-md border p-2">
          <Icon className="size-5" />
          <span className="text-xs text-muted-foreground">{n}</span>
        </div>
      )
    })}
  </div>
)

export const Actions = () => <Grid names={groups.Actions} />

export const Navigation = () => <Grid names={groups.Navigation} />

export const Status = () => <Grid names={groups.Status} />

export const Objects = () => <Grid names={groups.Objects} />
