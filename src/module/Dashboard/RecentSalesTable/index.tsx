import { memo, useCallback } from "react";
import "./index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { recentSales } from "./recentSales.data";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function TableLayout() {
  const getSeverity = (status: string) => {
    switch (status) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

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
    <div className="col-12 lg:col-8 dataview">
      <Card className="h-full">
        <div className="flex align-items-center justify-content-between mb-4">
          <span className="title">Recent Sales</span>
          <div className="flex align-items-center">
            <div className="search">
              <i className="pi pi-search"></i>
              <InputText placeholder="Search" />
            </div>
            <Button icon="pi pi-upload" className="ml-2" rounded />
          </div>
        </div>
        <DataTable value={recentSales} paginator rows={5}>
          <Column field="name" header="Name" sortable />
          <Column field="category" header="category" sortable />
          <Column field="price" header="Price" sortable />
          <Column field="status" header="Status" sortable body={renderTag} />
        </DataTable>
      </Card>
    </div>
  );
}

export default memo(TableLayout);
