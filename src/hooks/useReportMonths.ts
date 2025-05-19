import { fetchReportMonthsData } from "@/api/report/getReportMonths";
import {
  ReportMonth,
  ReportMonths,
  ReportResponseMonth,
} from "@/types/ReportMonths";
import { useEffect, useState } from "react";

export const useReportMonths = () => {
  const [reportMonths, setReportMonths] = useState<ReportMonths>();
  const [loadingMonths, setLoadingMonths] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingMonths(true);
        const authToken = localStorage.getItem("authToken") || "NULL-TOKEN";
        const response = await fetchReportMonthsData(authToken);
        const parsedData: ReportMonths = {
          lista: response.data.lista.map(
            (item: ReportResponseMonth): ReportMonth => ({
              mes: item.mes,
              examenesConReportes: parseInt(item.examenesConReportes, 10),
              examenesSinReportes: parseInt(item.examenesSinReportes, 10),
            })
          ),
        };

        setReportMonths(parsedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoadingMonths(false);
      }
    };
    fetchData();
  }, []);
  return { reportMonths, loadingMonths, error };
};
