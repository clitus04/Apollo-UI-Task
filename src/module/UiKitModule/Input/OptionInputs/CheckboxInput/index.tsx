import { memo, useState } from "react";
import { Checkbox } from "primereact/checkbox";

function CheckboxInput() {
  const [checkboxValue, setCheckboxValue] = useState("");
  return (
    <div className="mb-4">
      <div className="title">Checkbox</div>
      <div className="flex">
        <span className="flex align-items-center mr-6">
          <Checkbox
            inputId="chicago"
            checked={checkboxValue === "chicago"}
            onChange={() => setCheckboxValue("chicago")}
          />
          <span id="chicago" className="ml-2">
            Chicago
          </span>
        </span>
        <span className="flex align-items-center mr-6">
          <Checkbox
            inputId="united__states"
            checked={checkboxValue === "united_states"}
            onChange={() => setCheckboxValue("united_states")}
          />
          <span id="united__states" className="ml-2">
            United States
          </span>
        </span>
        <span className="flex align-items-center mr-6">
          <Checkbox
            inputId="new__york"
            checked={checkboxValue === "new_york"}
            onChange={() => setCheckboxValue("new_york")}
          />
          <span id="new__york" className="ml-2">
            New York
          </span>
        </span>
      </div>
    </div>
  );
}

export default memo(CheckboxInput);
