import { memo } from "react";
import { Card } from "primereact/card";
import { recentArticles } from "./recentArticles.data";

function RecentArticles() {
  return (
    <Card className="mt-5">
      <div className="recent__articles">
        <div className="text-3xl font-bold text-black">Recent Articles</div>
        <p className="text-lg">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid">
          {recentArticles &&
            Array.isArray(recentArticles) &&
            recentArticles.map((item: any, index: number) => (
              <Card key={index} className="col-12 lg:col-4">
                <div className="divider"></div>
                <div className="category">{item.category}</div>
                <p className="title">{item.title}</p>
                <p>{item.summary}</p>
                <div className="flex align-items-center">
                  <img
                    className="w-2rem"
                    src={item.profile}
                    alt={item.author}
                  />
                  <div className="ml-2">
                    <span className="text-sm">{item.author}</span>
                    <div>
                      <i className="pi pi-calendar"></i>
                      <span className="text-sm ml-1">{item.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </Card>
  );
}

export default memo(RecentArticles);
