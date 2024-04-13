import {
  Table as TableNew,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Results() {
  return (
    <TableNew>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Bag</TableHead>
          <TableHead>% packed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">data</TableCell>
          <TableCell>data</TableCell>
        </TableRow>
      </TableBody>
    </TableNew>
  );
}
