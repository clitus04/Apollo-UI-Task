import { memo, useState } from "react";
import { MultiSelect } from "primereact/multiselect";

function CustomMultiSelect() {
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const options = ["a", "b", "c", "d", "e"];
  return (
    <MultiSelect
      id="input10"
      options={options}
      value={multiSelectValue}
      className="w-full"
      onChange={(e) => setMultiSelectValue(e.value)}
    />
  );
}

export default memo(CustomMultiSelect);
