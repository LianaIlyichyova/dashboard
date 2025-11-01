import StatsCard from "./components/StatsCard";
import Container from "./Stats.styles";

import { mockStats } from "@data/stats";

function Stats() {
  return (
    <Container>
      {mockStats.map((stat) => (
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
