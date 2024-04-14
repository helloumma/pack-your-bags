"use client";

import {
  Table as TableUI,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Table({ data }: any) {
  return (
    <TableUI>
      <TableHeader>
        <TableRow>
          <TableHead>Bag</TableHead>
          <TableHead>Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((entry: any, index: number) => (
          <TableRow key={index}>
            <TableCell>{entry.bag}</TableCell>
            <TableCell>{entry.item}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableUI>
  );
}
