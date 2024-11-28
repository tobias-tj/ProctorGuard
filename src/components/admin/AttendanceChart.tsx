import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Ellipsis } from "lucide-react";

const data = [
  {
    name: "Lun",
    correct: 45,
    incident: 21,
  },
  {
    name: "Mar",
    correct: 59,
    incident: 60,
  },
  {
    name: "Mier",
    correct: 32,
    incident: 10,
  },
  {
    name: "Jue",
    correct: 70,
    incident: 45,
  },
  {
    name: "Vie",
    correct: 60,
    incident: 13,
  },
  {
    name: "Sab",
    correct: 21,
    incident: 7,
  },
  {
    name: "Dom",
    correct: 38,
    incident: 18,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Examenes</h1>
        <Ellipsis width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} />
          <YAxis />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="correct"
            fill="#82ca9d"
            activeBar={<Rectangle fill="#82ca9d" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="incident"
            fill="#8884d8"
            activeBar={<Rectangle fill="#8884d8" stroke="purple" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
