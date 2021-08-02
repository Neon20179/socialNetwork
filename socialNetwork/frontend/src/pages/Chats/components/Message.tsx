import React, { FC } from "react";
import { Message } from "@/typing/entities";

interface MessageProps {
  message: Message;
  userId: number;
}

const Message: FC<MessageProps> = ({ message, userId, children }) => {
  return (
    <div
      className="message-container"
      style={
        message.user.id === userId
          ? { display: "flex", justifyContent: "flex-end" }
          : null
      }
    >
      <div className="message">
        {children}
        <p>{message.text}</p>
        <span>{message.created_at}</span>
      </div>
    </div>
  );
};

export default Message;
