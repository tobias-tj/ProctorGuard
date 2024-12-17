import {
  fetchDashboardExamCleanCount,
  fetchDashboardExamIncidentCount,
  fetchDashboardExamTotalCount,
} from "@/api/admin/dashboardAdmin";
import { useEffect, useState } from "react";

export const useExamTotalCount = () => {
  const [examTotalCount, setExamTotalCount] = useState<number | null>(null);
  const [loadingExam, setLoadingExam] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingExam(true);
        const data = await fetchDashboardExamTotalCount();
        setExamTotalCount(Number(data.count));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoadingExam(false);
      }
    };

    fetchData();
  }, []);

  return { examTotalCount, loadingExam, error };
};

export const useExamCleanCount = () => {
  const [examCleanCount, setExamCleanCount] = useState<number | null>(null);
  const [loadingExam, setLoadingExam] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingExam(true);
        const data = await fetchDashboardExamCleanCount();
        setExamCleanCount(Number(data.count));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoadingExam(false);
      }
    };

    fetchData();
  }, []);

  return { examCleanCount, loadingExam, error };
};

export const useExamIncidentCount = () => {
  const [examIncidentCount, setExamIncidentCount] = useState<number | null>(
    null
  );
  const [loadingExam, setLoadingExam] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingExam(true);
        const data = await fetchDashboardExamIncidentCount();
        setExamIncidentCount(Number(data.count));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoadingExam(false);
      }
    };

    fetchData();
  }, []);

  return { examIncidentCount, loadingExam, error };
};