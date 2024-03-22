import { memo } from "react";
import { DataView } from "primereact/dataview";
import { transactions } from "./recentTransactions.data";
import { Card } from "primereact/card";

interface Transactions {
  name: string;
  date: string;
  image: string;
  price: string;
}

function RecentCompanyTransactions() {
  const itemTemplate = (transaction: Transactions, index: number) => {
    return (
      <div
        className="flex flex-wrap justify-content-between align-items-center w-full px-4 mb-4"
        key={index}
      >
        <div className="flex align-items-center">
          <img
            className="w-3rem"
            src={`https://apollo.primereact.org/demo/images/banking/${transaction.image}`}
            alt={transaction.name}
          />
          <div className="ml-3">
            <div className="text-md font-bold mb-2">{transaction.name}</div>
            <span>{transaction.date}</span>
          </div>
        </div>
        <span className="text-md font-semibold">${transaction.price}</span>
      </div>
    );
  };

  const listTemplate = (items: Transactions[]) => {
    if (!items || items.length === 0) return null;

    let list: any = items.map((transaction, index) => {
      return itemTemplate(transaction, index);
    });

    return list;
  };

  return (
    <div className="col-12 lg:col-4">
      <Card title="Recent Transactions" className="h-full w-full">
        <DataView value={transactions} listTemplate={listTemplate} />
      </Card>
    </div>
  );
}

export default memo(RecentCompanyTransactions);
