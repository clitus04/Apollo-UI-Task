import { Card } from "primereact/card";
import { ListBox } from "primereact/listbox";
import { memo, useCallback, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

function DropdownInputs() {
  const [listBoxValue, setListBoxValue] = useState(null);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [multiSelectValue, setMuliSelectValue] = useState(null);
  const options = [
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
  ];

  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];

  const itemTemplate = useCallback(
    (option: any) => (
      <div className="flex align-items-center">
        <img
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
          alt={option.name}
        />
        <span>{option.name}</span>
      </div>
    ),
    []
  );
  return (
    <Card className="mt-5">
      <div className="title">List Box</div>
      <ListBox
        filter
        value={listBoxValue}
        onChange={(e) => setListBoxValue(e.value)}
        options={options}
        optionLabel="name"
        className="w-full"
      />
      <div className="title">Dropdown</div>
      <Dropdown
        value={dropdownValue}
        options={options}
        optionLabel="name"
        className="w-full"
        onChange={(e: any) => setDropdownValue(e.value)}
      />
      <div className="title">MultiSelect</div>
      <MultiSelect
        value={multiSelectValue}
        onChange={(e: any) => setMuliSelectValue(e.value)}
        options={countries}
        optionLabel="name"
        itemTemplate={itemTemplate}
        className="w-full"
        display="chip"
      />
    </Card>
  );
}

export default memo(DropdownInputs);
