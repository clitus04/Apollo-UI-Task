import { memo } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

function AdvancedForms() {
  const options = [
    {
      name: "Option 1",
    },
    {
      name: "Option 2",
    },
    {
      name: "Option 3",
    },
  ];

  return (
    <Card title="Advanced">
      <div>
        <div className="flex gap-3">
          <div className="flex-1 flex flex-column">
            <label className="text-sm mb-2" htmlFor="firstname__advanced">
              Firstname
            </label>
            <InputText id="firstname__advanced" />
          </div>
          <div className="flex-1 flex flex-column">
            <label className="text-sm mb-2" htmlFor="lastname__advanced">
              Lastname
            </label>
            <InputText id="lastname__advanced" />
          </div>
        </div>
        <div className="flex flex-column mt-3">
          <label className="mb-2" htmlFor="address__advanced">
            Address
          </label>
          <InputTextarea id="address__advanced" rows={5} />
        </div>
        <div className="flex gap-3 mt-3">
          <div className="flex-1 flex flex-column">
            <label className="text-sm mb-2" htmlFor="city__advanced">
              City
            </label>
            <InputText id="city__advanced" />
          </div>
          <div className="flex-1 flex gap-3">
            <div className="flex flex-column flex-1">
              <label className="text-sm mb-2" htmlFor="state__advanced">
                State
              </label>
              <Dropdown
                options={options}
                optionLabel="name"
                value={options[0]}
                id="state__advanced"
              />
            </div>
            <div className="flex flex-column flex-1">
              <label className="text-sm mb-2" htmlFor="zip__advanced">
                Zip
              </label>
              <InputText id="zip__advanced" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default memo(AdvancedForms);
