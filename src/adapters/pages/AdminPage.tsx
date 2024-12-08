import { EventCalendar } from "@/components/admin/EventCalendar";
import Announcements from "../../components/admin/Announcements";
import { AttendanceChart } from "@/components/admin/AttendanceChart";
import { CountChart } from "@/components/admin/CountChart";
import FinanceChart from "../../components/admin/FinanceChart";
import UserCard from "../../components/admin/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row ">
      {/* LEFT */}
      <div className="flex flex-col w-full gap-8 lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="Estudiantes" count={0} />
          <UserCard type="Examenes" count={0} />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[490px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[490px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col w-full gap-8 lg:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
