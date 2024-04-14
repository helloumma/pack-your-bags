"use client";

import Input from "@/components/input";
import Table from "@/components/table";
import Results from "@/components/results";
import { useState } from "react";

export default function Home() {
  const [bag, setBag] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [data, setData] = useState<any>([]);

  const handleChangeBag = (newBag: string) => {
    setBag(newBag);
  };

  const handleChangeItem = (newItem: string) => {
    setItem(newItem);
  };

  const onSubmit = () => {
    setData([
      ...data,
      {
        bag: bag,
        item: item,
      },
    ]);
  };

  return (
    <div>
      <Input
        onBagChange={handleChangeBag}
        onItemChange={handleChangeItem}
        onSubmit={onSubmit}
        bag={bag}
        item={item}
      />
      <Table data={data} />
      <Results />
    </div>
  );
}
