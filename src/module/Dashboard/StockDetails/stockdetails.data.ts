import SalesChart from "../../../assets/charts/SalesChart.jpeg";
import VisitorsChart from "../../../assets/charts/VisitorsChart.jpeg";
import RevenueChart from "../../../assets/charts/RevenueChart.jpeg";
import StockChart from "../../../assets/charts/StockChart.jpeg";

export const salesDetails = [
  {
    id: 0,
    title: "Sales",
    value: "120",
    isGrowth: true,
    growthValue: 12,
    chart: SalesChart,
  },
  {
    id: 1,
    title: "Revenue",
    value: "$450",
    isGrowth: true,
    growthValue: 20,
    chart: RevenueChart,
  },
  {
    id: 0,
    title: "Visitors",
    value: "360",
    isGrowth: false,
    growthValue: 24,
    chart: VisitorsChart,
  },
  {
    id: 0,
    title: "Stock",
    value: "164",
    isGrowth: true,
    growthValue: 30,
    chart: StockChart,
  },
];
