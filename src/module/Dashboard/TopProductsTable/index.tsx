import { memo } from "react";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { products } from "./topProducts.data";
import { Card } from "primereact/card";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

function TopProductsTable() {
  const itemTemplate = (product: Product, index: number) => {
    return (
      <div
        className="flex justify-content-between align-items-center w-full px-4 mb-3"
        key={index}
      >
        <div className="flex align-items-center">
          <img
            className="w-5rem"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="ml-3">
            <span className="text-md">{product.name}</span>
            <Rating
              className="mt-1"
              value={product.rating}
              readOnly
              cancel={false}
            ></Rating>
          </div>
        </div>
        <span className="text-md font-semibold">${product.price}</span>
      </div>
    );
  };

  const listTemplate = (items: Product[]) => {
    if (!items || items.length === 0) return null;

    let list: any = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return list;
  };

  return (
    <div className="col-12 lg:col-4 dataview">
      <Card title="Top Products" className="h-full w-full">
        <DataView value={products} listTemplate={listTemplate} />
      </Card>
    </div>
  );
}

export default memo(TopProductsTable);
