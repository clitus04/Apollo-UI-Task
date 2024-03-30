import { memo, useState } from "react";
import { Dropdown } from "primereact/dropdown";

function CustomDropdown() {
  const [dropdownValue, setDropdownValue] = useState("");
  const options = ["a", "b", "c", "d", "e"];
  return (
    <Dropdown
      id="input6"
      options={options}
      value={dropdownValue}
      className="w-full mt-2"
      onChange={(e) => setDropdownValue(e.value)}
      invalid
    />
  );
}

export default memo(CustomDropdown);
