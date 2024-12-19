import Logo from './Logo'
import ChristmasTree from './ChristmasTree'

export default function TopPanel() {
  return (
    <div className="bg-[#1F1F1F] p-4 sm:p-6 2xl:p-12 3xl:p-16 4xl:p-20 rounded-3xl flex items-center justify-between">
      <Logo className="h-5 w-auto sm:h-3 md:h-4 lg:h-5 xl:h-6 2xl:h-32 3xl:h-40 4xl:h-48" />
      <div className="flex items-center">
        <span className="text-[10px] font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl whitespace-nowrap overflow-hidden text-ellipsis mr-2 2xl:mr-8 3xl:mr-10 4xl:mr-12">
          All Hands Meeting 2024
        </span>
        <ChristmasTree className="h-6 w-auto sm:h-5 md:h-6 lg:h-8 2xl:h-40 3xl:h-48 4xl:h-56" />
      </div>
    </div>
  )
}

