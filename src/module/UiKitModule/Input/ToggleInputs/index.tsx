import { memo, useState } from "react";
import { Card } from "primereact/card";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";

function ToggleInputs() {
  const [toggleButtonValue, setToggleButtonValue] = useState(false);
  const [selectButtonValue, setSelectButtonValue] = useState("");
  const [selectButtonMultipleValue, setSelectButtonMultipleValue] =
    useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <Card className="mt-5">
      <div className="title">ToggleButton</div>
      <ToggleButton
        checked={toggleButtonValue}
        onChange={(e) => setToggleButtonValue(e.value)}
        className="w-full"
      />
      <div className="title">SelectButton</div>
      <SelectButton
        value={selectButtonValue}
        onChange={(e) => setSelectButtonValue(e.value)}
        options={options}
      />
      <div className="title">SelectButton-Multiple</div>
      <SelectButton
        value={selectButtonMultipleValue}
        onChange={(e) => setSelectButtonMultipleValue(e.value)}
        options={options}
        multiple
      />
    </Card>
  );
}

export default memo(ToggleInputs);
