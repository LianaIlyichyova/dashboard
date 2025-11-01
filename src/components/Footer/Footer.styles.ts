import styled from "styled-components";
import { colors, spacings } from "@styles/constants";

const StyledFooter = styled.footer`
  display: block;
  bottom: 0;
  background-color: ${colors.colorBgCardDark};
  padding: ${spacings.xl};
  text-align: center;
`;

export { StyledFooter };
