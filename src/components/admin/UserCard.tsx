import { Settings } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const UserCard = ({ type, count }: { type: string; count: number }) => {
  return (
    <Card className="relative min-w-[130px] min-h-[250px] flex-1 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <span className="absolute flex justify-center p-1 text-[15px] h-[30px] w-[70px] text-white rounded-full top-2 left-2 bg-chart-1">
        2024
      </span>
      <CardContent className="flex flex-col items-center justify-center h-full pt-10">
        <span className="text-6xl font-bold">
          {count !== null ? count : "..."}
        </span>
        <CardFooter className="absolute bottom-0 left-0 right-0 justify-center pb-4">
          <p className="text-xl text-gray-500 text-muted-foreground">{type}</p>
        </CardFooter>
      </CardContent>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-[30px]"
        onClick={() => console.log("Configuración")}
      >
        <Settings className="w-5 h-5" />
      </Button>
    </Card>
  );
};

export default UserCard;
