import styled from "styled-components";
import { colors } from "@styles/constants";

const StyledChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .chart-wrapper {
    width: 100px;
    height: 50px;
  }
`;

const StyledLabel = styled.p`
  color: ${colors.white};
`;

export { StyledLabel };

export default StyledChartContainer;
