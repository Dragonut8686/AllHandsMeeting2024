import Logo from "./Logo";

export default function TopPanel() {
  return (
    <div className="bg-[#1F1F1F] p-6 rounded-3xl flex items-center justify-between">
      <span className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
        All Hands Meeting 2024
      </span>
      <Logo className="h-6 w-auto sm:h-5 md:h-6 lg:h-8" />
    </div>
  );
}
