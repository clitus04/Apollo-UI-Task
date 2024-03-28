import { memo, useCallback } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { payments } from "./monthlyPayments.data";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

function TableLayout() {
  const getSeverity = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "success";

      case "PENDING":
        return "warning";

      default:
        return null;
    }
  };

  const renderTag = useCallback((rowData: any) => {
    return (
      <Tag severity={getSeverity(rowData.status)} value={rowData.status}></Tag>
    );
  }, []);
  return (
    <div className="col-12 lg:col-6 dataview">
      <Card title="Recent Sales" className="h-full">
        <DataTable value={payments}>
          <Column field="name" header="Name" />
          <Column field="price" header="Price" />
          <Column field="date" header="Date" />
          <Column field="status" header="Status" body={renderTag} />
        </DataTable>
      </Card>
    </div>
  );
}

export default memo(TableLayout);
