import { spacings } from "@styles/constants";
import styled from "styled-components";

const StyledCharts = styled.section`
  display: grid;

  grid-template-columns: 1fr;

  gap: ${spacings.l};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export default StyledCharts;
