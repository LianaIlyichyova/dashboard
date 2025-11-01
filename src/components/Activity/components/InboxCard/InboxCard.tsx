import Card from "@components/Card";
import { UserItem, Time } from "./InboxCard.styles";

import { Avatar } from "antd";
import Title from "@components/Title";

interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
}

const mockMessages: Message[] = [
  {
    id: 1,
    name: "Misty",

    message: "Hey: there I'm available...",
    time: "13:40 PM",
  },
  {
    id: 2,
    name: "Melissa",

    message: "I've finished it! See you so...",
    time: "13:34 PM",
  },
  {
    id: 3,
    name: "Dwayne",

    message: "This theme is awesome!",
    time: "13:17 PM",
  },
  {
    id: 4,
    name: "Martin",

    message: "Nice to meet you",
    time: "12:20 PM",
  },
  {
    id: 5,
    name: "Vincent",

    message: "Hey: there I'm available...",
    time: "9:47 AM",
  },
  {
    id: 6,
    name: "Robert Chappa",

    message: "Hey: there I'm available...",
    time: "10:02 PM",
  },
];

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
