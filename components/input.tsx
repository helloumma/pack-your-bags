import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputShade } from "@/components/ui/input";
import { TriangleDownIcon } from "@radix-ui/react-icons";

type DropdownItem = {
  label: string;
  value: string;
};

const dropdownItems: DropdownItem[] = [
  { label: "Backpack", value: "backpack" },
  { label: "Suitcase", value: "suitcase" },
  { label: "Toiletries", value: "toiletries" },
];

type bag = string;
type item = string;
type onBagChange = (value: string) => void;
type onItemChange = (e: string) => void;
type onSubmit = () => void;

interface Input {
  bag: bag;
  item: item;
  onBagChange: onBagChange;
  onItemChange: onItemChange;
  onSubmit: onSubmit;
}

export default function Input({
  bag,
  item,
  onBagChange,
  onItemChange,
  onSubmit,
}: Input) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {bag || "Select bag"} <TriangleDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {dropdownItems.map((dropdownItem, index: number) => (
            <DropdownMenuCheckboxItem
              key={index}
              checked={bag === dropdownItem.value}
              onCheckedChange={() => onBagChange(dropdownItem.value)}
            >
              {dropdownItem.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <InputShade
        placeholder="Add item"
        value={item}
        onChange={(e) => onItemChange(e.target.value)}
      />
      <Button type="submit" onClick={onSubmit}>
        Add
      </Button>
    </div>
  );
}
