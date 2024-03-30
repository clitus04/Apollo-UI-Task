import { memo, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";

function InputGroup() {
  const [radioChecked, setRadioChecked] = useState(false);
  return (
    <Card className="mt-2">
      <div className="title">Input Groups</div>
      <div className="grid">
        <div className="col-12 lg:col-6">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-shopping-cart"></i>
            </span>
            <span className="p-inputgroup-addon">
              <i className="pi pi-globe"></i>
            </span>
            <InputText placeholder="Price" />
            <span className="p-inputgroup-addon">$</span>
            <span className="p-inputgroup-addon">.00</span>
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="p-inputgroup">
            <Button label="Search" severity="info" />
            <InputText placeholder="Keyword" />
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <RadioButton
                checked={radioChecked}
                onChange={(e) => setRadioChecked(e.value)}
              />
            </span>
            <InputText placeholder="Confirm" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default memo(InputGroup);
