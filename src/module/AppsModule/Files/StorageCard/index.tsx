import { memo, useCallback, useRef } from "react";
import { Card } from "primereact/card";
import { Menu } from "primereact/menu";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";

interface Props {
  files: number;
  progress: number;
  storage: number;
  title: string;
}

function StorageCard(props: Props) {
  const { files, progress, storage, title } = props;
  const menuRef = useRef<Menu>(null);

  const model = [
    {
      label: "View",
      icon: "pi pi-search",
    },
    {
      label: "Refresh",
      icon: "pi pi-refresh",
    },
  ];

  const toggleMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (menuRef.current) {
      menuRef.current.toggle(e);
    }
  }, []);

  return (
    <div className="col-12 lg:col-3">
      <Card className="border-round-lg">
        <div className="flex align-items-center justify-content-between">
          <span className="text-lg text-black font-bold">{title}</span>
          <Button icon="pi pi-ellipsis-v" text rounded onClick={toggleMenu} />
        </div>
        <Menu model={model} popup ref={menuRef} />
        <ProgressBar value={progress} />
        <div className="flex align-items-center justify-content-between">
          <span className="text-black">{`${files} Files`}</span>
          <span className="text-black">{`${storage}GB`}</span>
        </div>
      </Card>
    </div>
  );
}

export default memo(StorageCard);
