"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputShade } from "@/components/ui/input";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { DropdownItemInput, Input as input } from "@/app/lib";

const dropdownItems: DropdownItemInput[] = [
  { label: "Backpack", value: "backpack" },
  { label: "Suitcase", value: "suitcase" },
  { label: "Toiletries", value: "toiletries" },
];

export default function InputComponent({
  bag,
  item,
  onBagChange,
  onItemChange,
  onSubmit,
}: input) {
  const [error, setError] = useState<string>("");
  const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onItemChange(event.target.value);
    if (error) setError("");
  };

  const handleSubmission = () => {
    if (!bag || !item.trim()) {
      setError("Please select a bag and specify an item.");
      return;
    }
    setError("");
    onSubmit();
  };

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <div className="flex  max-w-sm  items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {bag || "Select bag"} <TriangleDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {dropdownItems.map((dropdownItem, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                checked={bag === dropdownItem.value}
                onCheckedChange={() => {
                  onBagChange(dropdownItem.value);
                  if (error) setError("");
                }}
              >
                {dropdownItem.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <InputShade
          placeholder="Type item to bag..."
          value={item}
          onChange={handleItemChange}
          onBlur={() => item.trim() === "" && setError("Item cannot be empty")}
        />
        <Button type="button" onClick={handleSubmission}>
          Add
        </Button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
