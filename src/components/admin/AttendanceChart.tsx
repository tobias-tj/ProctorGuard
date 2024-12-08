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

const data = [
  { name: "Lun", correcto: 45, incidente: 21 },
  { name: "Mar", correcto: 59, incidente: 60 },
  { name: "Mier", correcto: 32, incidente: 10 },
  { name: "Jue", correcto: 70, incidente: 45 },
  { name: "Vie", correcto: 60, incidente: 13 },
  { name: "Sab", correcto: 21, incidente: 7 },
  { name: "Dom", correcto: 38, incidente: 18 },
];

export function AttendanceChart() {
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
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={20}>
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
      </CardContent>
    </Card>
  );
}
