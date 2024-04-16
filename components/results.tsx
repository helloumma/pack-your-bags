import {
  Table as TableNew,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Results({ data }: any | {}) {
  return (
    <TableNew>
      <TableHeader>
        <TableRow>
          <TableHead>Bag</TableHead>
          <TableHead>% Packed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
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
