import { useCallback, useEffect, useState } from "react";
import "./index.scss";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { defaultTask, Task, members, Member } from "../tasks.data";
import TaskList from "./TaskList";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Calendar } from "primereact/calendar";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

function TaskDashboard() {
  const [tasks, setTasks] = useState<Task[]>(defaultTask);
  const [visible, setVisible] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);

  const itemTemplate = useCallback(
    (option: Member) => (
      <div className="flex align-items-center">
        <img className="w-2rem" src={option.image} alt={option.name} />
        <span className="text-sm text-black font-bold ml-2">{option.name}</span>
      </div>
    ),
    []
  );

  const filterMember = useCallback(
    (e: AutoCompleteCompleteEvent) => {
      let filteredMembers;
      if (!e.query.trim().length) {
        filteredMembers = [...members];
      } else {
        filteredMembers = members.filter((member: Member) =>
          member.name.toLowerCase().startsWith(e.query.toLowerCase())
        );
      }

      setSuggestions(filteredMembers);
    },
    [members]
  );

  return (
    <Card>
      <div className="flex align-items-center justify-content-between">
        <span className="text-black font-bold text-lg">Task List</span>
        <Button
          icon="pi pi-plus"
          label="Create Task"
          outlined
          severity="info"
          onClick={() => setVisible(true)}
        />
      </div>
      <TaskList
        title="To Do"
        status={false}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList
        title="Completed"
        status={true}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="Create Task"
        style={{ width: "50vw" }}
        className="popup"
      >
        <div className="text-black font-bold my-2">Task Name</div>
        <InputText placeholder="title" className="w-full my-2" />
        <div className="text-black font-bold my-2">Description</div>
        <Editor className="h-10rem" />
        <div className="flex gap-3 mt-6">
          <div className="flex-1">
            <div className="text-black font-bold my-2">Start Date</div>
            <Calendar placeholder="Start Date" className="w-full my-2" />
          </div>
          <div className="flex-1">
            <div className="text-black font-bold my-2">Due Date</div>
            <Calendar placeholder="End Date" className="w-full my-2" />
          </div>
        </div>
        <div className="text-black font-bold my-2">Add Team Member</div>
        <AutoComplete
          placeholder="Choose team members"
          multiple
          suggestions={suggestions}
          completeMethod={filterMember}
          itemTemplate={itemTemplate}
          selectedItemTemplate={itemTemplate}
          value={selectedMembers}
          onChange={(e: AutoCompleteChangeEvent) => setSelectedMembers(e.value)}
        />
      </Dialog>
    </Card>
  );
}

export default TaskDashboard;
