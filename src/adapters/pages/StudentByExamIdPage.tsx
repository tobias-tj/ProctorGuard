import { useParams, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useState } from "react";
import { useListStudentsByExamId } from "@/hooks/useExamInfo";
import formatDateToString from "@/utils/formatDateToString";

const StudentByExamId = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const { studentListDataByExam, loading, error } = useListStudentsByExamId(
    Number(examId)
  );

  // // Filtrar los estudiantes que han rendido el examen con el ID específico
  // const studentsWithExam = studentsData.filter((student) =>
  //   student.exams.some((exam) => exam.id.toString() === examId)
  // );

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

  // Si está cargando, muestra el texto "Cargando..."
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-primary">
          Cargando estudiantes...
        </p>
      </div>
    );
  }

  // Si ocurre un error, muestra el mensaje correspondiente
  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <h1 className="text-red-500">Ocurrió un error: {error}</h1>
  //     </div>
  //   );
  // }

  if (!studentListDataByExam || studentListDataByExam.length === 0) {
    return (
      <div className="flex items-center justify-center p-4">
        <h1>No hay incidentes reportados para este examen.</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
      {/* Botón de retroceso */}
      <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>

      <h1 className="mb-4 text-primary">
        Estudiantes que rindieron el examen con el id: {examId}
      </h1>
      {studentListDataByExam.length > 0 ? (
        <>
          <Table className="bg-white dark:bg-gray-400 rounded-xl">
            <TableHeader>
              <TableRow>
                <TableCell>Seleccionar</TableCell>
                <TableCell>Nombre del Estudiante</TableCell>
                <TableCell>CI</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Puntos</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentListDataByExam.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id.toString())}
                      onChange={() =>
                        handleSelectStudent(student.id.toString())
                      }
                      className="w-4 h-4"
                    />
                  </TableCell>
                  <TableCell>{student.nombre}</TableCell>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{formatDateToString(student.fecha)}</TableCell>
                  <TableCell>{100 - Number(student.puntos)}</TableCell>
                  <TableCell>
                    <Button variant="outline">
                      <Download />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="flex items-center justify-center p-4">
          <h1>No hay incidentes detectados para este examen.</h1>
        </div>
      )}

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
