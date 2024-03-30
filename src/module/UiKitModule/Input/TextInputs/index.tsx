import { memo, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import Dropdown from "./Dropdown";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { InputNumber } from "primereact/inputnumber";
import { Chips, ChipsChangeEvent } from "primereact/chips";

function TextInputs() {
  const [calendarValue, setCalendarValue] = useState<Nullable<Date>>(
    new Date()
  );
  const [chipsValue, setChipsValue] = useState<string[]>([]);
  return (
    <Card>
      <div>
        <div className="title mt-0">InputText</div>
        <div className="inputs__container">
          <span>
            <InputText placeholder="Default" />
          </span>
          <span>
            <InputText placeholder="Disabled" disabled />
          </span>
          <span>
            <InputText placeholder="Invalid" invalid />
          </span>
        </div>
        <div className="title">Icons</div>
        <div className="inputs__container">
          <span className="p-input-icon-left">
            <i className="pi pi-user"></i>
            <InputText placeholder="Username" />
          </span>
          <span className="p-input-icon-right">
            <InputText placeholder="Search" />
            <i className="pi pi-search"></i>
          </span>
          <span className="p-input-icon-left p-input-icon-right">
            <i className="pi pi-user"></i>
            <InputText placeholder="Search" />
            <i className="pi pi-search"></i>
          </span>
        </div>
        <div className="title">Float Label</div>
        <div className="w-full">
          <span className="p-float-label w-full">
            <InputText id="float__label__username" className="w-full" />
            <label htmlFor="float__label__username">Username</label>
          </span>
        </div>
        <div className="title">Textarea</div>
        <div className="w-full">
          <InputTextarea
            placeholder="Your Message"
            rows={5}
            className="w-full"
          />
        </div>
        <div className="title">AutoComplete</div>
        <div className="w-full">
          <Dropdown />
        </div>
        <div className="title">Calendar</div>
        <div className="w-full">
          <Calendar
            value={calendarValue}
            onChange={(e) => setCalendarValue(e.value)}
            showIcon
            className="w-full"
          />
        </div>
        <div className="title">InputNumber</div>
        <div className="w-full">
          <InputNumber mode="decimal" showButtons className="w-full" />
        </div>
        <div className="title">Chips</div>
        <div className="w-full">
          <Chips
            value={chipsValue}
            onChange={(e: any) => setChipsValue(e.value)}
          />
        </div>
      </div>
    </Card>
  );
}

export default memo(TextInputs);
