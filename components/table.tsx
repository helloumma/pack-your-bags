"use client";

import {
  Table as TableUI,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import { MinusCircledIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TriangleDownIcon } from "@radix-ui/react-icons";

type DropdownItem = {
  label: string;
  value: string;
};
const dropdownItems: any[] = [
  { label: "Backpack", value: "backpack" },
  { label: "Suitcase", value: "suitcase" },
  { label: "Toiletries", value: "toiletries" },
];
import { Button } from "@/components/ui/button";

export default function Table({
  data,
  onCheckboxChange,
  removeRow,
  onBagChange,
}: any) {
  return (
    <TableUI>
      <TableHeader>
        <TableRow>
          <TableHead>Bag</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Packed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((entry: any, index: any) => (
          <TableRow key={index}>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {entry.bag}
                    <TriangleDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {dropdownItems.map((dropdownItem) => (
                    <DropdownMenuCheckboxItem
                      key={entry.bag}
                      checked={entry.bag === dropdownItem.value}
                      onCheckedChange={() =>
                        onBagChange(index, dropdownItem.value)
                      }
                    >
                      {dropdownItem.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
            <TableCell>{entry.item}</TableCell>
            <TableCell>
              <Checkbox
                checked={entry.packed}
                onCheckedChange={() => onCheckboxChange(index)}
              />
            </TableCell>
            <TableCell>
              <MinusCircledIcon
                className="h-4 w-4"
                onClick={() => removeRow(index)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableUI>
  );
}
