import Stats from "@components/Stats";
import Sidebar from "../Sidebar";

import { StyledLayout, StyledLayoutBody } from "./DashboardLayout.styles";
import DashboardCharts from "../Charts/Charts";
import Activity from "@components/Activity";
import Reports from "@components/Reports";

export default function DashboardLayout() {
  return (
    <StyledLayout>
      {/* <Sidebar /> */}
      <StyledLayoutBody>
        <Stats />
        <DashboardCharts />
        <Activity />
        <Reports />
      </StyledLayoutBody>
    </StyledLayout>
  );
}
