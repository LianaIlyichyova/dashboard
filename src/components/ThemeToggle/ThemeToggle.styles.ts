import styled from "styled-components";
import { spacings } from "@styles/constants";

const StyledThemeToggleWrapper = styled.div`
  width: max-content;
  z-index: 9999;
  background: ${({ theme }) => theme.token.colorBgCard};
  border-radius: 8px;
  padding: ${spacings.xs};
  display: flex;
  align-items: center;
  box-shadow: 0 0 ${spacings.xs} ${({ theme }) => theme.token.colorTextPrimary};

  .ant-switch {
    border-radius: ${spacings.borderRadius};
  }
`;

export { StyledThemeToggleWrapper };
