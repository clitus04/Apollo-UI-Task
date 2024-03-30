import { memo } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

function VerticalGridForm() {
  return (
    <Card title="Vertical Grid" className="mt-5">
      <div className="flex gap-3">
        <div className="flex flex-column flex-1">
          <label htmlFor="name__vertical__grid" className="text-sm">
            Name
          </label>
          <InputText id="name__vertical__grid" className="my-2" />
        </div>
        <div className="flex flex-column flex-1">
          <label htmlFor="email__vertical__grid" className="text-sm">
            Email
          </label>
          <InputText id="email__vertical__grid" className="my-2" />
        </div>
      </div>
    </Card>
  );
}

export default memo(VerticalGridForm);
