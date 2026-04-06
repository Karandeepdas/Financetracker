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

const transactions = [
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

export function TableDemo() {
  
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
            <SelectItem value="outline">Admin</SelectItem>
            <SelectItem value="past-performance">User</SelectItem>
          </SelectContent>
        </Select>
         <Tabs>
        <TabsList className="hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="outline">Admin</TabsTrigger>
          <TabsTrigger value="past-performance">User</TabsTrigger>
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
               <DropdownMenuCheckboxItem className="capitalize">Alphabet</DropdownMenuCheckboxItem>
               <DropdownMenuCheckboxItem className="capitalize">Date</DropdownMenuCheckboxItem>
               <DropdownMenuCheckboxItem className="capitalize">Price</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <IconPlus />
            <span className="hidden lg:inline">New Entry</span>
          </Button>
        </div>
       
      </div>
  <div className="max-h-[600px] overflow-y-auto rounded-xl border overflow-x-auto max-w-[1200px] ">
    <Table className="min-w-[800px] w-full overflow-x-auto border-solid">
      <TableHeader className="sticky top-0 z-10 bg-primary text-primary-foreground bg-muted dark:bg-muted/80">
        <TableRow className="border-solid">
          <TableHead className="w-[20%]">Item</TableHead>
          <TableHead className="w-[20%]">Category</TableHead>
          <TableHead className="w-[15%]">Type</TableHead>
          <TableHead className="w-[15%]">Amount</TableHead>
          <TableHead className="w-[20%]">Date</TableHead>
          <TableHead className="w-[10%] text-left">Action</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((invoice) => (
          <TableRow key={invoice.item}>
            <TableCell className="font-medium">{invoice.item}</TableCell>
            <TableCell>{invoice.category}</TableCell>
            <TableCell>{invoice.type}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.date}</TableCell>
             <TableCell className="text-left">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreVertical className="h-4 w-4"/>
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
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href='#'
            isActive
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'icon'
              }),
              'hover:!text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:text-primary-foreground dark:hover:bg-primary/90 !shadow-none dark:border-transparent'
            )}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  )
}
