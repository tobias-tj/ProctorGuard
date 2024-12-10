import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

const chartConfig = {
  available: {
    label: "Disponible",
    color: "hsl(var(--chart-1))",
  },
  used: {
    label: "Usado",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function CreditCard({
  availableCredit,
  totalUsage,
}: {
  availableCredit: number;
  totalUsage: number;
}) {
  const chartData = [
    {
      month: "january",
      available: availableCredit,
      used: totalUsage,
    },
  ];

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px]"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="text-sm font-bold fill-foreground"
                    >
                      {`${totalUsage} / ${availableCredit}`}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Créditos Utilizado
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="available"
          stackId="a"
          cornerRadius={5}
          fill="hsl(var(--chart-1))"
          className="stroke-2 stroke-transparent"
        />
        <RadialBar
          dataKey="used"
          fill="hsl(var(--chart-2))"
          stackId="a"
          cornerRadius={5}
          className="stroke-2 stroke-transparent"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
