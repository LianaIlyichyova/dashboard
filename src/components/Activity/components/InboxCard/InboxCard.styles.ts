import styled from "styled-components";
import { colors, fontSizes, spacings } from "@styles/constants";

export const Header = styled.div`
  padding: ${spacings.m} ${spacings.l};
  font-size: ${fontSizes.large};
  font-weight: 600;
  border-bottom: 1px solid ${colors.colorBgTertiary};
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacings.m} ${spacings.l};
  border-bottom: 1px solid ${colors.colorBgTertiary};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .content {
    flex-grow: 1;
    margin-left: ${spacings.m};
    min-width: 0;
  }

  .name {
    font-size: ${fontSizes.metric};
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .message {
    font-size: ${fontSizes.small};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.colorHeaderBg}; /* Mock color */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: bold;
  flex-shrink: 0;
`;

export const Time = styled.div`
  font-size: ${fontSizes.small};
  margin-left: ${spacings.m};
  flex-shrink: 0;
`;
