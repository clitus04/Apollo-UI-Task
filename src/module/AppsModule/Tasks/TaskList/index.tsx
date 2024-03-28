import { Dispatch, SetStateAction, memo, useCallback, useRef } from "react";
import { Task, Member } from "../tasks.data";
import { Checkbox } from "primereact/checkbox";
import { AvatarGroup } from "primereact/avatargroup";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

interface Props {
  title: string;
  status: boolean;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

function TaskList(props: Props) {
  const { status, tasks, title, setTasks } = props;
  const menuRef = useRef<Menu>(null);

  const model = [
    {
      label: "Edit",
      icon: "pi pi-pencil",
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
    },
  ];

  const changeStatus = useCallback(
    (id: number) => {
      const updatedTask = tasks.map((item: Task) =>
        item.id === id ? { ...item, completed: !status } : item
      );
      setTasks(updatedTask);
    },
    [tasks]
  );

  return (
    <div>
      <div className="py-4 text-lg text-black font-bold border-bottom-1 surface-border">
        {title}
      </div>
      <ul className="list-none p-0">
        {tasks &&
          tasks
            .filter((item: Task) => item.completed === status)
            .map((item: Task) => (
              <li
                key={item.id}
                className="my-1 py-2 border-bottom-1 surface-border flex align-items-center"
              >
                <div className="flex-1">
                  <Checkbox
                    checked={status}
                    onChange={() => changeStatus(item.id)}
                  />
                  <span
                    className={`ml-2 text-black ${status && "line-through"}`}
                  >
                    {item.name}
                  </span>
                </div>
                <div className="flex-1 flex justify-content-between align-items-center">
                  <div className="flex align-items-center">
                    <span className="text-sm ml-2 flex align-items-center">
                      <i className="pi pi-comment"></i>
                      <span className="ml-1 font-bold text-black">
                        {item.comments}
                      </span>
                    </span>
                    <span className="text-sm ml-2 flex align-items-center">
                      <i className="pi pi-paperclip"></i>
                      <span className="ml-1 font-bold text-black">
                        {item.attachments}
                      </span>
                    </span>
                    <span className="text-sm ml-2 flex align-items-center">
                      <i className="pi pi-clock"></i>
                      <span className="ml-1 font-bold text-black">
                        {item.date}
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-content-between align-items-center">
                    <AvatarGroup>
                      {item.members.map((member: Member) => (
                        <Avatar
                          image={member.image}
                          shape="circle"
                          size="normal"
                        />
                      ))}
                    </AvatarGroup>
                    <Button
                      className="ml-3"
                      icon="pi pi-ellipsis-v"
                      text
                      rounded
                      aria-controls={`menu_${item.id}`}
                      onClick={(e) => menuRef.current?.toggle(e)}
                    />
                    <Menu
                      model={model}
                      ref={menuRef}
                      popup
                      id={`menu_${item.id}`}
                    />
                  </div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default memo(TaskList);
