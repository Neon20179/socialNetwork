import { FC } from "react";
import { GroupChatDetails } from "@/typing/entities";
import GroupChatMessage from "./GroupChatMessage";
import Chat from "../components/Chat";

interface GroupChatProps {
  chat?: GroupChatDetails;
  userId?: number;
}

const GroupChat: FC<GroupChatProps> = ({ chat, userId }) => {
  return (
    <Chat chatId={chat.id} chatAvatar={chat.icon} chatName={chat.name}>
      {chat.messages?.map((message) => (
        <GroupChatMessage message={message} userId={userId} key={message.id} />
      ))}
    </Chat>
  );
};

export default GroupChat;
