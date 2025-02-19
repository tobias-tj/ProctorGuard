import { fetchDashboardExamTotalCount } from "@/api/admin/dashboardAdmin";
import { fetchExamListData } from "@/api/tableExam/getListExams";
import { fetchListStudentByExamId } from "@/api/tableExam/getListStudentByExamId";
import { Exam } from "@/types/Exam";
import { ExamTable } from "@/types/ExamTable";
import { StudentByExamId } from "@/types/StudentByExamId";
import { useEffect, useState } from "react";

export const useExamTotalCount = () => {
  const [examTotalData, setExamTotalData] = useState<{
    total_examenes: number;
    total_examenes_con_incidencias: number;
    total_examenes_sin_incidencias: number;
  } | null>(null);
  const [loadingExam, setLoadingExam] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingExam(true);
        const data = await fetchDashboardExamTotalCount();
        //VERIFICAR POrque me traeun dato negativo.
        const temp = {
          total_examenes: Number(data.total_examenes),
          total_examenes_con_incidencias:
            Number(data.total_examenes_con_incidencias) > 0
              ? Number(data.total_examenes_con_incidencias)
              : 0,
          total_examenes_sin_incidencias:
            Number(data.total_examenes_sin_incidencias) > 0
              ? Number(data.total_examenes_sin_incidencias)
              : 0,
        };
        setExamTotalData(temp);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoadingExam(false);
      }
    };

    fetchData();
  }, []);

  return { examTotalData, loadingExam, error };
};

// export const useExamCleanCount = () => {
//   const [examCleanCount, setExamCleanCount] = useState<number | null>(null);
//   const [loadingExam, setLoadingExam] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoadingExam(true);
//         const data = await fetchDashboardExamCleanCount();
//         setExamCleanCount(Number(data.count));
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Unexpected error");
//       } finally {
//         setLoadingExam(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { examCleanCount, loadingExam, error };
// };

// export const useExamIncidentCount = () => {
//   const [examIncidentCount, setExamIncidentCount] = useState<number | null>(
//     null
//   );
//   const [loadingExam, setLoadingExam] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoadingExam(true);
//         const data = await fetchDashboardExamIncidentCount();
//         setExamIncidentCount(Number(data.count));
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Unexpected error");
//       } finally {
//         setLoadingExam(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { examIncidentCount, loadingExam, error };
// };

export const useExamListData = () => {
  const [examListData, setExamListData] = useState<ExamTable[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchExamListData();
        setExamListData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { examListData, loading, error };
};

export const useListStudentsByExamId = (examId: number) => {
  const [studentListDataByExam, setStudentListDataByExam] = useState<
    StudentByExamId[] | null
  >(null);
  const [transformedExamList, setTransformedExamList] = useState<Exam[] | null>(
    null
  ); // Nueva lista transformada

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchListStudentByExamId(examId);

        setStudentListDataByExam(data);

        // Transform data into Exam[]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const exams = data.map((item: any) => ({
          examenId: item.examenid,
          descripcion: item.descripcion,
          fecha: item.fecha,
          puntos: item.puntos,
        }));
        setTransformedExamList(exams);
        console.log("Examnes info-->", exams);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [examId]);

  return { studentListDataByExam, transformedExamList, loading, error };
};
