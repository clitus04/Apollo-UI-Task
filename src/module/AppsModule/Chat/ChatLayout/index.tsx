import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "primereact/card";
import { chats } from "../chats.data";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import RecievedChat from "./RecievedChat";
import SendedChat from "./SendedChat";
import { InputText } from "primereact/inputtext";
import { getCurrentTime } from "../../../../utility/getCurrentTIme";
import { generateRandomMessage } from "../../../../utility/generateRandomMessage";

interface Props {
  userIndex: number;
}

function ChatLayout(props: Props) {
  const { userIndex } = props;
  const container = useRef<HTMLDivElement>(null);
  const selectedUser = useMemo(() => chats[userIndex], [userIndex, chats]);
  const [newMessage, setNewMessage] = useState("");
  const [userChats, setUserChats] = useState(selectedUser.chats);

  const recieveChat = useCallback(() => {
    const newChat = {
      message: generateRandomMessage(),
      time: getCurrentTime(),
      isRecieved: true,
    };
    setUserChats((prev: any) => [...prev, newChat]);
  }, []);

  const sendChat = useCallback(() => {
    const newChat = {
      message: newMessage,
      time: getCurrentTime(),
      isRecieved: false,
    };
    setUserChats((prev: any) => [...prev, newChat]);
    setNewMessage("");
    setTimeout(() => recieveChat(), 2000);
  }, [newMessage]);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  }, [userChats]);

  useEffect(() => {
    setUserChats(selectedUser.chats);
  }, [userIndex]);

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
      <div className="chats__container" ref={container}>
        {userChats &&
          Array.isArray(userChats) &&
          userChats.map((item: any, index: number) =>
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
      <form
        className="flex align-items-center justify-content-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputText
          className="w-9"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          type="submit"
          icon="pi pi-send"
          label="send"
          onClick={sendChat}
        />
      </form>
    </Card>
  );
}

export default memo(ChatLayout);
