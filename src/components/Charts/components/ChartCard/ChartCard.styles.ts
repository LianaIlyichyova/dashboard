import styled from "styled-components";
import { spacings, fontSizes } from "@styles/constants";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacings.l};

  h4 {
    font-size: ${fontSizes.large};
    font-weight: 600;
    margin: 0;
  }
`;

const StatGrid = styled.div<{ $isTriple: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isTriple ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: ${spacings.m};
  margin-bottom: ${spacings.xl};

  .stat-item {
    padding-right: ${spacings.xs};

    .value {
      font-size: ${fontSizes.metric};
      font-weight: 500;
      line-height: ${fontSizes["lh-tight"]};
      margin-bottom: ${spacings.xs};
    }

    .label {
      font-size: ${fontSizes.body};
    }
  }
`;

export { Header, StatGrid };
