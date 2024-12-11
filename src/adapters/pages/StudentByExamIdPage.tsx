import { useParams, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { studentsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useState } from "react";

const StudentByExamId = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  // Filtrar los estudiantes que han rendido el examen con el ID específico
  const studentsWithExam = studentsData.filter((student) =>
    student.exams.some((exam) => exam.id.toString() === examId)
  );

  if (studentsWithExam.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>No hay estudiantes que hayan rendido este examen.</h1>
      </div>
    );
  }

  const handleSelectStudent = (studentId: string) => {
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(studentId)) {
        return prevSelected.filter((id) => id !== studentId);
      } else if (prevSelected.length < 10) {
        return [...prevSelected, studentId];
      } else {
        alert("Solo se pueden seleccionar hasta 10 estudiantes.");
        return prevSelected;
      }
    });
  };

  const handleDownloadReport = () => {
    // Lógica para descargar el informe de los estudiantes seleccionados
    alert(
      `Descargando informe de los estudiantes con ID: ${selectedStudents.join(
        ", "
      )}`
    );
  };

  return (
    <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
      {/* Botón de retroceso */}
      <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>

      <h1 className="mb-4 text-primary">
        Estudiantes que rindieron el examen con el id: {examId}
      </h1>

      <Table className="bg-white dark:bg-gray-400 rounded-xl">
        <TableHeader>
          <TableRow>
            <TableCell>Seleccionar</TableCell>
            <TableCell>Nombre del Estudiante</TableCell>
            <TableCell>CI</TableCell>
            <TableCell>Nombre del Examen</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Puntos</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {studentsWithExam.map((student) =>
            student.exams
              .filter((exam) => exam.id.toString() === examId)
              .map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.studentId)}
                      onChange={() => handleSelectStudent(student.studentId)}
                      className="w-4 h-4"
                    />
                  </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.studentId}</TableCell>
                  <TableCell>{exam.name}</TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell>{exam.puntos}</TableCell>
                  <TableCell>
                    <Button variant="outline">
                      <Download />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>

      {selectedStudents.length > 0 && selectedStudents.length <= 10 && (
        <div className="mt-4">
          <Button onClick={handleDownloadReport} className="text-white ">
            Descargar Informe
          </Button>
        </div>
      )}
    </div>
  );
};

export default StudentByExamId;
