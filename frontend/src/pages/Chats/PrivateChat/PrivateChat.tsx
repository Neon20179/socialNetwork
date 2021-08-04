import { FC } from "react";
import { PrivateChatDetails as IPrivateChat } from "@/typing/entities";
import Message from "../components/Message";
import Chat from "../components/Chat";

interface ChatProps {
  chat?: IPrivateChat;
  userId?: number;
}

const PrivateChat: FC<ChatProps> = ({ chat, userId }) => {
  return (
    <Chat
      chatId={chat.id}
      chatAvatar={chat.companion?.avatar_image}
      chatName={chat.companion?.username}
    >
      {chat.messages?.map((message) => (
        <Message message={message} userId={userId} key={message.id} />
      ))}
    </Chat>
  );
};

export default PrivateChat;
