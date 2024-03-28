import { memo } from "react";

interface Props {
  profile: string;
  name: string;
  time: string;
  message: string;
}

function RecievedChat(props: Props) {
  const { profile, name, time, message } = props;

  return (
    <div className="flex align-items-start mb-5">
      <img src={profile} alt={name} />
      <div className="ml-3 mt-3">
        <span className="font-bold">{name}</span>
        <div className="recieved__message">{message}</div>
        <div>
          <span className="text-sm">{time}</span>
          <i className="pi pi-check"></i>
        </div>
      </div>
    </div>
  );
}

export default memo(RecievedChat);
