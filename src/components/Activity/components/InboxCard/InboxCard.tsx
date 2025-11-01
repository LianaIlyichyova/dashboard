import Card from "@components/Card";
import Title from "@components/Title";
import { Avatar } from "antd";
import { UserItem, Time } from "./InboxCard.styles";

import { mockMessages } from "@data/inbox";

export default function InboxCard() {
  return (
    <Card>
      <Title>Inbox</Title>

      {mockMessages.map((msg) => (
        <UserItem key={msg.id}>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
          <div className="content">
            <div className="name">{msg.name}</div>
            <div className="message">{msg.message}</div>
          </div>
          <Time>{msg.time}</Time>
        </UserItem>
      ))}
    </Card>
  );
}
