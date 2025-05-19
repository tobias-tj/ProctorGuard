export type ReportMonths = {
  lista: ReportMonth[];
};

export type ReportMonth = {
  mes: string;
  examenesConReportes: number;
  examenesSinReportes: number;
};

export type ReportResponseMonth = {
  mes: string;
  examenesConReportes: string;
  examenesSinReportes: string;
};
