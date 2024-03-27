import { memo } from "react";
import { Card } from "primereact/card";
import { FileUpload } from "primereact/fileupload";

function UploadCard() {
  const emptyTemplate = (
    <div className="template__messsage">
      <i className="pi pi-upload"></i>
      <span className="font-bold text-black">Upload Files</span>
      <span className="text-sm mt-2">Drop or Select Files</span>
    </div>
  );
  return (
    <div className="col-12">
      <Card>
        <FileUpload emptyTemplate={emptyTemplate} />
      </Card>
    </div>
  );
}

export default memo(UploadCard);
