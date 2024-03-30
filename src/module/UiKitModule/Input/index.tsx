import DropdownInputs from "./DropdownInputs";
import "./index.scss";
import InputGroups from "./InputGroups";
import OptionInputs from "./OptionInputs";
import SliderInputs from "./SliderInputs";
import TextInputs from "./TextInputs";
import ToggleInputs from "./ToggleInputs";

function Input() {
  return (
    <div className="input grid">
      <div className="col-12 lg:col-6">
        <TextInputs />
        <SliderInputs />
      </div>
      <div className="col-12 lg:col-6">
        <OptionInputs />
        <DropdownInputs />
        <ToggleInputs />
      </div>
      <div className="col-12">
        <InputGroups />
      </div>
    </div>
  );
}

export default Input;
