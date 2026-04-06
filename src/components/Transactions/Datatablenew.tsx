import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {SelectTrigger,SelectItem,Select,SelectContent,SelectValue } from "../ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { buttonVariants } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { IconLayoutColumns,IconPlus,IconChevronDown } from "@tabler/icons-react"
import { cn } from '@/lib/utils'
import { Button } from "../ui/button"
import { MoreVertical } from "lucide-react"
import { useState ,useMemo} from "react"

import {type ColumnDef ,
  type SortingState,
  getSortedRowModel } from "@tanstack/react-table"

type Transaction = {
  item: string
  category: string
  amount: number
  type: string
  date: string
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "item",
    header: "Item",
    enableSorting: true,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    enableSorting: true,
    cell: ({ row }) => (
      <span>₹ {row.getValue("amount")}</span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    enableSorting: true,
  },
  {
    id: "actions",
    header: "Action",
    cell: () => (
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    ),
  },
]
const transactions:Transaction[] = [
  {
    item: "Potato",
    category: "Groceries",
    amount: 250,
    type: "expense",
    date: "2026-02-02",
  },
  {
    item: "Salary",
    category: "Income",
    amount: 50000,
    type: "income",
    date: "2026-02-01",
  },
  {
    item: "Electricity Bill",
    category: "Utilities",
    amount: 1800,
    type: "expense",
    date: "2026-02-03",
  },
  {
    item: "Uber Ride",
    category: "Transport",
    amount: 320,
    type: "expense",
    date: "2026-02-04",
  },
  {
    item: "Freelance Project",
    category: "Income",
    amount: 12000,
    type: "income",
    date: "2026-02-05",
  },
  {
    item: "Movie Night",
    category: "Entertainment",
    amount: 600,
    type: "expense",
    date: "2026-02-06",
  },
  {
    item: "Restaurant",
    category: "Food",
    amount: 950,
    type: "expense",
    date: "2026-02-07",
  },
  {
    item: "Internet Bill",
    category: "Utilities",
    amount: 999,
    type: "expense",
    date: "2026-02-08",
  },
  {
    item: "Gym Membership",
    category: "Health",
    amount: 1500,
    type: "expense",
    date: "2026-02-09",
  },
  {
    item: "Stock Profit",
    category: "Investment",
    amount: 3000,
    type: "income",
    date: "2026-02-10",
  },
]


export function Datatable(){
  const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: 7, // rows per page
})
const [role, setRole] = useState<"admin"|"user">("admin")
const [sorting, setSorting] = useState<SortingState>([])
const filteredColumns = useMemo(() => {
  if (role === "admin") {
    return columns
  }

  return columns.filter(
    (col) => col.id !== "actions"
  )
}, [role])
const table = useReactTable({
  data: transactions,
  columns: filteredColumns,
  state: {
    pagination,
    sorting,
  },
  onPaginationChange: setPagination,
  onSortingChange: setSorting,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel()
})
const totalPages = table.getPageCount()
const currentPage =
  table.getState().pagination.pageIndex

const pagesToShow = []

for (let i = 0; i < totalPages; i++) {
  if (
    i === 0 ||
    i === totalPages - 1 ||
    Math.abs(i - currentPage) <= 1
  ) {
    pagesToShow.push(i)
  } else if (
    pagesToShow[pagesToShow.length - 1] !== "..."
  ) {
    pagesToShow.push("...")
  }
}
    return (
         <div className="space-y-4 px-4">
   <div className="md:flex items-center justify-between ">
        <Select defaultValue="outline">
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <Select value={role} onValueChange={(val) =>setRole(val as "admin" | "user")}>
          <SelectTrigger className="flex w-fit @4xl/main:hidden" size="sm"><SelectValue /></SelectTrigger><SelectContent>
          <SelectItem value="admin"> Admin</SelectItem>
        <SelectItem value="user">User</SelectItem></SelectContent>
          </Select>
          </SelectContent>
        </Select>
         <Tabs
       value={role}
           onValueChange={(val) =>
          setRole(val as "admin" | "user")
             }
             >
        <TabsList className="hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex">
       <TabsTrigger value="admin">
      Admin
    </TabsTrigger>

    <TabsTrigger value="user">
      User
    </TabsTrigger>
  </TabsList>
</Tabs>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <IconLayoutColumns />
                <span className="hidden lg:inline">Sort By</span>
                <span className="lg:hidden">Sort</span>
                <IconChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
               <DropdownMenuCheckboxItem onClick={()=>table.setSorting([{ id: "item", desc: false }])} className="capitalize">Alphabet</DropdownMenuCheckboxItem>
               <DropdownMenuCheckboxItem onClick={()=>table.setSorting([{ id: "date", desc: true }])} className="capitalize">Date</DropdownMenuCheckboxItem>
               <DropdownMenuCheckboxItem onClick={()=>table.setSorting([{ id: "amount", desc: true }])} className="capitalize">Price</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {
            role==="admin" &&(
            <Button variant="outline" size="sm">
            <IconPlus />
            <span className="hidden lg:inline">New Entry</span>
          </Button>
            )
          }
        </div>
       
      </div>
  <div className="max-h-[600px] overflow-y-auto rounded-xl border overflow-x-auto max-w-[1200px] ">
    <Table className="min-w-[800px] w-full overflow-x-auto border-solid">
      <TableHeader className="sticky top-0 z-10 bg-primary text-primary-foreground bg-muted dark:bg-muted/80">
        {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
            <TableHead key={header.id}>
          {header.isPlaceholder
            ? null
            : flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
        </TableHead>
      ))}
         </TableRow>
            ))}
     </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
    <TableRow key={row.id}>
    {row.getVisibleCells().map((cell) => (
      <TableCell key={cell.id}>
        {flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
               )}
           </TableCell>
           ))}
         </TableRow>
          ))}
      </TableBody>
    </Table>
    </div>
     <Pagination>
  <PaginationContent>

    {/* Previous */}
    <PaginationItem>
      <PaginationPrevious
        onClick={() => table.previousPage()}
        className={
          !table.getCanPreviousPage()
            ? "pointer-events-none opacity-50"
            : ""
        }
      />
    </PaginationItem>
    {pagesToShow.map((page, index) =>
      page === "..." ? (
        <PaginationItem key={`ellipsis-${index}`}>
      <span className="px-2">...</span>
        </PaginationItem>
           ) : (
    <PaginationItem key={page}>
      <PaginationLink
        isActive={currentPage === page}
        onClick={() => table.setPageIndex(page as number)}
      >
        {(page as number) + 1}
      </PaginationLink>
    </PaginationItem>
      )
    )}
    <PaginationItem>
      <PaginationNext
        onClick={() => table.nextPage()}
        className={
          !table.getCanNextPage()
            ? "pointer-events-none opacity-50"
            : ""
        }
      />
    </PaginationItem>

  </PaginationContent>
</Pagination>
    </div>
    )
}