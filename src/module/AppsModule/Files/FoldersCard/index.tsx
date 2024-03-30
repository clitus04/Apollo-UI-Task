import { memo } from "react";
import { Card } from "primereact/card";
import { folders, Folders } from "../files.data";

function FoldersCard() {
  return (
    <div className="col-12">
      <Card>
        <div className="font-bold text-black text-lg mb-3">Folders</div>
        <div className="grid">
          {folders &&
            folders.map((item: Folders, index: number) => (
              <div className="col-12 md:col-6 xl:col-4" key={index}>
                <div className="border__light flex align-items-center justify-content-between p-3">
                  <div className="flex align-items-center">
                    <i className={`text-xl text-black ${item.icon}`}></i>
                    <span className="text-black font-bold ml-2">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-bold text-black">{item.count}</span>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}

export default memo(FoldersCard);
