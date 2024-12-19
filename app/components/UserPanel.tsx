import { User } from "lucide-react";
import Logo from "./Logo";

export default function UserPanel() {
  return (
    <div className="bg-[#1F1F1F] p-6 rounded-3xl flex items-center justify-between">
      <div className="flex items-center">
        <User className="w-6 h-6 mr-2" />
        <span>Имя пользователя</span>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-lg font-semibold">
          All Hands Meeting 2024
        </span>
        <Logo className="h-8 w-auto" />
      </div>
    </div>
  );
}
