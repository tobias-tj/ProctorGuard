import { Megaphone, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "@/theme-provider";

interface NavbarProps {
  title?: string; // Hacer que el título sea opcional
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Usuario",
    university: "Universidad",
    profilePicture: "logoUni.png",
  });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData({
        fullName: parsedUser.fullName || "Usuario",
        university: parsedUser.university || "Universidad",
        profilePicture: parsedUser.profilePicture || null,
      });
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4">
      {/* Mostrar título dinámico */}
      {title && <h1 className="text-xl font-bold">{title}</h1>}

      {/* Icons y Usuario */}
      <div className="flex items-center justify-end w-full gap-6">
        {/* Botón para alternar tema */}
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

        {/* Botón de notificaciones */}
        <Button
          variant="ghost"
          size="icon"
          className="relative bg-white rounded-full w-7 h-7 dark:bg-gray-800"
        >
          <Megaphone className="w-5 h-5" />
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-primary -top-3 -right-3">
            1
          </div>
        </Button>

        {/* Información del usuario */}
        <div className="flex flex-col items-end">
          <span className="text-xs font-medium leading-3">
            {userData.fullName}
          </span>
          <span className="text-[10px] text-gray-500">
            {userData.university}
          </span>
        </div>

        {/* Avatar del usuario */}
        <Avatar>
          {userData.profilePicture ? (
            <AvatarImage
              src="logoUni.png"
              alt={userData.fullName}
              className="w-8 h-8"
            />
          ) : (
            <AvatarFallback>
              {userData.fullName
                .split(" ")
                .map((name) => name.charAt(0))
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
