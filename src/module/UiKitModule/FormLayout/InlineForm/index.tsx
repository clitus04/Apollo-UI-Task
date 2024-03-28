import { memo } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function InlineForm() {
  return (
    <Card title="Inline" className="mt-5">
      <div className="grid gap-3 px-2">
        <InputText placeholder="Firstname" className="col-4" />
        <InputText placeholder="Lastname" className="col-4" />
        <Button label="Submit" severity="info" className="col-2" />
      </div>
    </Card>
  );
}

export default memo(InlineForm);
