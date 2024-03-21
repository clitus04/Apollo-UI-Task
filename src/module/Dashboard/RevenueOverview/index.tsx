import { memo } from "react";
import {
  CategoryScale,
  LinearScale,
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { revenueOverviewData } from "./revenueOverview.data";
import { Card } from "primereact/card";

function RevenueOverview() {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

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
        <Bar
          className="h-full w-full"
          data={revenueOverviewData}
          options={options}
        />
      </Card>
    </div>
  );
}

export default memo(RevenueOverview);
