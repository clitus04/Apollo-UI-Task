import "./index.scss";
import { Card } from "primereact/card";
import DetailContent from "./DetailContent";
import { Button } from "primereact/button";
import Comments from "./Comments";

function Detail() {
  return (
    <div className="detail">
      <Card>
        <div className="flex align-items-center justify-content-between">
          <div>
            <span>How To Get Started Tutorial</span>
            <div className="mt-4 flex">
              <span className="mr-4 p-2 flex align-items-center border-1 border-round-sm">
                <i className="pi pi-clock"></i>
                <span className="ml-2">2d ago</span>
              </span>
              <span className="mr-4 p-2 flex align-items-center border-1 border-round-sm">
                <i className="pi pi-comments"></i>
                <span className="ml-2">24</span>
              </span>
              <span className="mr-4 p-2 flex align-items-center border-1 border-round-sm">
                <i className="pi pi-eye"></i>
                <span className="ml-2">124</span>
              </span>
            </div>
          </div>
          <div className="flex flex-column align-items-center">
            <img
              className="w-3rem mb-2"
              src="https://apollo.primereact.org/demo/images/avatar/circle/avatar-f-2@2x.png"
              alt=""
            />
            <span className="font-bold">Jane Cooper</span>
          </div>
        </div>
        <DetailContent />
        <div className="flex justify-content-between">
          <div>
            <Button
              severity="info"
              className="mr-3"
              icon="pi pi-twitter"
              label="Twitter"
            />
            <Button
              severity="info"
              className="mr-3"
              icon="pi pi-facebook"
              label="Facebook"
            />
          </div>
          <Button severity="info" icon="pi pi-pencil" label="Edit Post" />
        </div>
        <Comments />
      </Card>
    </div>
  );
}

export default Detail;
