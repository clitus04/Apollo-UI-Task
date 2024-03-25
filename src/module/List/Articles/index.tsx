import { memo, useCallback, useState } from "react";
import "./index.scss";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Toolbar } from "primereact/toolbar";
import { articles } from "./articles.data";
import { Paginator } from "primereact/paginator";

function Articles() {
  const [first, setFirst] = useState(0);
  const options = [{ name: "Most Shared" }, { name: "Most Commented" }];
  const startContent = <div className="text-lg font-bold">Articles</div>;
  const endContent = (
    <Dropdown
      options={options}
      optionLabel="name"
      placeholder="Sort By"
      className="w-15rem"
    />
  );

  const headerContent = useCallback(
    (url: string) => <img className="" src={url} alt="" />,
    []
  );

  const onPageChange = useCallback((event: any) => {
    setFirst(event.first);
  }, []);

  return (
    <Card>
      <div className="articles">
        <Toolbar start={startContent} end={endContent} />
        <div className="grid mt-4">
          {articles &&
            Array.isArray(articles) &&
            articles.slice(first, first + 3).map((item: any, index: number) => (
              <Card
                key={index}
                className="col-12 lg:col-4"
                header={headerContent(item.image)}
              >
                <div className="relative mb-3">
                  <span className="font-bold">{item.title}</span>
                  <img className="profile" src={item.profile} alt="" />
                </div>
                <div>{item.summary}</div>
                <div className="flex align-items-center justify-content-between mt-4">
                  <div>
                    <i className="pi pi-comment"></i>
                    <span className="ml-1">{item.comments}</span>
                  </div>
                  <div>
                    <i className="pi pi-share-alt"></i>
                    <span className="ml-1">{item.shares}</span>
                  </div>
                  <div>
                    <i className="pi pi-clock"></i>
                    <span className="ml-1">{item.date}</span>
                  </div>
                </div>
              </Card>
            ))}
        </div>
        <Paginator
          first={first}
          rows={3}
          totalRecords={articles.length}
          onPageChange={onPageChange}
        />
      </div>
    </Card>
  );
}

export default memo(Articles);
