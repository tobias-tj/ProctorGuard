import { ReactNode } from "react";
import Menu from "../components/dashboard/Menu";
import Navbar from "../components/dashboard/Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <a
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <img src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchooLama</span>
        </a>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
