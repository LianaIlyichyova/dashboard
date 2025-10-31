import styled from "styled-components";
import { colors, fontSizes, spacings } from "@styles/constants";

export const Header = styled.div`
  padding: ${spacings.m} ${spacings.l};
  font-size: ${fontSizes.large};
  font-weight: 600;
`;

export const Dot = styled.div<{ $isLast: boolean }>`
  position: absolute;
  top: 6px;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.colorHeaderBg};
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 4px;
    width: 2px;
    height: ${(props) => (props.$isLast ? "calc(100% - 10px)" : "100%")};
    background-color: ${colors.colorBgTertiary};
    display: ${(props) => (props.$isLast ? "none" : "block")};

    ${(props) => !props.$isLast && `height: calc(${spacings.xl} + 10px);`}
  }
`;

export const DateLabel = styled.div`
  font-size: ${fontSizes.small};
  font-weight: 600;
  margin-bottom: 2px;
`;

export const EventText = styled.div`
  font-size: ${fontSizes.metric};
  line-height: ${fontSizes.metric};
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: ${spacings.m};

  button {
    background-color: ${colors.colorHeaderBg};
    border: none;
    padding: ${spacings.m} ${spacings.xl};
    border-radius: ${spacings.borderRadius};
    cursor: pointer;
    font-size: ${fontSizes.metric};
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background-color: #6a62a7;
    }
  }
`;
