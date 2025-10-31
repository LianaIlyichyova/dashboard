import styled from "styled-components";
import { spacings } from "@styles/constants";

const StyledCardContainer = styled.div`
  background-color: ${({ theme }) => theme.token.colorBgCard};
  padding: ${spacings.l};
  border-radius: ${spacings.borderRadius};
  height: 100%;
  overflow: auto;
`;

export default StyledCardContainer;
