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

type onCheckboxChange = (index: number) => void;
type removeRow = (index: number) => void;

type onBagChange = (index: number, dropdown: string) => void;
type onBagChangeInput = (value: string) => void;

export interface table {
  data: data[];
  onCheckboxChange: onCheckboxChange;
  removeRow: removeRow;
  onBagChange: onBagChange;
}

type bag = string;
type item = string;
type onItemChange = (e: string) => void;
type onSubmit = () => void;

export interface Input {
  bag: bag;
  item: item;
  onBagChange: onBagChangeInput;
  onItemChange: onItemChange;
  onSubmit: onSubmit;
  error: any;
}
