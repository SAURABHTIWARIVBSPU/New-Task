import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark transition-transform hover:scale-105",
        className,
      )}
    >
      {name}
    </span>
  )
}

