import { memo } from "react";
import { Chart } from "primereact/chart";
import { revenueOverviewData } from "./revenueOverview.data";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

function RevenueOverview() {
  const options: any = {
    plugins: {
      legend: {
        position: "bottom",
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  const dropdownOptions = [
    {
      name: "Last Week",
    },
    {
      name: "This Week",
    },
  ];

  return (
    <div className="col-12 lg:col-9 h-35rem">
      <Card className="h-full">
        <div className="flex align-items-center justify-content-between">
          <span className="title">Revenue Overview</span>
          <Dropdown
            options={dropdownOptions}
            optionLabel="name"
            value={dropdownOptions[0]}
          />
        </div>
        <Chart
          type="bar"
          className="h-full w-full mt-4"
          data={revenueOverviewData}
          options={options}
        />
      </Card>
    </div>
  );
}

export default memo(RevenueOverview);
