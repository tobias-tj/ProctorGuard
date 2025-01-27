// import { useEffect, useState } from "react";
// import { ReportInfo } from "@/types/ReportInfo";
// import { fetchReportDataByIdRelation } from "@/api/report/getReportData";

// export const useReportListData = (idrelacion: string) => {
//   const [reportListData, setReportListData] = useState<ReportInfo[] | null>(
//     null
//   );
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchReportDataByIdRelation(idrelacion);
//         setReportListData(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Unexpected error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [idrelacion]);

//   return { reportListData, loading, error };
// };
