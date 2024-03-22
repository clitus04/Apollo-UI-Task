import { memo } from "react";
import { Card } from "primereact/card";

interface Props {
  cardType: "Debit Card" | "Credit Card";
  cardLogo?: string;
  cardBackground?: string;
  amountType: string;
  amount: string;
  cardNumber: number;
  expiry: string;
}

function CardLayout(props: Props) {
  const {
    cardType,
    cardLogo,
    cardBackground,
    amountType,
    amount,
    cardNumber,
    expiry,
  } = props;

  return (
    <div className="col-12 md:col-6 lg:col-4 h-15rem">
      <Card
        style={{
          backgroundImage: `${
            cardBackground ? `url(${cardBackground})` : "#fff"
          }`,
        }}
        className="h-full"
      >
        <div
          className={`flex flex-column ${cardBackground ? "text-white" : ""}`}
        >
          <div className="flex justify-content-between align-items-center mb-4">
            <span className="text-lg font-bold">{cardType}</span>
            {cardLogo && <img src={cardLogo} alt="logo" className="w-2" />}
          </div>
          <span className="text-sm font-bold mb-1">{amountType}</span>
          <span
            className={`text-2xl font-bold ${
              cardBackground ? "" : "text-blue"
            }`}
          >{`$${amount}`}</span>
          <div className="mt-4 flex justify-content-between">
            <span>{`**** **** **** ${cardNumber}`}</span>
            <span>{expiry}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default memo(CardLayout);
