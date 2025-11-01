import { fontSizes, spacings } from "@styles/constants";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.l};
  align-items: end;
`;

const Value = styled.div`
  color: ${({ theme }) => theme.token.colorText};
  font-size: ${fontSizes.xxl};
  font-weight: 600;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.token.colorTextPrimary};
  line-height: 1.5;
  max-width: 250px;
  word-wrap: break-word;
`;

const LearnMore = styled.a`
  color: #8891aa;
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
    font-size: ${fontSizes.m};
  }
`;

const StyledChartContainer = styled.div`
  width: 200px;
  height: 80px;
`;

export { StyledChartContainer, LearnMore, Description, Value, StyledContainer };
