import styled from "styled-components";
import { Card } from "antd";
import { spacings } from "@styles/constants";

const StyledCard = styled(Card)<{ $color: string }>`
  background: ${({ $color }) => $color};
  color: #fff;
  border: none;
  border-radius: ${spacings.borderRadius};
  position: relative;
  overflow: hidden;

  .ant-card-body {
    padding: ${spacings.xl};
    height: 100%;
  }

  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: ${spacings.m};

    h4 {
      font-size: 13px;
      text-transform: uppercase;
      opacity: 0.9;
      margin-bottom: 6px;
    }

    h2 {
      font-size: 26px;
      font-weight: 700;
      margin: 0;
    }

    .change {
      display: flex;
      align-items: center;
      gap: 6px;

      span {
        font-size: 12px;
        opacity: 0.8;
      }

      .ant-tag {
        font-weight: 600;
        font-size: 11px;
        border-radius: 6px;
        margin: 0;
      }
    }
  }

  .icon-section {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 20px;
      color: #fff;
    }
  }
`;

export default StyledCard;
