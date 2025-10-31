import Card from "@components/Card";
import { Header } from "./Timeline.styles";

import { Timeline as AntdTimeline } from "antd";
import TimelineItem from "./components/TimelineItem";

interface Activity {
  id: number;
  date: string;
  text: string;
}

const mockActivities: Activity[] = [
  { id: 1, date: "JUN 26", text: 'Responded to need "Volunteer Activities"' },
  { id: 2, date: "JUN 24", text: 'Added an interest "Volunteer Activities"' },
  { id: 3, date: "JUN 23", text: 'Joined the group "Boardsmanship Forum"' },
  { id: 4, date: "JUN 21", text: 'Responded to need "In-Kind Opportunity"' },
];

const items = mockActivities.map((item) => ({
  key: item.id,
  children: <TimelineItem date={item.date} text={item.text} />,
}));

function Timeline() {
  return (
    <Card>
      <Header>Recent Activity Feed</Header>

      <AntdTimeline items={items} mode="left" />
    </Card>
  );
}

export default Timeline;
