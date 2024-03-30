import { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./index.scss";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Chips } from "primereact/chips";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import CustomAutoComplete from "./CustomAutoComplete";
import CustomDropdown from "./CustomDropdown";
import CustomMultiSelect from "./CustomMultiSelect";
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from "primereact/password";

function InvalidState() {
  const [calendarValue, setCalendarValue] = useState<Nullable<Date>>(null);
  const [chipsValue, setChipsValue] = useState<string[]>([]);
  const [maskValue, setMaskValue] = useState<string | undefined>();
  const [passwordValue, setPasswordValue] = useState<string>("");

  return (
    <div className="invalid__state">
      <Card>
        <div className="title">Invalid State</div>
        <div className="grid">
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input1">InputText</label>
            <InputText className="w-full mt-2" id="input1" invalid />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input2">InputMask</label>
            <InputMask
              className="w-full mt-2"
              id="input2"
              mask="99/99/9999"
              value={maskValue}
              onChange={(e: any) => setMaskValue(e.target.value)}
              invalid
            />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input3">AutoComplete</label>
            <CustomAutoComplete />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input4">InputNumber</label>
            <InputNumber
              className="w-full mt-2"
              id="input4"
              defaultValue={0}
              invalid
            />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input5">Calendar</label>
            <Calendar
              id="input5"
              value={calendarValue}
              onChange={(e) => setCalendarValue(e.value)}
              className="w-full mt-2"
              showIcon
              invalid
            />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input6">Dropdown</label>
            <CustomDropdown />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input7">Chips</label>
            <Chips
              id="input7"
              value={chipsValue}
              onChange={(e: any) => setChipsValue(e.value)}
              className="w-full mt-2"
              invalid
            />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input8">MultiSelect</label>
            <CustomMultiSelect />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input9">Password</label>
            <Password
              className="p-invalid w-full mt-2"
              id="input9"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <div className="col-12 lg:col-6 mt-1">
            <label htmlFor="input10">Textarea</label>
            <InputTextarea
              id="input10"
              className="w-full mt-2"
              rows={3}
              invalid
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default InvalidState;
