import "./index.scss";
import CategoryOverview from "./CategoryOverview";
import RevenueOverview from "./RevenueOverview";
import StockDetails from "./StockDetails";
import RecentSalesTable from "./RecentSalesTable";
import TopProductsTable from "./TopProductsTable";

function Dashboard() {
  return (
    <div className="dashboard grid">
      <StockDetails />
      <RevenueOverview />
      <CategoryOverview />
      <RecentSalesTable />
      <TopProductsTable />
    </div>
  );
}

export default Dashboard;
