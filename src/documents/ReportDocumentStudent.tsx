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
    width: 55,
    height: 55,
  },
  reportDate: {
    fontSize: 12,
    textAlign: "right",
    color: "#333",
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
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
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bdbdbd",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    padding: 5,
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
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
        <Text style={styles.header}>Reporte de Exámenes</Text>

        {/* Sección de información adicional */}
        <View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Estudiante:</Text>
            <Text style={styles.infoContent}>{studentName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Cédula de Identidad:</Text>
            <Text style={styles.infoContent}>{ci}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Examen:</Text>
            <Text style={styles.infoContent}>
              {selectedExams[0].descripcion}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Puntos:</Text>
            <Text style={styles.infoContent}>
              {100 - Number(selectedExams[0].puntos)}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Id relacion:</Text>
            <Text style={styles.infoContent}>
              {selectedExams[0].idrelacion}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.header}>Incidencias</Text>
          <View style={styles.table}>
            {/* Cabecera de la tabla */}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.boldText]}>
                Tipo de Incidencia
              </Text>
              <Text style={[styles.tableCell, styles.boldText]}>
                Fecha Captura
              </Text>
              <Text style={[styles.tableCell, styles.boldText]}>
                Puntos Restados
              </Text>
              <Text style={[styles.tableCell, styles.boldText]}>Imagen</Text>
            </View>
            {/* Filas de datos */}
            {reportInfo!.map((incidencia: any, index: number) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>
                  {incidencia.tipo_incidencia}
                </Text>
                <Text style={styles.tableCell}>
                  {new Date(incidencia.fecha_captura).toLocaleDateString()}
                </Text>
                <Text style={styles.tableCell}>{incidencia.score}</Text>
                <Image
                  src={incidencia.imagenes_base64}
                  style={{ height: 100, width: 100 }}
                />
              </View>
            ))}
          </View>
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
