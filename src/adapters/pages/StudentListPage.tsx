import { Student } from "@/types/Student";
import { Eye, Trash, Filter, ListOrdered } from "lucide-react";
import FormModal from "@/components/list/FormModal";
import { studentsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const columns = [
  {
    header: "Nombre Completo",
    accessor: "info",
    className: "hidden md:table-cell",
  },
  {
    header: "CI",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Correo",
    accessor: "email",
    className: "hidden md:table-cell",
  },
  {
    header: "Telefono",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Acciones",
    accessor: "action",
  },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <TableRow
      key={item.studentId}
      className="text-sm border-b border-gray-200 "
    >
      <TableCell>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h3 className="font-semibold text-black dark:text-white">
              {item.name}
            </h3>
          </div>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{item.studentId}</TableCell>
      <TableCell className="hidden md:table-cell">{item.email}</TableCell>
      <TableCell className="hidden md:table-cell">{item.phone}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Link to={`/list/exams/${item.studentId}`}>
            <Button variant="outline" className="p-2 rounded-full">
              <Eye size={16} />
            </Button>
          </Link>
          <FormModal
            table="student"
            type="delete"
            id={Number(item.studentId)}
            trigger={
              <Button variant="outline" className="p-2 rounded-full">
                <Trash size={16} />
              </Button>
            }
          />
        </div>
      </TableCell>
    </TableRow>
  );

  return (
    <div className="flex-1 w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 lg:w-[900px] sm:w-[400px]">
      {/* TOP */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-primary">
          Todos los estudiantes
        </h1>
        <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
          <Input placeholder="Search..." className="w-full md:w-64" />
          <div className="flex items-center gap-4">
            <Button variant="outline" className="p-2 rounded-full">
              <Filter size={14} />
            </Button>
            <Button variant="outline" className="p-2 rounded-full">
              <ListOrdered size={14} />
            </Button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table className="bg-white dark:bg-gray-400 rounded-xl">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.accessor} className={column.className}>
                {column.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{studentsData.map(renderRow)}</TableBody>
      </Table>
      {/* PAGINATION */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default StudentListPage;
