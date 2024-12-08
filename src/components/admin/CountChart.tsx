import { useState } from "react";
import { Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { Button } from "../ui/button";

const data = [
  { name: "Examenes Correctos", value: 1634, color: "hsl(var(--chart-2))" },
  { name: "Examenes Incidentes", value: 1234, color: "hsl(var(--chart-1))" },
];

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

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const total = data.reduce((sum, item) => sum + item.value, 0);

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
      <CardContent>
        <div className="relative h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
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
                {data.map((entry, index) => (
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
          {data.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center gap-2 transition-transform duration-200 ease-in-out transform hover:scale-105">
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
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {item.name}: {((item.value / total) * 100).toFixed(1)}%
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
