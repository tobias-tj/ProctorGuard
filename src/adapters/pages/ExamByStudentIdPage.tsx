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

const ExamByStudentById = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const student = studentsData.find((s) => s.studentId === studentId);

  const handleSelectExam = (examId: string) => {
    setSelectedExams((prevSelected) => {
      if (prevSelected.includes(examId)) {
        return prevSelected.filter((id) => id !== examId);
      } else if (prevSelected.length < 10) {
        return [...prevSelected, examId];
      } else {
        alert("Solo se pueden seleccionar hasta 10 exámenes.");
        return prevSelected;
      }
    });
  };

  const handleDownloadReport = () => {
    // Lógica para descargar el informe de los exámenes seleccionados
    alert(`Descargando informe de los exámenes: ${selectedExams.join(", ")}`);
  };

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>Estudiante no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
      {/* Botón de retroceso */}
      <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>

      <h1 className="mb-4 text-primary">Exámenes de {student.name}</h1>
      {student.exams && student.exams.length > 0 ? (
        <>
          <Table className="bg-white dark:bg-gray-400 rounded-xl">
            <TableHeader>
              <TableRow>
                <TableCell>Seleccionar</TableCell>
                <TableCell>Nombre del Examen</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Puntos</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {student.exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedExams.includes(exam.id.toString())}
                      onChange={() => handleSelectExam(exam.id.toString())}
                      className="w-4 h-4"
                    />
                  </TableCell>
                  <TableCell>{exam.name}</TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell>{exam.puntos}</TableCell>
                  <TableCell>
                    <Button variant="outline">
                      <Download />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {selectedExams.length > 0 && selectedExams.length <= 10 && (
            <div className="mt-4">
              <Button onClick={handleDownloadReport} className="text-white ">
                Descargar Informe
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center p-4">
          <h1>No hay exámenes disponibles para este estudiante.</h1>
        </div>
      )}
    </div>
  );
};

export default ExamByStudentById;
