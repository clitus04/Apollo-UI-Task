import { memo } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";

interface Props {
  value: number;
  totalValue: number;
}

function AccountStorage(props: Props) {
  const { value, totalValue } = props;
  const data = {
    datasets: [
      {
        data: [value, totalValue - value],
        backgroundColor: ["#4547A9", "#BCBDF9"],
      },
    ],
  };

  const options = {
    cutout: "85%",
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="col-12">
      <Card className="border-round-lg">
        <div className="text-lg font-bold text-black">Account Storage</div>
        <div className="chart__container">
          <Chart
            className="w-10"
            type="doughnut"
            data={data}
            options={options}
          />
          <div className="data__label">
            <span>Free Space</span>
            <span>{`${value}GB / ${totalValue}GB`}</span>
          </div>
        </div>
        <div className="flex justify-content-between gap-3">
          <Button
            icon="pi pi-search"
            outlined
            label="Details"
            severity="info"
          />
          <Button icon="pi pi-upload" label="Upgrade" severity="info" />
        </div>
      </Card>
    </div>
  );
}

export default memo(AccountStorage);
