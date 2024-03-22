import { Card } from "primereact/card";
import { ReactNode, memo } from "react";

interface Props {
  logo?: ReactNode | string;
  title?: string;
  amount?: string;
}

function CurrencyLayout(props: Props) {
  const { logo, title, amount } = props;

  return (
    <div className="col-12 md:col-6 lg:col-2 h-15rem">
      <Card className="h-full">
        <div className="flex flex-column align-items-center">
          <span className="mb-5">{logo}</span>
          <span className="mb-5 font-bold">{title}</span>
          <span className="font-bold text-blue text-2xl">{`$${amount}`}</span>
        </div>
      </Card>
    </div>
  );
}

export default memo(CurrencyLayout);
