import { useState } from "react";
import "./index.scss";
import ChatLayout from "./ChatLayout";
import UsersLayout from "./UsersLayout";

function Chat() {
  const [userIndex, setUserIndex] = useState(0);
  return (
    <div className="chat">
      <UsersLayout setUserIndex={setUserIndex} />
      <ChatLayout userIndex={userIndex} />
    </div>
  );
}

export default Chat;
