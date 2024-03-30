import { memo, useState } from "react";
import { Dropdown } from "primereact/dropdown";

function CustomDropdown() {
  const [dropdownValue, setDropdownValue] = useState("");
  const options = ["a", "b", "c", "d", "e"];
  return (
    <Dropdown
      id="input9"
      options={options}
      value={dropdownValue}
      className="w-full"
      onChange={(e) => setDropdownValue(e.value)}
    />
  );
}

export default memo(CustomDropdown);
