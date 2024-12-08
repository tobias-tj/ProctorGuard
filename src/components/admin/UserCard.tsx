import { Ellipsis } from "lucide-react";

const UserCard = ({ type, count }: { type: string; count: number }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Ellipsis width={20} height={20} />
      </div>
      <h1 className="my-4 text-2xl font-semibold">{count}</h1>
      <h2 className="text-sm font-medium text-gray-500 capitalize">{type}</h2>
    </div>
  );
};

export default UserCard;