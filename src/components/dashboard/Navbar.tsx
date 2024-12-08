import { Megaphone, Moon, Search, Sun, UserCircle2 } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "@/theme-provider";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="relative items-center hidden gap-2 md:flex">
        <Search
          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
          width={14}
          height={14}
        />
        <Input
          type="text"
          placeholder="Search..."
          className="w-[200px] pl-9 pr-3 py-2 text-xs rounded-full bg-transparent border-[1.5px] border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-400"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center justify-end w-full gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white rounded-full w-7 h-7 dark:bg-gray-800"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="relative bg-white rounded-full w-7 h-7 dark:bg-gray-800"
        >
          <Megaphone className="w-5 h-5" />
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-purple-500 rounded-full -top-3 -right-3">
            1
          </div>
        </Button>
        <div className="flex flex-col items-end">
          <span className="text-xs font-medium leading-3">Tobias Jara</span>
          <span className="text-[10px] text-gray-500">Admin</span>
        </div>
        <Avatar>
          <AvatarImage src="/path-to-your-image.jpg" alt="Tobias Jara" />
          <AvatarFallback>
            <UserCircle2 className="w-9 h-9" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
