import Stats from "@components/Stats";

import { StyledLayout, StyledLayoutBody } from "./DashboardLayout.styles";
import DashboardCharts from "../Charts/Charts";
import Activity from "@components/Activity";
import Reports from "@components/Reports";

export default function DashboardLayout() {
  return (
    <StyledLayout>
      <StyledLayoutBody>
        <Stats />
        <DashboardCharts />
        <Activity />
        <Reports />
      </StyledLayoutBody>
    </StyledLayout>
  );
}
