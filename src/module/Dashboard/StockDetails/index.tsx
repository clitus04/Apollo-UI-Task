import { memo } from "react";
import { salesDetails } from "./stockdetails.data";
import { Card } from "primereact/card";
import "./index.scss";

function StockDetails() {
  return (
    <>
      {salesDetails &&
        Array.isArray(salesDetails) &&
        salesDetails.map((item: any) => {
          return (
            <div className="col-12 md:col-6 lg:col-3">
              <Card>
                <div className="flex align-items-center justify-content-between w-full px-2">
                  <div className="flex flex-column">
                    <span className="font-bold mb-4">{item.title}</span>
                    <span className="font-bold text-2xl">{item.value}</span>
                    <div
                      className={` mt-2 ${item.isGrowth ? "growth" : "loss"}`}
                    >
                      <span>{`+${item.growthValue}%`}</span>
                      <i
                        className={`text-xs ml-1 pi ${
                          item.isGrowth ? "pi-arrow-up" : "pi-arrow-down"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div className="w-7">
                    <img src={item.chart} alt="" className="w-full" />
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
    </>
  );
}

export default memo(StockDetails);
