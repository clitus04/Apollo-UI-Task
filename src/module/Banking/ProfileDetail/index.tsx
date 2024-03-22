import { memo } from "react";
import { Button } from "primereact/button";
import profile from "../../../assets/tony.jpg";

function ProfileDetail() {
  return (
    <div className="flex align-items-center justify-content-between mb-5">
      <div className="flex align-items-center">
        <img className="w-4rem h-4rem border-circle" src={profile} alt="tony" />
        <div className="ml-4">
          <div className="text-2xl font-bold">Welcome Stark</div>
          <span className="text-sm">
            Your last login was on 04/05/2022 at 10:24 am
          </span>
        </div>
      </div>
      <div>
        <Button
          className="mx-1"
          icon="pi pi-arrows-h"
          outlined
          rounded
          severity="help"
          tooltip="Exchange"
          tooltipOptions={{
            position: "bottom",
          }}
        />
        <Button
          className="mx-1"
          icon="pi pi-download"
          outlined
          rounded
          severity="help"
          tooltip="Withdraw"
          tooltipOptions={{
            position: "bottom",
          }}
        />
        <Button
          className="mx-1"
          icon="pi pi-send"
          rounded
          severity="help"
          tooltip="Send"
          tooltipOptions={{
            position: "bottom",
          }}
        />
      </div>
    </div>
  );
}

export default memo(ProfileDetail);
