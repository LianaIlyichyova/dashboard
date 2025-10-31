import { StyledSection } from "@components/Header/Header.styles";
import StyledHeaderBottom, {
  StyledRightSection,
  StyledTitle,
} from "./HeaderBottom.styles";
import MiniBarChart from "@components/MiniBarChart";
import { Breadcrumb } from "antd";

function HeaderBottom() {
  return (
    <StyledHeaderBottom>
      <StyledRightSection>
        <StyledTitle>Dashboard</StyledTitle>
        <Breadcrumb
          items={[
            {
              title: <a href="">Home</a>,
            },
            {
              title: "Dashboard",
            },
          ]}
        />
      </StyledRightSection>
      <StyledSection>
        <MiniBarChart
          label="Item Sold"
          value="1230"
          color="#3ec7e0"
          data={[3, 4, 6, 3, 2, 5, 7, 8, 4, 5]}
        />
        <MiniBarChart
          label="Balance $"
          value="2,317"
          color="#9a7ff0"
          data={[2, 3, 8, 2, 4, 6, 7, 2, 6, 3]}
        />
      </StyledSection>
    </StyledHeaderBottom>
  );
}

export default HeaderBottom;
