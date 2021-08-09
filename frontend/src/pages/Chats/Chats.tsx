import { FC } from "react";
import { Link } from "react-router-dom";
import CreateGroupChatTab from "./CreateGroupChatTab";

interface ChatProps {
  chats: any[];
  isShowTab: boolean;
  chatNotifications: number[];
  toggleTab: () => void;
}

const Chats: FC<ChatProps> = ({
  chats,
  isShowTab,
  chatNotifications,
  toggleTab,
}) => {
  return (
    <section className="chats__page">
      <div className="header">
        <h2>Chats</h2>
        <div
          className="create-group-chat-icon"
          onClick={toggleTab}
          style={{ transform: isShowTab ? `rotate(45deg)` : null }}
        >
          +
        </div>
      </div>
      <div className="chats">
        {chats.length > 0 ? (
          chats.map((chat: any) => {
            if ("companion" in chat) {
              return (
                <Link
                  className="user-link"
                  to={`/private_chat/${chat.id}/`}
                  key={chat.id}
                >
                  <div
                    className="avatar-image"
                    style={
                      chat.companion.avatar_image
                        ? {
                            backgroundImage: `url(${chat.companion.avatar_image})`,
                          }
                        : { background: "var(--orange)" }
                    }
                  ></div>
                  <h4 className="username">{chat.companion.username}</h4>
                  <div
                    className="notification-circle"
                    style={{
                      display: chatNotifications?.includes(chat.id)
                        ? "block"
                        : "none",
                    }}
                  ></div>
                </Link>
              );
            } else {
              return (
                <Link
                  className="user-link"
                  to={`/group_chat/${chat.id}/`}
                  key={chat.id}
                >
                  <div
                    className="avatar-image"
                    style={
                      chat.icon
                        ? {
                            backgroundImage: `url(${chat.icon})`,
                          }
                        : { background: "var(--orange)" }
                    }
                  ></div>
                  <h4 className="username">{chat.name}</h4>
                  <div
                    className="notification-circle"
                    style={{
                      display: chatNotifications?.includes(chat.id)
                        ? "block"
                        : "none",
                    }}
                  ></div>
                </Link>
              );
            }
          })
        ) : (
          <h2 className="no-chats-message">there is nothing here yet</h2>
        )}
      </div>
      <CreateGroupChatTab />
    </section>
  );
};

export default Chats;
