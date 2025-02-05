import Announcements from "../../components/admin/Announcements";
import { AttendanceChart } from "@/components/admin/AttendanceChart";
import { CountChart } from "@/components/admin/CountChart";
import FinanceChart from "../../components/admin/FinanceChart";
import UserCard from "../../components/admin/UserCard";
import { useDashboardData } from "@/hooks/useStudentInfo";
import { useExamTotalCount } from "@/hooks/useExamInfo";

const AdminPage = () => {
  const { dashboardData, loading } = useDashboardData();
  const { examTotalData, loadingExam } = useExamTotalCount();

  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      {" "}
      {/* Flex en columna para apilar los divs */}
      <div className="flex flex-col gap-4 md:flex-row h-full">
        {" "}
        {/* Sección principal */}
        {/* LEFT */}
        <div className="flex flex-col w-full gap-8 lg:w-2/3">
          {/* USER CARDS */}
          <div className="flex flex-wrap justify-between gap-4">
            <UserCard
              type="Estudiantes"
              count={dashboardData?.total_estudiantes || null}
              loading={loading}
            />
            <UserCard
              type="Examenes"
              count={examTotalData?.total_examenes || null}
              loading={loadingExam}
            />
          </div>
          {/* MIDDLE CHARTS */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* COUNT CHART */}
            <div className="w-full lg:w-1/3 h-[478px]">
              <CountChart />
            </div>
            {/* ATTENDANCE CHART */}
            <div className="w-full lg:w-2/3 h-[478px]">
              <AttendanceChart />
            </div>
          </div>
        </div>
        {/* COMPONENTE DE LA DERECHA */}
        <div className="flex w-full lg:w-1/3 h-full gap-8">
          <Announcements />
        </div>
      </div>
      {/* GRAFICO DE ABAJO */}
      <div className="w-full h-[500px]">
        <FinanceChart />
      </div>
    </div>
  );
};

export default AdminPage;
