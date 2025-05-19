import Announcements from "../../components/admin/Announcements";
import { AttendanceChart } from "@/components/admin/AttendanceChart";
import { CountChart } from "@/components/admin/CountChart";
import FinanceChart from "../../components/admin/FinanceChart";
import UserCard from "../../components/admin/UserCard";
import { useDashboardData } from "@/hooks/useStudentInfo";
import { useExamTotalCount } from "@/hooks/useExamInfo";
import { useReportDays } from "@/hooks/useReportDays";
import { useReportMonths } from "@/hooks/useReportMonths";

const AdminPage = () => {
  const { dashboardData, loading } = useDashboardData();
  const { examTotalData, loadingExam } = useExamTotalCount();
  const { reportDays, loadingDays } = useReportDays();
  const { reportMonths, loadingMonths } = useReportMonths();

  return (
    <div className="flex flex-col h-screen gap-6 p-4 overflow-auto">
      <div className="flex flex-col flex-grow gap-6 md:flex-row">
        <div className="flex flex-col flex-grow gap-6 lg:w-2/3">
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

          <div className="flex flex-col flex-grow gap-6 lg:flex-row">
            <div className="w-full">
              <CountChart
                dashboardData={dashboardData}
                // examTotalData={examTotalData}
              />
            </div>
          </div>
        </div>

        <div className="p-2 rounded-md lg:w-1/3">
          <Announcements />
        </div>
      </div>

      <div className="w-full h-[500px]">
        <AttendanceChart reportDays={reportDays} loading={loadingDays} />
        <div className="w-full h-[500px] mt-5">
          <FinanceChart reportMonths={reportMonths} loading={loadingMonths} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
