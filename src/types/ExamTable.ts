export type ExamTable = {
  id: number;
  descripcion: string;
  fecha: string;
};

export type FetchExamListParams = {
  page?: string;
  limit?: string;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
};
