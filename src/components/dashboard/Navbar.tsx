import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "@/theme-provider";
import { useUser } from "@/Context/UserContext";

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const { theme, setTheme } = useTheme();
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-4">
      {title && <h1 className="text-xl font-bold">{title}</h1>}

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

        <div className="flex flex-col items-end">
          <span className="text-xs font-medium leading-3">
            {user?.userName ?? "Usuario"}
          </span>
          <span className="text-[10px] text-gray-500">
            {user?.universityName ?? "Universidad"}
          </span>
        </div>

        {/* Avatar del usuario */}
        <Avatar>
          {user?.profilePicture ? (
            <AvatarImage
              src={user.profilePicture}
              alt={user.userName}
              className="w-8 h-8"
            />
          ) : (
            <AvatarFallback>
              {user?.userName
                ?.split(" ")
                .map((name: string) => name.charAt(0))
                .join("") ?? "U"}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
