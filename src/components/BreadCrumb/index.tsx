import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes.data";

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
  const handleNavigate = useCallback((label: string) => {
    const url = routes.find((item: any) => item.name === label)?.path as string;
    navigate(url);
  }, []);

  return (
    <div className="flex">
      {items &&
        Array.isArray(items) &&
        items.map((item: any, index: number) => {
          return (
            <>
              <span
                className="cursor-pointer capitalize text-md"
                onClick={() => handleNavigate(item?.label)}
              >
                {item?.label}
              </span>
              {index !== items.length - 1 && (
                <span className="mx-3 text-md">{seperator}</span>
              )}
            </>
          );
        })}
    </div>
  );
}

export default memo(BreadCrum);
