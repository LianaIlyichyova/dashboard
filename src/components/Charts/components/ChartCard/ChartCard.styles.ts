import styled from "styled-components";
import { spacings, fontSizes } from "@styles/constants";

const StatGrid = styled.div<{ $isTriple: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isTriple ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: ${spacings.m};
  margin-bottom: ${spacings.xl};

  .stat-item {
    padding-right: ${spacings.xs};

    .value {
      font-size: ${fontSizes.m};
      font-weight: 500;
      margin-bottom: ${spacings.xs};
    }

    .label {
      font-size: ${fontSizes.s};
    }
  }
`;

export { StatGrid };
