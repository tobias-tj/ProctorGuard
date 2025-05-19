import { fetchReportDaysData } from "@/api/report/getReportDays";
import { ReportDays, ReportDay, ReportResponseDay } from "@/types/ReportDays";
import { useEffect, useState } from "react";

export const useReportDays = () => {
  const [reportDays, setReportDays] = useState<ReportDays>();
  const [loadingDays, setLoadingDays] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingDays(true);
        const authToken = localStorage.getItem("authToken") || "NULL-TOKEN";
        const response = await fetchReportDaysData(authToken);

        const parsedData: ReportDays = {
          lista: response.data.lista.map(
            (item: ReportResponseDay): ReportDay => ({
              dia: item.dia,
              examenesConReportes: parseInt(item.examenesConReportes, 10),
              examenesSinReportes: parseInt(item.examenesSinReportes, 10),
            })
          ),
        };

        // const diasOrden = ["Lun", "Mar", "Mier", "Jue", "Vie", "Sab", "Dom"];

        // parsedData.lista.sort(
        //   (a, b) => diasOrden.indexOf(a.dia) - diasOrden.indexOf(b.dia)
        // );

        setReportDays(parsedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoadingDays(false);
      }
    };

    fetchData();
  }, []);

  return { reportDays, loadingDays, error };
};
