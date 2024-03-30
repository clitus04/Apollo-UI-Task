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

function FloatLabel() {
  const [calendarValue, setCalendarValue] = useState<Nullable<Date>>(null);
  const [chipsValue, setChipsValue] = useState<string[]>([]);
  const [maskValue, setMaskValue] = useState<string | undefined>();

  return (
    <div className="float__label">
      <Card>
        <div className="title">Float Label</div>
        <p>
          All input text components support floating labels by adding (
          <span className="highlighted">.p-float-label</span>) to wrapper class.
        </p>
        <div className="grid">
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <InputText className="w-full" id="input1" />
              <label htmlFor="input1">InputText</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <CustomAutoComplete />
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <div className="p-float-label p-input-icon-left w-full">
              <i className="pi pi-search"></i>
              <InputText className="w-full" id="input3" />
              <label htmlFor="input3">Left Icon</label>
            </div>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <div className="p-float-label p-input-icon-right w-full">
              <i className="pi pi-spinner pi-spin"></i>
              <InputText className="w-full" id="input4" />
              <label htmlFor="input4">Right Icon</label>
            </div>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <Calendar
                id="input5"
                value={calendarValue}
                onChange={(e) => setCalendarValue(e.value)}
                className="w-full"
              />
              <label htmlFor="input5">Calendar</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <Chips
                id="input5"
                value={chipsValue}
                onChange={(e: any) => setChipsValue(e.value)}
                className="w-full"
              />
              <label htmlFor="input5">Chips</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <InputMask
                className="w-full"
                id="input6"
                mask="99/99/9999"
                value={maskValue}
                onChange={(e: any) => setMaskValue(e.target.value)}
              />
              <label htmlFor="input6">InputMask</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <InputNumber className="w-full" id="input7" />
              <label htmlFor="input7">InputNumber</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText className="w-full" id="input8" />
                <label htmlFor="input8">InputGroup</label>
              </span>
            </div>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <CustomDropdown />
              <label htmlFor="input9">Dropdown</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <CustomMultiSelect />
              <label htmlFor="input10">MultiSelect</label>
            </span>
          </div>
          <div className="col-12 lg:col-4 mt-2">
            <span className="p-float-label">
              <InputTextarea id="input11" className="w-full" rows={3} />
              <label htmlFor="input11">Textarea</label>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FloatLabel;
