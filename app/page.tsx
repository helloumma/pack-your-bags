"use client";

import Input from "@/components/input";
import Table from "@/components/table";
import Results from "@/components/results";
import { useState } from "react";

export default function Home() {
  const [bag, setBag] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [results, setResults] = useState<any>({});

  const handleChangeBag = (newBag: any) => {
    setBag(newBag);
  };

  const handleChangeItem = (newItem: any) => {
    setItem(newItem);
  };

  const onSubmit = () => {
    setData([...data, { bag: bag, item: item, packed: false }]);
    setBag("");
    setItem("");
  };

  const handleCheckboxChange = (index: any) => {
    const newData = data.map((entry: any, idx: any) => {
      if (idx === index) {
        return { ...entry, packed: !entry.packed };
      }
      return entry;
    });

    setData(newData);
    updateResults(newData);
  };

  const updateResults = (newData: any) => {
    const counts = newData.reduce((acc: any, { bag, packed }: any) => {
      if (!acc[bag]) {
        acc[bag] = { total: 0, packed: 0 };
      }
      acc[bag].total += 1;
      if (packed) {
        acc[bag].packed += 1;
      }
      return acc;
    }, {});

    const percentages = Object.keys(counts).reduce((acc: any, key: any) => {
      acc[key] = (counts[key].packed / counts[key].total) * 100;
      return acc;
    }, {});

    setResults(percentages);
  };

  console.log(results);

  return (
    <div>
      <Input
        onBagChange={handleChangeBag}
        onItemChange={handleChangeItem}
        onSubmit={onSubmit}
        bag={bag}
        item={item}
      />
      <Table data={data} onCheckboxChange={handleCheckboxChange} />
      <Results data={results} />
    </div>
  );
}
