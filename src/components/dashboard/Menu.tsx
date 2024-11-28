import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/" },
      { icon: "/student.png", label: "Students", href: "/list/students" },
      { icon: "/exam.png", label: "Exams", href: "/list/exams" },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
      },
      { icon: "/calendar.png", label: "Events", href: "/list/events" },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile" },
      { icon: "/setting.png", label: "Settings", href: "/settings" },
      { icon: "/logout.png", label: "Logout", href: "/logout" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => (
            <NavLink
              to={item.href} // Cambiado a `NavLink` para navegación
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              <img
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="hidden lg:block">{item.label}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
