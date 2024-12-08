import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";

const announcements = [
  {
    title: "Lorep ipsum dolr sit",
    date: "2025-01-01",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volsas, expedia. Rerus, qusnd falis?",
    bgColor: "bg-primary",
  },
  {
    title: "Lorep ipsum dolr sit",
    date: "2025-01-01",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volsas, expedia. Rerus, qusnd falis?",
    bgColor: "bg-primary",
  },
  {
    title: "Lorep ipsum dolr sit",
    date: "2025-01-01",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volsas, expedia. Rerus, qusnd falis?",
    bgColor: "bg-primary",
  },
];

const Announcements = () => {
  return (
    <Card className="w-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Anuncios
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-[40px] w-[80px]"
          onClick={() => console.log("Configuración")}
        >
          Ver Mas
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`${announcement.bgColor} p-4 rounded-md transition-all hover:shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="px-2 py-1 text-xs text-gray-500 bg-white rounded-md">
                {announcement.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{announcement.content}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Announcements;
