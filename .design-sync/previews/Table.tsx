import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "sosek-system"

const invoices = [
  { id: "INV-1041", customer: "Acme Inc.", status: "Paid", amount: "$1,250.00" },
  { id: "INV-1042", customer: "Globex", status: "Pending", amount: "$480.00" },
  { id: "INV-1043", customer: "Initech", status: "Failed", amount: "$2,900.00" },
  { id: "INV-1044", customer: "Umbrella Co.", status: "Paid", amount: "$760.00" },
]

export const Invoices = () => (
  <Table>
    <TableCaption>Recent invoices for September 2026.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-28">Invoice</TableHead>
        <TableHead>Customer</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((inv) => (
        <TableRow key={inv.id}>
          <TableCell className="font-medium">{inv.id}</TableCell>
          <TableCell>{inv.customer}</TableCell>
          <TableCell>
            <Badge variant={inv.status === "Paid" ? "secondary" : inv.status === "Failed" ? "destructive" : "outline"}>
              {inv.status}
            </Badge>
          </TableCell>
          <TableCell className="text-right">{inv.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$5,390.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)
