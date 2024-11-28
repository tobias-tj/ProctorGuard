import { Ellipsis } from "lucide-react";
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

const data = [
  {
    name: "Ene",
    correct: 219,
    incident: 184,
  },
  {
    name: "Feb",
    correct: 150,
    incident: 230,
  },
  {
    name: "Mar",
    correct: 130,
    incident: 100,
  },
  {
    name: "Abr",
    correct: 200,
    incident: 126,
  },
  {
    name: "May",
    correct: 100,
    incident: 200,
  },
  {
    name: "Jun",
    correct: 45,
    incident: 21,
  },
  {
    name: "Jul",
    correct: 126,
    incident: 110,
  },
  {
    name: "Ago",
    correct: 99,
    incident: 32,
  },
  {
    name: "Sep",
    correct: 100,
    incident: 59,
  },
  {
    name: "Oct",
    correct: 98,
    incident: 180,
  },
  {
    name: "Nov",
    correct: 150,
    incident: 98,
  },
  {
    name: "Dic",
    correct: 129,
    incident: 100,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Reportes</h1>
        <Ellipsis width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="correct"
            stroke="#C3EBFA"
            strokeWidth={4}
          />
          <Line
            type="monotone"
            dataKey="incident"
            stroke="#CFCEFF"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
