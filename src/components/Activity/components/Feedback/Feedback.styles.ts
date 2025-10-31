import styled from "styled-components";
import { colors, fontSizes, spacings } from "@styles/constants";

const StyledText = styled.div`
  position: relative;
  text-align: center;
  background-color: ${colors.colorHeaderBg};
  border-top-right-radius: ${spacings.borderRadius};
  border-top-left-radius: ${spacings.borderRadius};
  padding: ${spacings.l};
  color: ${colors.white};

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 10%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 2px solid transparent;
    border-top: 15px solid ${colors.colorHeaderBg};
  }
`;

const StyledInfo = styled.div`
  padding: ${spacings.l};
  display: flex;
  gap: ${spacings.m};
`;

const StyledName = styled.p`
  font-weight: 600;
  font-size: ${fontSizes.large};
`;

const StyledRole = styled.p`
  font-size: ${fontSizes.large};
`;

export { StyledText, StyledInfo, StyledName, StyledRole };
