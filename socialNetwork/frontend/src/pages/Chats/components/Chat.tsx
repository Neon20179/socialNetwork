import React, { FC, useEffect } from "react";
import ChatForm from "../ChatForm";

interface ChatProps {
  chatAvatar: string;
  chatName: string;
  chatId: number;
}

const Chat: FC<ChatProps> = ({ chatAvatar, chatName, chatId, children }) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <section className="chat__page">
      <div className="user-link">
        <div
          className="avatar-image"
          style={
            chatAvatar
              ? { backgroundImage: `url(${chatAvatar})` }
              : { background: "var(--orange)" }
          }
        ></div>
        <h4 className="username">{chatName}</h4>
      </div>
      <div className="messages">{children}</div>
      <ChatForm chatId={chatId} />
    </section>
  );
};

export default Chat;
