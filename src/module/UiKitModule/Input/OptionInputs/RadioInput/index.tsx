import { memo, useState } from "react";
import { RadioButton } from "primereact/radiobutton";

function RadioInput() {
  const [radioValue, setRadioValue] = useState("");
  return (
    <div className="mb-4">
      <div className="title">RadioButton</div>
      <div className="flex">
        <span className="flex align-items-center mr-6">
          <RadioButton
            inputId="chicago"
            checked={radioValue === "chicago"}
            onChange={() => setRadioValue("chicago")}
          />
          <span id="chicago" className="ml-2">
            Chicago
          </span>
        </span>
        <span className="flex align-items-center mr-6">
          <RadioButton
            inputId="united__states"
            checked={radioValue === "united_states"}
            onChange={() => setRadioValue("united_states")}
          />
          <span id="united__states" className="ml-2">
            United States
          </span>
        </span>
        <span className="flex align-items-center mr-6">
          <RadioButton
            inputId="new__york"
            checked={radioValue === "new_york"}
            onChange={() => setRadioValue("new_york")}
          />
          <span id="new__york" className="ml-2">
            New York
          </span>
        </span>
      </div>
    </div>
  );
}

export default memo(RadioInput);
