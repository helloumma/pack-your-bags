export interface DropdownItem {
  label: string;
  value: string;
  className: string;
}

export type DropdownItemInput = Omit<DropdownItem, "className">;

type data = {
  bag: string;
  item: string;
  packed: boolean;
};

export interface table {
  data: data[];
  onCheckboxChange: (index: number) => void;
  removeRow: (index: number) => void;
  onBagChange: (index: number, dropdown: string) => void;
}

export interface Input {
  bag: string;
  item: string;
  onBagChange: (value: string) => void;
  onItemChange: (e: string) => void;
  onSubmit: () => void;
  error: string;
}
