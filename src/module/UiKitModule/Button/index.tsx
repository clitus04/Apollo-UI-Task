import { useCallback, useState } from "react";
import "./index.scss";
import { Card } from "primereact/card";
import { Button as PrimeButton } from "primereact/button";
import ButtonsTemplate from "./ButtonsTemplate";
import { SplitButton } from "primereact/splitbutton";

function Button() {
  const [loaders, setLoaders] = useState({
    loader1: false,
    loader2: false,
    loader3: false,
    loader4: false,
  });

  const buttonClick = useCallback(
    (buttonId: string) => {
      setLoaders({ ...loaders, [buttonId]: true });
      setTimeout(() => {
        setLoaders({ ...loaders, [buttonId]: false });
      }, 2000);
    },
    [loaders]
  );

  const severities = [
    undefined,
    "secondary",
    "success",
    "info",
    "warning",
    "help",
    "danger",
  ];
  const model = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
    {
      label: "Home",
      icon: "pi pi-home",
    },
  ];
  return (
    <div className="button__layout grid">
      <div className="col-12 lg:col-6">
        <Card title="Default">
          <PrimeButton className="mr-2" label="Submit" severity="info" />
          <PrimeButton
            className="mr-2"
            label="Disabled"
            disabled
            severity="info"
          />
          <PrimeButton className="mr-2" label="Link" text severity="info" />
        </Card>
        <Card title="Severities" className="mt-5">
          <ButtonsTemplate showLabel={true} showIcon={false} />
        </Card>
        <Card title="Text" className="mt-5">
          <ButtonsTemplate text showLabel={true} showIcon={false} />
        </Card>
        <Card title="Outlined" className="mt-5">
          <ButtonsTemplate outlined showLabel={true} showIcon={false} />
        </Card>
        <Card title="Button Group" className="mt-5">
          <span className="p-buttonset">
            <PrimeButton icon="pi pi-check" label="Save" security="info" />
            <PrimeButton icon="pi pi-trash" label="Delete" security="info" />
            <PrimeButton icon="pi pi-times" label="Cancel" security="info" />
          </span>
        </Card>
        <Card title="SplitButton" className="mt-5">
          {severities.map((item: any, index: number) => (
            <SplitButton
              key={index}
              severity={item}
              icon="pi pi-plus"
              label="Save"
              className="mr-2 mt-2"
              model={model}
            />
          ))}
        </Card>
      </div>
      <div className="col-12 lg:col-6">
        <Card title="Icons">
          <PrimeButton
            className="mr-2"
            icon="pi pi-star-fill"
            severity="info"
          />
          <PrimeButton
            className="mr-2"
            icon="pi pi-bookmark"
            label="Bookmark"
            severity="info"
          />
          <PrimeButton
            className="mr-2"
            icon="pi pi-bookmark"
            label="Bookmark"
            severity="info"
            iconPos="right"
          />
        </Card>
        <Card title="Raised" className="mt-5">
          <ButtonsTemplate raised showLabel={true} showIcon={false} />
        </Card>
        <Card title="Rounded" className="mt-5">
          <ButtonsTemplate rounded showLabel={true} showIcon={false} />
        </Card>
        <Card title="Rounded Icons" className="mt-5">
          <ButtonsTemplate rounded showIcon={true} showLabel={false} />
        </Card>
        <Card title="Rounded Text" className="mt-5">
          <ButtonsTemplate rounded text showLabel={false} showIcon={true} />
        </Card>
        <Card title="Rounded Outlined" className="mt-5">
          <ButtonsTemplate rounded outlined showLabel={false} showIcon={true} />
        </Card>
        <Card title="Loading" className="mt-5">
          <PrimeButton
            icon="pi pi-search"
            label="Search"
            severity="info"
            className="mr-2"
            loading={loaders.loader1}
            onClick={() => buttonClick("loader1")}
          />
          <PrimeButton
            icon="pi pi-search"
            label="Search"
            severity="info"
            className="mr-2"
            loading={loaders.loader2}
            onClick={() => buttonClick("loader2")}
          />
          <PrimeButton
            icon="pi pi-search"
            severity="info"
            className="mr-2"
            loading={loaders.loader3}
            onClick={() => buttonClick("loader3")}
          />
          <PrimeButton
            label="Search"
            severity="info"
            className="mr-2"
            loading={loaders.loader4}
            onClick={() => buttonClick("loader4")}
          />
        </Card>
      </div>
    </div>
  );
}

export default Button;
