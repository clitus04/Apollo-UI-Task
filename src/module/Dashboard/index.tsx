import "./index.scss";
import CategoryOverview from "./CategoryOverview";
import RevenueOverview from "./RevenueOverview";
import StockDetails from "./StockDetails";

function Dashboard() {
  return (
    <div className="dashboard grid">
      <StockDetails />
      <RevenueOverview />
      <CategoryOverview />
    </div>
  );
}

export default Dashboard;
