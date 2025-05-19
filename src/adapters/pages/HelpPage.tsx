import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpPage = () => {
  const whatsappNumber = "+595974853466";
  const whatsappMessage = encodeURIComponent(
    "Hola, necesito ayuda con el dashboard de ProctorGuard."
  );

  const youtubeChannelUrl = "https://www.youtube.com/@Yvagacore";
  const faqItems = [
    {
      question: "¿Cómo puedo exportar los datos de incidencias?",
      answer:
        "Puedes exportar los datos dirigiéndote a la sección de 'Reportes', seleccionando el periodo que deseas y haciendo clic en el botón 'Exportar a PDF' o 'Exportar a Excel'.",
    },
    {
      question: "¿Puedo filtrar las incidencias por tipo?",
      answer:
        "Sí, en la sección de 'Gráficos de Incidencias' encontrarás un filtro desplegable donde puedes seleccionar el tipo de incidencia que deseas visualizar.",
    },
    {
      question: "¿Cómo agrego un nuevo estudiante al sistema?",
      answer:
        "Dirígete a la sección 'Estudiantes', haz clic en el botón '+ Agregar Estudiante' y completa el formulario con la información requerida.",
    },
    {
      question: "¿Es posible personalizar los gráficos del dashboard?",
      answer:
        "Actualmente ofrecemos configuraciones predefinidas, pero estamos trabajando en opciones de personalización que estarán disponibles en próximas actualizaciones.",
    },
  ];

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="justify-start p-1 mb-6 bg-gray-100 rounded-lg dark:bg-gray-800">
          <TabsTrigger value="overview" className="px-5 py-2">
            Resumen
          </TabsTrigger>
          <TabsTrigger value="guides" className="px-5 py-2">
            Guías
          </TabsTrigger>
          <TabsTrigger value="faq" className="px-5 py-2">
            Preguntas Frecuentes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-white border-0 rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg dark:shadow-black/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[rgb(37_99_235)]">
                ¿Qué ofrece nuestro Dashboard?
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Sección diseñada para ayudarte a entender cómo funciona nuestro
                dashboard. Una herramienta completa para gestionar tus exámenes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border border-blue-100 rounded-lg bg-blue-50 dark:bg-gray-700 dark:border-gray-700 dark:ring-1 dark:ring-white/10">
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="p-2 text-white bg-gray-600 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Análisis Visual
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ver un resumen de los exámenes desarrollados con o sin
                    incidencias y visualizar gráficos interactivos sobre el
                    estado actual.
                  </p>
                </div>

                <div className="p-6 border border-indigo-100 rounded-lg bg-indigo-50 dark:bg-gray-700 dark:border-gray-700 dark:ring-1 dark:ring-white/10">
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="p-2 text-white bg-gray-600 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Reportes Detallados
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Descargar reportes en formato PDF de las incidencias
                    encontradas, vinculadas a cada estudiante para un
                    seguimiento eficaz.
                  </p>
                </div>

                <div className="p-6 border border-purple-100 rounded-lg bg-indigo-50 dark:bg-gray-700 dark:border-gray-700 dark:ring-1 dark:ring-white/10">
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="p-2 text-white bg-gray-600 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Gestión de Estudiantes
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gestionar datos de estudiantes, incidencias y reportes desde
                    una interfaz intuitiva diseñada para facilitar tu trabajo.
                  </p>
                </div>

                <div className="p-6 border border-green-100 rounded-lg bg-blue-50 dark:bg-gray-700 dark:border-gray-700 dark:ring-1 dark:ring-white/10">
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="p-2 text-white bg-gray-600 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Seguimiento en Tiempo Real
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Monitoreo en tiempo real de los exámenes en curso, con
                    alertas inmediatas cuando se detectan incidencias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold text-[rgb(37_99_235)] mt-10 mb-6">
            Capturas de pantalla
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden transition-all duration-300 border-0 hover:shadow-xl">
              <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-transparent dark:to-transparent dark:bg-gray-950 dark:text-gray-100 dark:border-b dark:border-gray-700">
                <CardTitle>Pantalla Principal</CardTitle>
                <CardDescription>Vista general del dashboard</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gray-100 aspect-video">
                  <img
                    src="/pantallaHome.png"
                    alt="Pantalla Principal"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 border-0 hover:shadow-xl">
              <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-transparent dark:to-transparent dark:bg-gray-950 dark:text-gray-100 dark:border-b dark:border-gray-700">
                <CardTitle>Gráficos de Incidencias</CardTitle>
                <CardDescription>Análisis visual de datos</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gray-100 aspect-video">
                  <img
                    src="/pantallaGraf.png"
                    alt="Gráficos de Incidencias"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 border-0 hover:shadow-xl">
              <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-transparent dark:to-transparent dark:bg-gray-950 dark:text-gray-100 dark:border-b dark:border-gray-700">
                <CardTitle>Reporte en PDF</CardTitle>
                <CardDescription>Documentos descargables</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gray-100 aspect-video">
                  <img
                    src="/pantallaExam.png"
                    alt="Reporte PDF"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="guides" className="space-y-6">
          <div className="p-6 mb-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[rgb(37_99_235)]">
              Guías de Usuario
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              Consulta nuestras guías paso a paso para aprender a utilizar todas
              las funcionalidades del dashboard.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Primeros Pasos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      1
                    </div>
                    <span>Configuración inicial de tu cuenta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      2
                    </div>
                    <span>Navegando por el dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      3
                    </div>
                    <span>Configuración de notificaciones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Gestión de Reportes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full">
                      1
                    </div>
                    <span>Generación de reportes personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full">
                      2
                    </div>
                    <span>Filtrado avanzado de incidencias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full">
                      3
                    </div>
                    <span>Exportación en múltiples formatos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Gestión de Estudiantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                      1
                    </div>
                    <span>Importación masiva de estudiantes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                      2
                    </div>
                    <span>Asignación a grupos y exámenes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                      3
                    </div>
                    <span>Seguimiento individual de incidencias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Configuración Avanzada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      1
                    </div>
                    <span>Personalización de la interfaz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      2
                    </div>
                    <span>Configuración de roles y permisos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      3
                    </div>
                    <span>Integración con otros sistemas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[rgb(37_99_235)]">
                Preguntas Frecuentes
              </CardTitle>
              <CardDescription>
                Encuentra respuestas rápidas a las dudas más comunes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-medium text-left text-gray-800 dark:text-gray-200">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Solicitar Ayuda */}
      <div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
            ¿Necesitas más ayuda?
          </h2>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Si no has encontrado la respuesta que buscas, nuestro equipo de
            soporte está listo para ayudarte.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
