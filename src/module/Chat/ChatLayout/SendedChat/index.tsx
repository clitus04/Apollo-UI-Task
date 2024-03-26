import { memo } from "react";

interface Props {
  message: string;
  time: string;
}

function SendedChat(props: Props) {
  const { message, time } = props;

  return (
    <div className="flex flex-column align-items-end mb-4">
      <div className="sent__message">{message}</div>
      <div>
        <span className="text-sm">{time}</span>
        <i className="pi pi-check"></i>
      </div>
    </div>
  );
}

export default memo(SendedChat);
