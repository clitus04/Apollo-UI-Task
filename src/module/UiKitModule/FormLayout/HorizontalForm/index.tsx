import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { memo } from "react";

function HorizontalForm() {
  return (
    <Card title="Horizontal">
      <div className="flex align-items-center mb-3">
        <label htmlFor="name__horizontal" className="w-5rem text-sm">
          Name
        </label>
        <InputText id="name__horizontal" className="flex-1" />
      </div>
      <div className="flex align-items-center">
        <label htmlFor="email__horizontal" className="w-5rem text-sm">
          Email
        </label>
        <InputText id="email__horizontal" className="flex-1" />
      </div>
    </Card>
  );
}

export default memo(HorizontalForm);
