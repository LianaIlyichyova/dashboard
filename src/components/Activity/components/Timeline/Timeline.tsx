import Card from "@components/Card";
import Title from "@components/Title";
import TimelineItem from "./components/TimelineItem";

import { Timeline as AntdTimeline } from "antd";
import { spacings } from "@styles/constants";

import { mockActivities } from "@data/activities";

const items = mockActivities.map((item) => ({
  key: item.id,
  children: <TimelineItem date={item.date} text={item.text} />,
}));

function Timeline() {
  return (
    <Card
      style={{ display: "flex", flexDirection: "column", gap: spacings.xl }}
    >
      <Title>Recent Activity Feed</Title>

      <AntdTimeline items={items} mode="left" />
    </Card>
  );
}

export default Timeline;
