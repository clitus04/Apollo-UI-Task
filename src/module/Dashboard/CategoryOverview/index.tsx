import { memo } from "react";
import {
  CategoryScale,
  ArcElement,
  Chart,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { categoryOverviewData } from "./categoryOverview.data";
import { Card } from "primereact/card";

function CategoryOverview() {
  Chart.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

  const options: any = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="col-12 lg:col-3 h-35rem">
      <Card className="h-full" title="Sales by Category">
        <Pie
          className="h-full w-full mt-8"
          data={categoryOverviewData}
          options={options}
        />
      </Card>
    </div>
  );
}

export default memo(CategoryOverview);
