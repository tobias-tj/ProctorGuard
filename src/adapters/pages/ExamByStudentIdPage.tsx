import { useParams, useNavigate, useLocation } from "react-router-dom";
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
import { useListExamByStudentId } from "@/hooks/useStudentInfo";
import formatDateToString from "@/utils/formatDateToString";
import LevelIndicator from "@/components/admin/LevelIndicator";
import { pdf, PDFDownloadLink } from "@react-pdf/renderer";
import ReportDocument from "@/documents/ReportDocumentStudent";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { fetchReportDataByIdRelation } from "@/api/report/getReportData";

const ExamByStudentById = () => {
  const { studentId } = useParams<{
    studentId: string;
  }>();
  const navigate = useNavigate();
  const [selectedExams, setSelectedExams] = useState<string[]>([]);

  const location = useLocation();

  // Obtener el nombre codificado desde los parámetros de consulta
  const queryParams = new URLSearchParams(location.search);
  const encodedName = queryParams.get("name");

  // Decodificar el nombre
  const studentName = encodedName ? decodeURIComponent(encodedName) : "";

  const { examListData, loading, error } = useListExamByStudentId(
    Number(studentId)
  );

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

  const handleDownloadAllReports = async () => {
    const selectedData = examListData!.filter((exam) =>
      selectedExams.includes(exam.examen_id.toString())
    );

    const zip = new JSZip();

    // Generar y descargar cada PDF
    for (const exam of selectedData) {
      const reportListData = await fetchReportDataByIdRelation(
        exam.idrelacion || "0"
      );

      const blob = await pdf(
        <ReportDocument
          logoUrl="/logoUni.png"
          companyLogoUrl="/logoUni1.png"
          studentName={studentName}
          ci={studentId || ""}
          selectedExams={[exam]}
          reportInfo={reportListData}
        /> // Generar PDF para un examen
      ).toBlob();

      // Agregar el PDF al archivo ZIP
      zip.file(`reporte-examen-${exam.examen_id}.pdf`, blob);
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
  if (error) {
    return (
      <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
        {/* Botón de retroceso */}
        <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
        <h1 className="text-red-500">Ocurrió un error: {error}</h1>
      </div>
    );
  }

  // Si no hay datos disponibles
  if (!examListData || examListData.length === 0) {
    return (
      <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
        {/* Botón de retroceso */}
        <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
        <h1>No hay exámenes disponibles para este estudiante.</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
      {/* Botón de retroceso */}
      <Button variant="outline" className="mb-4" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>

      <h1 className="mb-4 text-primary">Exámenes de {studentId}</h1>
      {examListData.length > 0 ? (
        <>
          <Table className="bg-white dark:bg-gray-400 rounded-xl">
            <TableHeader>
              <TableRow>
                <TableCell>Seleccionar</TableCell>
                <TableCell>Nombre del Examen</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Puntos</TableCell>
                <TableCell>Nivel</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examListData.map((exam) => (
                <TableRow key={exam.examen_id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedExams.includes(
                        exam.examen_id.toString()
                      )}
                      onChange={() =>
                        handleSelectExam(exam.examen_id.toString())
                      }
                      className="w-4 h-4"
                    />
                  </TableCell>
                  <TableCell>{exam.descripcion}</TableCell>
                  <TableCell>{formatDateToString(exam.fecha)}</TableCell>
                  <TableCell>{100 - Number(exam.puntos)}</TableCell>
                  <TableCell>
                    <LevelIndicator points={100 - Number(exam.puntos)} />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      onClick={async () => {
                        try {
                          // Obtener los datos del reporte del examen actual
                          const reportListData =
                            await fetchReportDataByIdRelation(
                              exam.idrelacion || "0"
                            );

                          // Generar el PDF dinámicamente
                          const blob = await pdf(
                            <ReportDocument
                              logoUrl="/logoUni.png"
                              companyLogoUrl="/logoUni1.png"
                              studentName={studentName}
                              ci={studentId || ""}
                              selectedExams={[exam]}
                              reportInfo={reportListData}
                            />
                          ).toBlob();

                          // Descargar el archivo PDF
                          saveAs(blob, `reporte-examen-${exam.examen_id}.pdf`);
                        } catch (error) {
                          console.error("Error al generar el PDF:", error);
                          alert(
                            "Ocurrió un error al generar el PDF. Por favor, inténtalo de nuevo."
                          );
                        }
                      }}
                    >
                      <Download /> {/* Botón con ícono de descarga */}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {selectedExams.length > 0 && selectedExams.length <= 10 && (
            <div className="mt-4">
              <Button onClick={handleDownloadAllReports} className="text-white">
                Descargar Todos los Informes
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
