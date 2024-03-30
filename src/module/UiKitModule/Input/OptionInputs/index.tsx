import { memo, useState } from "react";
import { Card } from "primereact/card";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import { InputSwitch } from "primereact/inputswitch";

function OptionInputs() {
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <Card>
      <RadioInput />
      <CheckboxInput />
      <div className="title">Input Switch</div>
      <InputSwitch
        checked={switchStatus}
        onChange={(e: any) => setSwitchStatus(e.value)}
      />
    </Card>
  );
}

export default memo(OptionInputs);
