import styled from "styled-components";

import { colors } from "@styles/constants";

const StyledTitle = styled.h3<{ color?: string }>`
  color: ${({ color, theme }) =>
    color === "dark"
      ? theme.token.colorText
      : color === "white"
      ? colors.white
      : theme.token.colorTextPrimary};
`;

export default StyledTitle;
