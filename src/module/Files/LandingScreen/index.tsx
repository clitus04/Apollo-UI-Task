import "./index.scss";
import StorageCard from "./StorageCard";
import { storageDetails, StorageDetails } from "../files.data";
import AccountStorage from "./AccountStorage";
import CategoriesCard from "./CategoriesCard";
import UploadCard from "./UploadCard";
import FoldersCard from "./FoldersCard";
import RecentUploadsTable from "./RecentUploadsTable";

function LandingScreen() {
  return (
    <div className="files grid">
      {storageDetails &&
        storageDetails.map((item: StorageDetails, index: number) => (
          <StorageCard {...item} key={index} />
        ))}
      <div className="col-12 md:col-5 xl:col-3 p-0">
        <AccountStorage value={75} totalValue={100} />
        <CategoriesCard />
        <UploadCard />
      </div>
      <div className="col-12 md:col-7 xl:col-9 p-0">
        <FoldersCard />
        <RecentUploadsTable />
      </div>
    </div>
  );
}

export default LandingScreen;
