import Announcements from "../../components/admin/Announcements";
import AttendanceChart from "../../components/admin/AttendanceChart";
import CountChart from "../../components/admin/CountChart";
import EventCalendar from "../../components/admin/EventCalendar";
import FinanceChart from "../../components/admin/FinanceChart";
import UserCard from "../../components/admin/UserCard";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Estudiantes" count={0} />
          <UserCard type="Examenes" count={0} />
        </div>
        <div>
          <Button>Hola loco</Button>
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
