import {
  Table as TableNew,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Results({ data }: {} | any) {
  return (
    <TableNew>
      <TableHeader>
        <TableRow>
          <TableHead>Bag</TableHead>
          <TableHead>% Packed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-double border-b-4 border-gray-200">
        {Object.entries(data).map(
          ([bag, percentage]: [string, any], index: number) => (
            <TableRow key={index}>
              <TableCell>{bag}</TableCell>
              <TableCell>{percentage.toFixed(2) as number}%</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </TableNew>
  );
}
