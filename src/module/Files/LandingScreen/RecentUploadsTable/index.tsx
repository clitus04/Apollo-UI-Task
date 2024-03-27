import { memo, useCallback } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { uploads } from "../../files.data";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function RecentUploads() {
  const renderIcons = useCallback(() => {
    return (
      <div className="actions">
        <Button icon="pi pi-times" rounded text />
        <Button icon="pi pi-search" rounded text />
      </div>
    );
  }, []);
  return (
    <div className="col-12">
      <Card>
        <div className="flex align-items-center justify-content-between mb-4">
          <span className="text-black text-lg font-bold">Recent Sales</span>
        </div>
        <DataTable value={uploads} paginator rows={8}>
          <Column field="name" header="Name" sortable />
          <Column field="date" header="Date" sortable />
          <Column field="fileSize" header="File Size" sortable />
          <Column body={renderIcons} />
        </DataTable>
      </Card>
    </div>
  );
}

export default memo(RecentUploads);
