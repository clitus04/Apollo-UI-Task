import { memo } from "react";
import { Chart } from "primereact/chart";
import { categoryOverviewData } from "./categoryOverview.data";
import { Card } from "primereact/card";

function CategoryOverview() {
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

  return (
    <div className="col-12 lg:col-3 h-35rem">
      <Card className="h-full" title="Sales by Category">
        <Chart
          className="flex justify-content-center"
          type="pie"
          data={categoryOverviewData}
          options={options}
        />
      </Card>
    </div>
  );
}

export default memo(CategoryOverview);
