interface TimelineItemProps {
  year: string
  title: string
  subtitle: string
  description: string
  isLast?: boolean
}

export default function TimelineItem({ year, title, subtitle, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12">
      <div className="flex flex-col sm:flex-row items-start mb-1 group">
        <div className="flex items-center">
          <div className="absolute left-0 sm:left-0 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-primary dark:bg-primary-dark"></div>
            </div>
            {!isLast && <div className="absolute h-full w-0.5 bg-primary/20 dark:bg-primary-dark/20 top-10"></div>}
          </div>
          <div className="text-xl font-bold text-primary dark:text-primary-dark ml-4 sm:ml-0 sm:mr-4">{year}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="ml-4 sm:ml-0 text-base text-gray-600 dark:text-gray-300">{description}</div>
    </div>
  )
}

