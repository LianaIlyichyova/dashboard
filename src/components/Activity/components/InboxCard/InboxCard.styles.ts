import styled from "styled-components";
import { colors, fontSizes, spacings } from "@styles/constants";

const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacings.m} ${spacings.l};
  border-bottom: 1px solid ${colors.colorTextSecondaryDark};
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
    font-size: ${fontSizes.m};
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Time = styled.div`
  margin-left: ${spacings.m};
  flex-shrink: 0;
`;

export { Time, UserItem };
