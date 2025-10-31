import { spacings } from "@styles/constants";
import { Layout } from "antd";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
`;

const StyledLayoutBody = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacings.xl};
  padding: ${spacings.xl} ${spacings.xxl};

  background-color: ${({ theme }) => theme.token.colorPrimaryBg || "#0f172a"};
  overflow: auto;

  @media (max-width: 768px) {
    padding: ${spacings.s} ${spacings.s};
  }
`;

export { StyledLayout, StyledLayoutBody };
