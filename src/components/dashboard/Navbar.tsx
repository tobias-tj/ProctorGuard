import {
  Megaphone,
  MessageCircleMore,
  Search,
  UserCircle2,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Search width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center justify-end w-full gap-6">
        <div className="flex items-center justify-center bg-white rounded-full cursor-pointer w-7 h-7">
          <MessageCircleMore width={20} height={20} />
        </div>
        <div className="relative flex items-center justify-center bg-white rounded-full cursor-pointer w-7 h-7">
          <Megaphone width={20} height={20} />
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-purple-500 rounded-full -top-3 -right-3">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Tobias Jara</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <UserCircle2 width={36} height={36} />
      </div>
    </div>
  );
};

export default Navbar;
