import {
  Eye,
  ListOrdered,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useExamListData } from "@/hooks/useExamInfo";
import { ExamTable } from "@/types/ExamTable";
import formatDateToString from "@/utils/formatDateToString";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const columns = [
  {
    header: "ID",
    accessor: "info",
    className: "hidden md:table-cell",
  },
  {
    header: "Nombre",
    accessor: "name",
    className: "hidden md:table-cell",
  },
  {
    header: "Fecha",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Acciones",
    accessor: "action",
  },
];

const ExamListPage = () => {
  const [searchData, setSearchData] = useState<string>("");
  const [searchParams, setSearchParams] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const { examListData, loading, error, totalCount } = useExamListData(
    searchParams,
    page,
    perPage
  );

  const totalPages = Math.ceil(totalCount / perPage);

  const obtenerDatos = () => {
    setPage(1); // Resetear a la primera página al hacer nueva búsqueda
    setSearchParams(searchData);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      obtenerDatos();
    }
  };

  useEffect(() => {
    if (searchData === "") {
      setSearchParams(searchData);
    }
  }, [searchData]);

  const renderRow = (item: ExamTable) => (
    <TableRow key={item.id} className="text-sm border-b border-gray-200">
      <TableCell>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h3 className="font-semibold text-black dark:text-white">
              {item.id}
            </h3>
          </div>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{item.descripcion}</TableCell>
      <TableCell className="hidden md:table-cell">
        {formatDateToString(item.fecha)}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Link to={`/list/students/${item.id}`}>
            <Button variant="outline" className="p-2 rounded-full">
              <Eye size={16} />
            </Button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Botón Primera página
    if (startPage > 1) {
      items.push(
        <PaginationItem key="first">
          <PaginationLink href="#" onClick={() => setPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <span className="px-2">...</span>
          </PaginationItem>
        );
      }
    }

    // Páginas visibles
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === page}
            onClick={() => setPage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Botón Última página
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <span className="px-2">...</span>
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key="last">
          <PaginationLink href="#" onClick={() => setPage(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="flex-1 lg:w-[900px] sm:w-[400px] w-full min-h-screen p-4 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* TOP - Siempre visible */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-primary">
          Todos los Exámenes
        </h1>
        <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
          <Input
            placeholder="Buscar..."
            className="w-full md:w-64"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="p-2 rounded-full"
              onClick={obtenerDatos}
            >
              <Search size={14} />
            </Button>
            <Button variant="outline" className="p-2 rounded-full">
              <ListOrdered size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* CONTENIDO DINÁMICO */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 min-h-[400px] flex flex-col">
        {loading ? (
          <div className="flex items-center justify-center flex-1">
            <p className="text-lg font-semibold text-primary">
              Cargando exámenes...
            </p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center flex-1">
            <p className="text-lg font-semibold text-red-500">
              Ocurrió un error: {error}
            </p>
          </div>
        ) : examListData && examListData.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">
                Mostrando {(page - 1) * perPage + 1} -{" "}
                {Math.min(page * perPage, totalCount)} de {totalCount} registros
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Registros por página:
                </span>
                <Select
                  value={perPage.toString()}
                  onValueChange={(value) => {
                    setPerPage(Number(value));
                    setPage(1); // Resetear a la primera página al cambiar el tamaño
                  }}
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder={perPage} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Table className="w-full mb-4">
              <TableHeader>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.accessor}
                      className={column.className}
                    >
                      {column.header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>{examListData.map(renderRow)}</TableBody>
            </Table>

            {/* PAGINATION */}
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    disabled={page === 1}
                  />
                </PaginationItem>

                {renderPaginationItems()}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      setPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={page === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1">
            <p className="text-lg font-semibold text-gray-500 dark:text-gray-300">
              No se encontraron exámenes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamListPage;
