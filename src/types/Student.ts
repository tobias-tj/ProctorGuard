import { Exam } from "./Exam";

export type Student = {
  nombre: string;
  ci: number;
  correo: string;
  exams?: Exam[];
};
