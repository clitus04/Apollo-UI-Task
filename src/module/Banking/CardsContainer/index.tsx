import { memo } from "react";
import CardLayout from "./CardLayout";
import cardBackground from "../../../assets/card-background.png";
import cardLogo from "../../../assets/visa.svg";
import CurrencyLayout from "./CurrencyLayout";
import RecentCompanyTransactions from "./RecentCompanyTransactions";
import OverviewChart from "./OverviewChart";
import RecentUserTransactions from "./RecentUserTransactions";
import MonthlyPaymentsTable from "./MonthlyPaymentsTable";

function CardsContainer() {
  return (
    <div className="card__container grid">
      <CardLayout
        cardType="Debit Card"
        cardNumber={1234}
        amountType="Balance"
        amount="200"
        expiry="12/24"
        cardBackground={cardBackground}
      />
      <CardLayout
        cardType="Credit Card"
        cardNumber={1234}
        amountType="Debt"
        amount="200"
        expiry="12/24"
        cardLogo={cardLogo}
      />
      <CurrencyLayout
        logo={<i className="pi pi-dollar text-3xl text-blue"></i>}
        title="Primary"
        amount="24,345"
      />
      <CurrencyLayout
        logo={<i className="pi pi-euro text-3xl text-blue"></i>}
        title="Currency"
        amount="24,345"
      />
      <RecentCompanyTransactions />
      <OverviewChart />
      <RecentUserTransactions />
      <MonthlyPaymentsTable />
    </div>
  );
}

export default memo(CardsContainer);
