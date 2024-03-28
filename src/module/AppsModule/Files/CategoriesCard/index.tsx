import { memo } from "react";
import { Card } from "primereact/card";
import { categories, Categories } from "../files.data";

function CategoriesCard() {
  return (
    <div className="col-12">
      <Card>
        <div className="font-bold text-black text-lg">Categories</div>
        {categories &&
          categories.map((item: Categories, index: number) => (
            <div key={index} className="row">
              <div className="flex align-items-center">
                <i className={item.icon}></i>
                <span className="text-md ml-2 font-bold">{item.name}</span>
              </div>
              <span className="font-bold text-black">{item.count}</span>
            </div>
          ))}
      </Card>
    </div>
  );
}

export default memo(CategoriesCard);
