import { Tag } from "antd";

import StyledCard from "./StatsCard.styles";
import Title from "@components/Title";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change: number;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  change,
  color,
}: StatsCardProps) {
  const isNegative = change < 0;
  const isNeutral = change === 0;
  const tagColor = isNegative ? "#ff4d4f" : isNeutral ? "#faad14" : "#00c6ff";
  const tagText = `${isNegative ? "" : "+"}${change}%`;

  return (
    <StyledCard $color={color}>
      <div className="card-content">
        <div className="text-section">
          <Title color="white">{title}</Title>
          <p>{value}</p>
          <div className="change">
            <Tag color={tagColor}>{tagText}</Tag>
            <span>From previous period</span>
          </div>
        </div>
        <div className="icon-section">{icon}</div>
      </div>
    </StyledCard>
  );
}
