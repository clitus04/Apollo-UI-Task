import { memo } from "react";
import { Chart } from "primereact/chart";
import { overviewData } from "./overview.data";
import { Card } from "primereact/card";

function OverviewChart() {
  return (
    <div className="col-12 lg:col-8 h-35rem">
      <Card className="h-full" title="Revenue Overview">
        <Chart type="line" className="h-full w-full" data={overviewData} />
      </Card>
    </div>
  );
}

export default memo(OverviewChart);
