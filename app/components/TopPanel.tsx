import Logo from './Logo'
import ChristmasTree from './ChristmasTree'

export default function TopPanel() {
  return (
    <div className="bg-[#1F1F1F] p-6 rounded-3xl flex items-center justify-between">
      <Logo className="h-5 w-auto sm:h-3 md:h-4 lg:h-5 xl:h-6" />
      <div className="flex items-center">
        <span className="text-base font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg whitespace-nowrap overflow-hidden text-ellipsis mr-2">
          All Hands Meeting 2024
        </span>
        <ChristmasTree className="h-6 w-auto sm:h-5 md:h-6 lg:h-8" />
      </div>
    </div>
  )
}

