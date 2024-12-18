import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { Button } from "../ui/button";
import { useDashboardData } from "@/hooks/useStudentInfo";
import { useExamTotalCount } from "@/hooks/useExamInfo";

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export function CountChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([
    { name: "Correctos", value: 0, color: "hsl(var(--chart-2))" },
    { name: "Incidentes", value: 0, color: "hsl(var(--chart-1))" },
  ]);
  const [title, setTitle] = useState("Total de Exámenes");

  const { dashboardData } = useDashboardData();
  const { examTotalData } = useExamTotalCount();

  // Actualizar los datos de exámenes
  const examData = getNewExamData(examTotalData);

  // Actualizar los datos de estudiantes
  const studentData = getNewStudentData(dashboardData);

  useEffect(() => {
    // Seteamos los datos iniciales con exámenes
    setCurrentData(examData);
  }, [examTotalData]);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const total = currentData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="w-full h-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-[30px]">
              <Settings className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                setCurrentData(examData);
                setTitle("Total de Exámenes");
              }}
            >
              Mostrar Exámenes
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setCurrentData(studentData);
                setTitle("Total de Estudiantes");
              }}
            >
              Mostrar Estudiantes
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent>
        <div className="relative h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={currentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
              >
                {currentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                {total.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-6">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 transition-transform duration-200 ease-in-out transform hover:scale-105"
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {item.value.toLocaleString()}
              </h1>
              <h2 className="text-sm text-gray-500 dark:text-gray-400">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getNewStudentData(
  dashboardData: {
    total_estudiantes: number;
    total_estudiantes_con_incidencias: number;
    total_estudiantes_sin_incidencias: number;
  } | null
) {
  return dashboardData
    ? [
        {
          name: "Estudiantes Correctos",
          value: dashboardData.total_estudiantes_sin_incidencias || 0,
          color: "hsl(var(--chart-2))",
        },
        {
          name: "Estudiantes Incidentes",
          value: dashboardData.total_estudiantes_con_incidencias || 0,
          color: "hsl(var(--chart-1))",
        },
      ]
    : [
        { name: "Correctos", value: 0, color: "hsl(var(--chart-2))" },
        { name: "Incidentes", value: 0, color: "hsl(var(--chart-1))" },
      ];
}

function getNewExamData(
  examTotalData: {
    total_examenes: number;
    total_examenes_con_incidencias: number;
    total_examenes_sin_incidencias: number;
  } | null
) {
  return examTotalData
    ? [
        {
          name: "Exámenes Correctos",
          value: examTotalData.total_examenes_sin_incidencias || 0,
          color: "hsl(var(--chart-2))",
        },
        {
          name: "Exámenes Incidentes",
          value: examTotalData.total_examenes_con_incidencias || 0,
          color: "hsl(var(--chart-1))",
        },
      ]
    : [
        { name: "Correctos", value: 0, color: "hsl(var(--chart-2))" },
        { name: "Incidentes", value: 0, color: "hsl(var(--chart-1))" },
      ];
}
