import { memo, Dispatch, SetStateAction, useCallback } from "react";
import profile from "../../../../assets/tony.jpg";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { chats } from "../chats.data";

interface Props {
  setUserIndex: Dispatch<SetStateAction<number>>;
}

function UsersLayout(props: Props) {
  const { setUserIndex } = props;

  const getShortText = useCallback(
    (userChats: any[]) => {
      const lastChat = userChats[userChats.length - 1];
      return lastChat.message;
    },
    [chats]
  );

  return (
    <Card className="w-25rem">
      <div className="flex flex-column justify-content-center align-items-center py-3">
        <img className="w-5rem border-circle" src={profile} alt="Tony stark" />
        <span className="text-black font-bold mt-2">Tony Stark</span>
      </div>
      <Divider />
      <div className="p-input-icon-left w-full">
        <i className="pi pi-search"></i>
        <InputText placeholder="Search" className="w-full" />
      </div>
      <div className="users__container">
        {chats &&
          Array.isArray(chats) &&
          chats.map((item: any, index: number) => (
            <div
              key={index}
              className="user__row grid"
              onClick={() => setUserIndex(index)}
            >
              <div className="col-9 flex align-items-center">
                <div className="image__container">
                  <img src={item.profile} alt={item.name} className="w-3rem" />
                  <span className={`status__indicator ${item.status}`}></span>
                </div>
                <div className="overflow-hidden ml-2">
                  <div className="font-bold">{item.name}</div>
                  <div className="white-space-nowrap text-overflow-ellipsis text-sm overflow-hidden">
                    {getShortText(item.chats)}
                  </div>
                </div>
              </div>
              <div className="col-2">{item.lastOnline}</div>
            </div>
          ))}
      </div>
    </Card>
  );
}

export default memo(UsersLayout);
