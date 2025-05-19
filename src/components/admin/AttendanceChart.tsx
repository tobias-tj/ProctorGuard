import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Settings } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ReportDays } from "@/types/ReportDays";
import { Skeleton } from "../ui/skeleton";

interface AttendanceChartProps {
  reportDays: ReportDays | undefined;
  loading: boolean;
}

export function AttendanceChart({ reportDays, loading }: AttendanceChartProps) {
  const today = new Date();
  const formatter = new Intl.DateTimeFormat("es-ES", { weekday: "long" });
  const currentDay = formatter.format(today).toLowerCase();

  const chartData =
    reportDays?.lista.map((item) => {
      const isToday = item.dia.toLowerCase() === currentDay;
      return {
        name: isToday ? "Hoy" : item.dia,
        correcto: Number(item.examenesSinReportes),
        incidente: Number(item.examenesConReportes),
      };
    }) || [];
  return (
    <Card className="w-full h-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Semana
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-[30px]"
          onClick={() => console.log("Configuración")}
        >
          <Settings className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardContent className="h-full">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <Skeleton className="w-full h-[90%] rounded-md" />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={chartData} barSize={25}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  borderColor: "hsl(var(--border))",
                }}
              />
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{
                  paddingTop: "16px",
                  paddingBottom: "24px",
                }}
              />
              <Bar
                dataKey="correcto"
                fill="hsl(var(--chart-2))"
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="incidente"
                fill="hsl(var(--chart-1))"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
