import "./index.scss";
import Articles from "./Articles";
import RecentArticles from "./RecentArticles";

interface Props {}

function List(props: Props) {
  const {} = props;

  return (
    <div className="list">
      <Articles />
      <RecentArticles />
    </div>
  );
}

export default List;
