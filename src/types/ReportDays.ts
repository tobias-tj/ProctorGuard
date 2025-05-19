export type ReportDays = {
  lista: ReportDay[];
};

export type ReportDay = {
  dia: string;
  examenesConReportes: number;
  examenesSinReportes: number;
};

export type ReportResponseDay = {
  dia: string;
  examenesConReportes: string;
  examenesSinReportes: string;
};
