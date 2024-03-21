import { memo } from "react";
import { Chart } from "primereact/chart";
import { revenueOverviewData } from "./revenueOverview.data";
import { Card } from "primereact/card";

function RevenueOverview() {
  const options: any = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="col-12 lg:col-9 h-35rem">
      <Card className="h-full" title="Revenue Overview">
        <Chart
          type="bar"
          className="h-full w-full"
          data={revenueOverviewData}
          options={options}
        />
      </Card>
    </div>
  );
}

export default memo(RevenueOverview);
