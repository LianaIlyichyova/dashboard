import StatsCard from "./components/StatsCard";

import {
  ShoppingOutlined,
  DatabaseOutlined,
  TagOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Container from "./Stats.styles";

const mockStatsData = [
  {
    id: 1,
    title: "Orders",
    value: "1,587",
    icon: <ShoppingOutlined />,
    change: 11,
    color: "#7667d3",
    description: "From previous period",
    unit: "",
  },
  {
    id: 2,
    title: "Revenue",
    value: "$46,782",
    icon: <DatabaseOutlined />,
    change: -29,
    color: "#7667d3",
    description: "From previous period",
    unit: "$",
  },
  {
    id: 3,
    title: "Average Price",
    value: "$15.9",
    icon: <TagOutlined />,
    change: 0,
    color: "#7667d3",
    description: "From previous period",
    unit: "$",
  },
  {
    id: 4,
    title: "Product Sold",
    value: "1,890",
    icon: <ShoppingCartOutlined />,
    change: 89,
    color: "#7667d3",
    description: "From previous period",
    unit: "",
  },
];

function Stats() {
  return (
    <Container>
      {" "}
      {mockStatsData.map((stat) => (
        <StatsCard
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          color={stat.color}
        />
      ))}
    </Container>
  );
}

export default Stats;
