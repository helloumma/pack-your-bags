"use client";

import Input from "@/components/input";
import Table from "@/components/table";
import Results from "@/components/results";
import { useState } from "react";

export default function Home() {
  const [bag, setBag] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [results, setResults] = useState<{}>({});
  const [error, setError] = useState<string>("");

  const handleChangeBag = (newBag: string) => {
    setBag(newBag);
  };

  const handleChangeItem = (newItem: string) => {
    setItem(newItem);
  };

  const onSubmit = () => {
    if (!bag || !item) {
      alert("Please complete all fields before submitting.");
      return;
    }
    setData([...data, { bag: bag, item: item, packed: false }]);
    if (bag.length < 0 || item.length < 0) setError("all fields required");

    setBag("");
    setItem("");
  };

  const handleCheckboxChange = (index: number) => {
    const newData = data.map((entry: any, idx: any) => {
      if (idx === index) {
        return { ...entry, packed: !entry.packed };
      }
      return entry;
    });

    setData(newData);
    updateResults(newData);
  };

  const handleRowRemoved = (index: number) => {
    const filteredData = data.filter((_: any, idx: number) => idx !== index);
    setData(filteredData);
    updateResults(filteredData);
  };

  const handleBagChangeInRow = (index: number, newBag: {}) => {
    const newData = data.map((entry: {}, idx: number) => {
      if (idx === index) {
        return { ...entry, bag: newBag };
      }
      return entry;
    });
    setData(newData);
    updateResults(newData);
  };

  const updateResults = (newData: {}[]) => {
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

  return (
    <div>
      <div className="w-screen p-2 border-b border-gray-200 flex justify-center">
        <Input
          onBagChange={handleChangeBag}
          onItemChange={handleChangeItem}
          onSubmit={onSubmit}
          bag={bag}
          item={item}
          error={error}
        />
      </div>

      <div className="flex">
        <Table
          data={data}
          onCheckboxChange={handleCheckboxChange}
          removeRow={handleRowRemoved}
          onBagChange={handleBagChangeInRow}
        />
        <Results data={results} />
      </div>
    </div>
  );
}
