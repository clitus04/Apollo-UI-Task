import { memo, useMemo } from "react";
import { Card } from "primereact/card";
import { chats } from "../chats.data";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import RecievedChat from "./RecievedChat";
import SendedChat from "./SendedChat";
import { InputText } from "primereact/inputtext";

interface Props {
  userIndex: number;
}

function ChatLayout(props: Props) {
  const { userIndex } = props;
  const selectedUser = useMemo(() => chats[userIndex], [userIndex, chats]);

  return (
    <Card className="flex-1">
      <div className="flex justify-content-between align-items-center">
        <div className="flex justify-content-between align-items-center">
          <div className="image__container">
            <img
              src={selectedUser.profile}
              alt={selectedUser.name}
              className="w-3rem"
            />
            <span className={`status__indicator ${selectedUser.status}`}></span>
          </div>
          <div className="flex flex-column ml-2">
            <span className="font-bold text-black">{selectedUser.name}</span>
            <span className="text-sm mt-1">{`Last active ${selectedUser.lastOnline} ago`}</span>
          </div>
        </div>
        <div>
          <Button className="ml-2" icon="pi pi-phone" outlined rounded />
          <Button className="ml-2" icon="pi pi-ellipsis-v" outlined rounded />
        </div>
      </div>
      <Divider className="mt-6" />
      <div className="chats__container">
        {selectedUser.chats &&
          Array.isArray(selectedUser.chats) &&
          selectedUser.chats.map((item: any, index: number) =>
            item.isRecieved ? (
              <RecievedChat
                key={index}
                message={item.message}
                time={item.time}
                name={selectedUser.name}
                profile={selectedUser.profile}
              />
            ) : (
              <SendedChat key={index} message={item.message} time={item.time} />
            )
          )}
      </div>
      <Divider />
      <div className="flex align-items-center justify-content-between">
        <InputText placeholder="Type a message" />
        <Button icon="pi pi-send" label="send" />
      </div>
    </Card>
  );
}

export default memo(ChatLayout);
