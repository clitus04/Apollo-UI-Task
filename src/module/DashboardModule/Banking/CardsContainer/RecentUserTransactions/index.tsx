import { memo } from "react";
import { DataView } from "primereact/dataview";
import { transactions } from "./recentTransactions.data";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface Transactions {
  name: string;
  date: string;
  image: string;
  price: string;
}

function RecentUserTransactions() {
  const itemTemplate = (transaction: Transactions, index: number) => {
    return (
      <div className="col-12 lg:col-6 p-2" key={index}>
        <div className="flex align-items-center border-1 p-1 border-round">
          <img
            className="w-3rem"
            src={`https://apollo.primereact.org/demo/images/avatar/circle/${transaction.image}`}
            alt={transaction.name}
          />
          <div className="ml-3">
            <div className="text-md font-bold mb-2">{transaction.name}</div>
            <span>{transaction.date}</span>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate: any = (items: Transactions[]) => {
    if (!items || items.length === 0) return null;

    let list: any = items.map((transaction, index) => {
      return itemTemplate(transaction, index);
    });

    return <div className="grid">{list}</div>;
  };

  return (
    <div className="col-12 lg:col-6">
      <Card title="Recent Transactions" className="h-full w-full">
        <DataView
          value={transactions}
          listTemplate={listTemplate}
          layout={"grid"}
          className="mt-4"
        />
        <div className="grid justify-content-between mt-4 py-4">
          <InputText className="col-8" placeholder="$0.00" />
          <Button className="col-3 flex justify-content-center" severity="info">
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default memo(RecentUserTransactions);
