import Logo from './Logo'
import ChristmasTree from './ChristmasTree'

export default function TopPanel() {
  return (
    <div className="bg-[#1F1F1F] p-4 sm:p-6 2xl:p-8 3xl:p-10 4xl:p-12 rounded-3xl flex items-center justify-between">
      <Logo className="h-5 w-auto sm:h-3 md:h-4 lg:h-5 xl:h-6 2xl:h-8 3xl:h-10 4xl:h-12" />
      <div className="flex items-center">
        <span className="text-[10px] font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl whitespace-nowrap overflow-hidden text-ellipsis mr-2 2xl:mr-4 3xl:mr-6 4xl:mr-8">
          All Hands Meeting 2024
        </span>
        <ChristmasTree className="h-6 w-auto sm:h-5 md:h-6 lg:h-8 2xl:h-10 3xl:h-12 4xl:h-16" />
      </div>
    </div>
  )
}

