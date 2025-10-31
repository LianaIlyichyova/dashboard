import styled, { keyframes } from "styled-components";
import { colors, spacings } from "@styles/constants";

import { Input } from "antd";

const { Search } = Input;

const StyledHeaderTop = styled.section`
  background-color: ${colors.colorHeaderBg};
  padding: ${spacings.m} ${spacings.xxl};

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: ${spacings.l};
  }
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #7a6ff0;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const StyledSearch = styled(Search)`
  background-color: #ffffff1a;
  border-radius: 24px;
  input {
    border-radius: 24px;

    &:focus {
      background-color: #ffffff1a;
      border-color: white;
    }
  }
  .ant-input-group-addon {
    background-color: transparent;

    .ant-btn {
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const IconButton = styled.div`
  color: white;
  font-size: 18px;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const RotateIcon = styled(IconButton)`
  animation: ${spin} 2s linear infinite;
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${colors.colorBgTertiary};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export {
  StyledHeaderTop,
  IconButton,
  RotateIcon,
  StyledSearch,
  Title,
  Logo,
  MenuButton,
};
