import { memo } from "react";
import { Button } from "primereact/button";

interface Props {
  showLabel: boolean;
  showIcon?: boolean;
  raised?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  text?: boolean;
}

function ButtonsTemplate(props: Props) {
  const {
    showLabel = true,
    showIcon = false,
    raised = false,
    rounded = false,
    outlined = false,
    text = false,
  } = props;

  return (
    <>
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-check"}
        label={showLabel ? "Primary" : ""}
        rounded={rounded}
        outlined={outlined}
        raised={raised}
        text={text}
      />
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-bookmark"}
        label={showLabel ? "Secondary" : ""}
        severity="secondary"
        rounded={rounded}
        raised={raised}
        outlined={outlined}
        text={text}
      />
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-search"}
        label={showLabel ? "Success" : ""}
        severity="success"
        rounded={rounded}
        raised={raised}
        outlined={outlined}
        text={text}
      />
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-user"}
        label={showLabel ? "Info" : ""}
        severity="info"
        rounded={rounded}
        raised={raised}
        outlined={outlined}
        text={text}
      />
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-bell"}
        label={showLabel ? "Warning" : ""}
        severity="warning"
        rounded={rounded}
        raised={raised}
        outlined={outlined}
        text={text}
      />
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-heart"}
        label={showLabel ? "Help" : ""}
        severity="help"
        rounded={rounded}
        raised={raised}
        outlined={outlined}
        text={text}
      />
      <Button
        className="mr-2 mt-2"
        icon={showIcon && "pi pi-times"}
        label={showLabel ? "Danger" : ""}
        severity="danger"
        rounded={rounded}
        raised={raised}
        outlined={outlined}
        text={text}
      />
    </>
  );
}

export default memo(ButtonsTemplate);
