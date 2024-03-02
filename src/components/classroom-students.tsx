"use client"

import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { GetStudents, StudentDTO } from "@/api/list"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon, MagnifyingGlassIcon as SearchIcon, ListBulletIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { keepPreviousData, useQuery} from "@tanstack/react-query"

export const columns: ColumnDef<StudentDTO>[] = [
  {
    accessorKey: "ieducar",
    header: "IEducar",
    cell: ({row}) => (
      <div>{row.getValue("ieducar")}</div>
    )
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome do Estudante
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => <div className="uppercase">{row.getValue("name")}</div>
  },
  {
    accessorKey: "classroom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Turma
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => <div className="uppercase">{row.getValue("classroom")}</div>
  },
  {
    accessorKey: "birth_day",
    header: "Data de Nascimento",
    cell: ({row}) => (
      <div>{row.getValue("birth_day")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({row}) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.id)}
            >
              Declaração Geral
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Trocar Turma</DropdownMenuItem>
            <DropdownMenuItem>Vizualizar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

export function ClassroomStudents() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  })

  const {data: listStud, isLoading, isError} = useQuery<StudentDTO[]>({
    queryKey: ['year'],
    queryFn: async () => {
      const alunos = await GetStudents();
      return alunos
    },
    placeholderData: keepPreviousData,
  })
  
  const table = useReactTable({
    data: listStud || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  })

  if (isLoading) {
    return null
  }

  if (isError) {
    console.log("Deu ruim")
  }

  return (
    <div className="w-full">
      
      <div className="flex items-center py-4">
      <SearchIcon className="size-4 mr-2" />
      <Input
        placeholder="Filtrar por nome do estudante"
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />

      <ListBulletIcon className="size-4 ml-4 mr-2" />
      <Input
        placeholder="Filtrar por turma do estudante"
        value={(table.getColumn("classroom")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("classroom")?.setFilterValue(event.target.value)
        }
        className="max-w-sm "
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      }
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow 
                  key={row.id} 
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ):(
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Estudantes não encontrados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {pagination.pageIndex === 0 ? 1 : pagination.pageIndex * pagination.pageSize + 1} de{" "}
          {pagination.pageIndex === 0 ? pagination.pageSize : pagination.pageIndex * pagination.pageSize} do total de {" "}
          {table.getFilteredRowModel().rows.length} estudante(s) listados.
        </div>
        <div className="flex flex-row space-x-2">
          <Select onValueChange={(event)=> setPagination({pageSize: Number(event), pageIndex: pagination.pageIndex})}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Alunos por página" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="default"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="default"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Proxima
          </Button>
        </div>
      </div>
    </div>
  )
  
}