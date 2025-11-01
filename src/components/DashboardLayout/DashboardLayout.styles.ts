import styled from "styled-components";
import { Layout } from "antd";
import { spacings } from "@styles/constants";

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

  background-color: ${({ theme }) => theme.token.colorBgBase};
  overflow: auto;

  @media (max-width: 768px) {
    padding: ${spacings.s} ${spacings.s};
  }
`;

export { StyledLayout, StyledLayoutBody };
