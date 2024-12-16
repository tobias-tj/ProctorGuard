import { useEffect, useState } from "react";
import { fetchDashboardData } from "@/api/admin/dashboardAdmin";
import { fetchStudentListData } from "@/api/tableStudent/getListStudents";
import { Student } from "@/types/Student";
import { Exam } from "@/types/Exam";
import { fetchListExamByStudentId } from "@/api/tableStudent/getListExamByStudentId";

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<{
    total_estudiantes: number;
    total_estudiantes_con_incidencias: number;
    total_estudiantes_sin_incidencias: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchDashboardData();
        setDashboardData({
          total_estudiantes: Number(data.total_estudiantes),
          total_estudiantes_con_incidencias: Number(
            data.total_estudiantes_con_incidencias
          ),
          total_estudiantes_sin_incidencias: Number(
            data.total_estudiantes_sin_incidencias
          ),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { dashboardData, loading, error };
};

export const useStudentListData = () => {
  const [studentListData, setStudentListData] = useState<Student[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchStudentListData();
        setStudentListData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { studentListData, loading, error };
};

export const useListExamByStudentId = (studentId: number) => {
  const [examListData, setExamListData] = useState<Exam[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchListExamByStudentId(studentId);
        setExamListData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [studentId]);

  return { examListData, loading, error };
};
