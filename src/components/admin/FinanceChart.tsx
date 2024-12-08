import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Settings } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const data = [
  { name: "Ene", correct: 219, incident: 184 },
  { name: "Feb", correct: 150, incident: 230 },
  { name: "Mar", correct: 130, incident: 100 },
  { name: "Abr", correct: 200, incident: 126 },
  { name: "May", correct: 100, incident: 200 },
  { name: "Jun", correct: 45, incident: 21 },
  { name: "Jul", correct: 126, incident: 110 },
  { name: "Ago", correct: 99, incident: 32 },
  { name: "Sep", correct: 100, incident: 59 },
  { name: "Oct", correct: 98, incident: 180 },
  { name: "Nov", correct: 150, incident: 98 },
  { name: "Dic", correct: 129, incident: 100 },
];

export function FinanceChart() {
  return (
    <Card className="w-full h-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Total de Exámenes
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
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{
                fill: "hsl(var(--muted-foreground))",
              }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tick={{
                fill: "hsl(var(--muted-foreground))",
              }}
              tickLine={false}
              tickMargin={20}
            />
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
                paddingTop: "10px",
                paddingBottom: "30px",
              }}
            />
            <Line
              type="monotone"
              dataKey="correct"
              stroke="hsl(var(--chart-2))"
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="incident"
              stroke="hsl(var(--chart-1))"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default FinanceChart;
