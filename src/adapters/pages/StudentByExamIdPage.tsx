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
import LevelIndicator from "@/components/admin/LevelIndicator";
import { fetchReportDataByIdRelation } from "@/api/report/getReportData";
import ReportDocument from "@/documents/ReportDocumentStudent";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { Exam } from "@/types/Exam";

const StudentByExamId = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const { studentListDataByExam, transformedExamList, loading } =
    useListStudentsByExamId(Number(examId));
  const transformedExamListTyped: Exam[] =
    transformedExamList?.map((exam) => ({
      examen_id: exam.examen_id ?? 0, // Evitar valores undefined
      descripcion: exam.descripcion ?? "Sin descripción",
      fecha: exam.fecha ?? "", // Add default value for fecha
      puntos: exam.puntos ?? 0, // Add default value for puntos
    })) || [];

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

  const handleDownloadAllReports = async () => {
    const selectedData = studentListDataByExam?.filter((student) =>
      selectedStudents.includes(student.idrelacion.toString())
    );
    if (!selectedData) {
      alert("No hay datos seleccionados para descargar.");
      return;
    }
    const zip = new JSZip();

    // Generar y descargar cada PDF
    for (const exam of selectedData) {
      const reportListData = await fetchReportDataByIdRelation(
        exam.idrelacion.toString() || "0"
      );

      const blob = await pdf(
        <ReportDocument
          logoUrl="/logoUni.png"
          companyLogoUrl="/logoUni1.png"
          studentName={studentListDataByExam![0].nombre!}
          ci={studentListDataByExam![0].id!.toString()}
          selectedExams={transformedExamListTyped}
          reportInfo={reportListData}
        /> // Generar PDF para un examen
      ).toBlob();

      // Agregar el PDF al archivo ZIP
      zip.file(`reporte-examen-${exam.idrelacion}.pdf`, blob);
    }

    // Generar el archivo ZIP y descargarlo
    zip.generateAsync({ type: "blob" }).then((zipBlob) => {
      saveAs(zipBlob, "reportes-examenes.zip");
    });
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
      <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
        {/* Botón de retroceso */}
        <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
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
                <TableCell>Nivel</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentListDataByExam.map((student) => (
                <TableRow key={student.idrelacion}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(
                        student.idrelacion.toString()
                      )}
                      onChange={() =>
                        handleSelectStudent(student.idrelacion.toString())
                      }
                      className="w-4 h-4"
                    />
                  </TableCell>
                  <TableCell>{student.nombre}</TableCell>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{formatDateToString(student.fecha)}</TableCell>
                  <TableCell>{100 - Number(student.puntos)}</TableCell>
                  <TableCell>
                    {" "}
                    <LevelIndicator points={100 - Number(student.puntos)} />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      onClick={async () => {
                        try {
                          const reportListData =
                            await fetchReportDataByIdRelation(
                              student.idrelacion.toString()
                            );

                          // Generar PDF
                          const blob = await pdf(
                            <ReportDocument
                              logoUrl="/logoUni.png"
                              companyLogoUrl="/logoUni1.png"
                              studentName={student.nombre}
                              ci={student.id.toString()}
                              selectedExams={transformedExamList!}
                              reportInfo={reportListData}
                            />
                          ).toBlob();

                          // Descargar el archivo PDF
                          saveAs(blob, `reporte-examen-${student.id}.pdf`);
                        } catch (error) {
                          console.log("Error al generar el PDF:", error);
                          alert(
                            "Ocurrió un error al generar el PDF. Por favor, inténtalo de nuevo."
                          );
                        }
                      }}
                    >
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
          <Button onClick={handleDownloadAllReports} className="text-white ">
            Descargar Informe
          </Button>
        </div>
      )}
    </div>
  );
};

export default StudentByExamId;
