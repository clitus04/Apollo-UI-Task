import { memo } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

function HelpTextForm() {
  return (
    <Card title="Help Text" className="mt-5">
      <div className="flex flex-column">
        <label htmlFor="help__text__input" className="text-sm">
          Username
        </label>
        <InputText
          id="help__text__input"
          aria-describedby="help__text__input__helper"
          className="my-2"
        />
        <small id="help__text__input__helper">
          Enter your username to reset your password.
        </small>
      </div>
    </Card>
  );
}

export default memo(HelpTextForm);
