import { memo } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

function VerticalForm() {
  return (
    <Card title="Vertical">
      <div className="flex flex-column">
        <label className="mb-2 text-sm" htmlFor="name__vertical">
          Name
        </label>
        <InputText id="name__vertical" className="mb-2" />
        <label className="mb-2 text-sm" htmlFor="email__vertical">
          Email
        </label>
        <InputText id="email__vertical" className="mb-2" />
        <label className="mb-2 text-sm" htmlFor="age__vertical">
          Age
        </label>
        <InputText id="age__vertical" className="mb-2" />
      </div>
    </Card>
  );
}

export default memo(VerticalForm);
