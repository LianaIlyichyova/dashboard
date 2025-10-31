import { spacings } from "@styles/constants";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 ${spacings.xxl};
  z-index: 2;
  margin-top: -50px;
`;

const NavList = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;

  @media (max-width: 1024px) {
    justify-content: space-around;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 4px;
    padding: 0 8px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
    overflow-x: visible;
    overflow-y: auto;
    max-height: 70vh;
  }
`;

const NavItem = styled.span`
  flex-shrink: 0;
`;

const NavLink = styled.a<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${spacings.s};
  color: ${(props) => (props.active ? "#5dade2" : "#8b95a5")};
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.3s ease;
  cursor: pointer;
  border-bottom: 3px solid
    ${(props) => (props.active ? "#5dade2" : "transparent")};
  white-space: nowrap;
  min-width: 100px;

  .anticon {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #5dade2;
    background: rgba(93, 173, 226, 0.05);

    .anticon {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    gap: 2px;
  }
`;

export { NavItem, NavList, NavLink, Container };
