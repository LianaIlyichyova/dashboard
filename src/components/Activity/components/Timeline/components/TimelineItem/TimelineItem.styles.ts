import styled from "styled-components";
import { spacings } from "@styles/constants";

const TRIANGLE_SIZE = "10px";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
`;

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.token.colorBgBase};

  width: 100%;
  min-width: 100%;
  position: relative;

  border-radius: ${spacings.borderRadius};
  padding: ${spacings.l};

  &::after {
    content: "";
    position: absolute;
    right: 99%;
    top: 18%;
    transform: translateY(-50%);

    width: 0;
    height: 0;

    border-top: ${TRIANGLE_SIZE} solid transparent;
    border-bottom: ${TRIANGLE_SIZE} solid transparent;

    border-right: ${TRIANGLE_SIZE} solid
      ${({ theme }) => theme.token.colorBgBase};
  }
`;

export { StyledContent, StyledContainer };
