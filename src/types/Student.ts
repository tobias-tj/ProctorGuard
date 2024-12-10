import { Exam } from "./Exam";

export type Student = {
  studentId: string;
  name: string;
  email?: string;
  phone?: string;
  exams?: Exam[];
};
