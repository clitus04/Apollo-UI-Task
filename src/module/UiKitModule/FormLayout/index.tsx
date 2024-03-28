import AdvancedForm from "./AdvancedForm";
import HelpTextForm from "./HelpTextForm";
import HorizontalForm from "./HorizontalForm";
import "./index.scss";
import InlineForm from "./InlineForm";
import VertiacalForm from "./VerticalForm";
import VertiacalGridForm from "./VerticalGridForm";

function FormLayout() {
  return (
    <div className="form__layout grid">
      <div className="col-12 lg:col-6">
        <VertiacalForm />
        <VertiacalGridForm />
      </div>
      <div className="col-12 lg:col-6">
        <HorizontalForm />
        <InlineForm />
        <HelpTextForm />
      </div>
      <div className="col-12">
        <AdvancedForm />
      </div>
    </div>
  );
}

export default FormLayout;
