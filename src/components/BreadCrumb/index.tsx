import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface Items {
  label: string;
  url: string;
}

interface Props {
  items: Items[];
  seperator: string;
}

function BreadCrum(props: Props) {
  const { items, seperator } = props;
  const navigate = useNavigate();

  return (
    <div className="flex">
      {items &&
        Array.isArray(items) &&
        items.map((item: any, index: number) => {
          return (
            <>
              <span
                className="cursor-pointer"
                onClick={() => navigate(item?.url)}
              >
                {item?.label}
              </span>
              {index !== items.length - 1 && (
                <span className="mx-2">{seperator}</span>
              )}
            </>
          );
        })}
    </div>
  );
}

export default memo(BreadCrum);
