import { Card } from "primereact/card";

function Detail() {
  return (
    <div className="detail">
      <Card>
        <div className="flex align-items-center justify-content-between">
          <div>
            <span>How To Get Started Tutorial</span>
            <div className="mt-4">
              <span className="mr-4 p-2 flex align-items-center">
                <i className="pi pi-clock"></i>
                <span>2d ago</span>
              </span>
              <span className="mr-4 p-2 flex align-items-center">
                <i className="pi pi-comments"></i>
                <span>24</span>
              </span>
              <span className="mr-4 p-2 flex align-items-center">
                <i className="pi pi-eye"></i>
                <span>124</span>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Detail;
