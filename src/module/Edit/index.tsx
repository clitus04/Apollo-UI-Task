import "./index.scss";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Editor } from "primereact/editor";
import { FileUpload } from "primereact/fileupload";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

function Edit() {
  const emptyTemplate = (
    <div className="template__messsage">
      <i className="pi pi-file"></i>
      <span>Drop or select a cover image</span>
    </div>
  );
  return (
    <Card>
      <div className="edit">
        <div className="title">Create a new post</div>
        <div className="grid">
          <div className="col-12 lg:col-8">
            <FileUpload emptyTemplate={emptyTemplate} />
            <InputText placeholder="Title" className="w-full" />
            <InputTextarea
              placeholder="Content"
              rows={5}
              autoResize
              className="w-full mt-4"
            />
            <Editor className="mt-4 h-15rem" />
          </div>
          <div className="col-12 lg:col-4">
            <Panel header="Publish">
              <div className="status__card">
                <div>
                  <span className="font-bold mr-2">Status:</span>
                  <span>Draft</span>
                </div>
                <i className="pi pi-pencil"></i>
              </div>
              <div className="status__card">
                <div>
                  <span className="font-bold mr-2">Visibilty:</span>
                  <span>Private</span>
                </div>
                <i className="pi pi-pencil"></i>
              </div>
            </Panel>
            <Panel header="Tags" className="mt-4">
              <span className="tag">Software</span>
              <span className="tag">Web</span>
            </Panel>
            <Panel header="Meta" className="mt-4">
              <InputText placeholder="Title" className="w-full" />
              <InputTextarea
                placeholder="Description"
                rows={5}
                autoResize
                className="w-full mt-4"
              />
            </Panel>
            <div className="grid justify-content-between px-4 mt-4">
              <Button
                className="col-12 md:col-5 my-2"
                label="Discard"
                severity="danger"
                icon="pi pi-trash"
                outlined
              />
              <Button
                className="col-12 md:col-5 my-2"
                label="Publish"
                icon="pi pi-check"
                severity="info"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Edit;
