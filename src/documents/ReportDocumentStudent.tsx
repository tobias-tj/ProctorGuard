/* eslint-disable @typescript-eslint/no-explicit-any */
import { Exam } from "@/types/Exam";
import { ReportInfo } from "@/types/ReportInfo";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 60, // Tamaño del logo
    height: 60,
  },
  logoYvaga: {
    width: 35,
    height: 45,
  },
  reportDate: {
    fontSize: 12,
    textAlign: "right",
    color: "#333",
  },
  headerReporte: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  header: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000",
    backgroundColor: "#f98012",
    minHeight: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  infoContent: {
    fontSize: 12,
  },
  table: {
    display: "flex",
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  tableCell: {
    borderColor: "#000000",
    padding: 5,
    flex: 1,
    minWidth: 100,
    borderStyle: "solid",
    borderWidth: 0.7,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "100%",
  },
  tableHeader: {
    borderColor: "#000000",
    padding: 5,
    flex: 1,
    minWidth: 100,
    borderTopStyle: "solid",
    borderLeftStyle: "solid",
    borderRightStyle: "solid",
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    backgroundColor: "#f98012",
    color: "#fff",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "extrabold",
  },
  footerContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
    flexDirection: "row", // Alineamos el logo y la firma en fila
    alignItems: "center", // Centra los elementos verticalmente
  },
  signatureText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10, // Espacio entre el logo y la firma
  },
  imagesContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10, // Espacio entre las imágenes
  },
  image: {
    width: 150, // Tamaño de la imagen
    height: 100,
    borderWidth: 0.5,
    borderColor: "#000",
  },
});

// Componente PDF
const ReportDocument = ({
  selectedExams,
  logoUrl,
  studentName,
  ci,
  companyLogoUrl,
  reportInfo,
}: {
  selectedExams: Exam[];
  logoUrl: string;
  companyLogoUrl: string;
  studentName: string;
  ci: string;
  reportInfo: ReportInfo[] | null;
}) => {
  // Obtener la fecha actual
  const currentDate = new Date().toLocaleDateString();

  return (
    <Document>
      <Page style={styles.page}>
        {/* Encabezado */}
        <View style={styles.headerContainer}>
          {/* Logo a la izquierda */}
          <Image src={logoUrl} style={styles.logo} />
          {/* Título y fecha a la derecha */}
          <Text style={styles.reportDate}>
            Reporte realizado en fecha: {currentDate}
          </Text>
        </View>

        {/* Título principal */}
        <Text style={styles.headerReporte}>Reporte de Exámenes</Text>

        {/* Sección de información adicional */}
        <View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Nombre del estudiante:</Text>
            <Text style={styles.infoContent}>{studentName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Cédula de Identidad:</Text>
            <Text style={styles.infoContent}>{ci}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Nombre del examen:</Text>
            <Text style={styles.infoContent}>
              {selectedExams[0].descripcion}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>
              Fecha de realización del examen:
            </Text>
            <Text style={styles.infoContent}>
              {reportInfo !== null
                ? new Date(reportInfo[0].fecha_captura).toLocaleDateString()
                : ""}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Total de puntos acumulados:</Text>
            <Text style={styles.infoContent}>
              {100 < Number(selectedExams[0].puntos)
                ? 0
                : 100 - Number(selectedExams[0].puntos)}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.header}>INCIDENCIAS DETECTADAS</Text>
          <View style={styles.table}>
            {/* Cabecera de la tabla */}
            <View style={styles.tableRow}>
              <Text style={[styles.tableHeader, styles.boldText]}>
                Tipo de Incidencia
              </Text>
              <Text style={[styles.tableHeader, styles.boldText]}>
                Fecha Captura
              </Text>
              <Text
                style={[{ ...styles.tableHeader, width: 100 }, styles.boldText]}
              >
                Puntos Restados
              </Text>
            </View>
            {/* Filas de datos */}
            {reportInfo!.map((incidencia: any, index: number) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>
                  {incidencia.dominio_referencia}
                </Text>
                <Text style={styles.tableCell}>
                  {new Date(incidencia.fecha_captura).toLocaleTimeString(
                    "es-ES",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }
                  )}
                </Text>
                <Text style={styles.tableCell}>{incidencia.score}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Mostrar imágenes debajo de la tabla */}
        <View style={styles.imagesContainer}>
          {reportInfo!.map((incidencia: any, index: number) =>
            incidencia.imagenes_base64.map(
              (imagen: string, imgIndex: number) => (
                <Image
                  key={`${index}-${imgIndex}`}
                  src={imagen}
                  style={styles.image}
                />
              )
            )
          )}
        </View>

        {/* Firma */}
        <View style={styles.footerContainer}>
          {/* Logo de la empresa */}
          <Image src={companyLogoUrl} style={styles.logoYvaga} />
          <Text style={styles.signatureText}>Team Yvagacore</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReportDocument;
