import { fontSizes, spacings } from "@styles/constants";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.l};
  align-items: end;
`;

export const Title = styled.h3`
  color: #b8bfd1;
  font-size: ${fontSizes.large};
  font-weight: 400;
`;

export const Value = styled.div`
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
`;

export const Description = styled.p`
  color: #8891aa;
  font-size: ${fontSizes.metric};
  line-height: 1.5;
  max-width: 250px;
  word-wrap: break-word;
`;

export const LearnMore = styled.a`
  color: #8891aa;
  font-size: ${fontSizes.metric};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #a8b1c4;
  }

  &::after {
    content: "»";
    font-size: ${fontSizes.metric};
  }
`;

export const StyledChartContainer = styled.div`
  width: 200px;
  height: 80px;
`;
