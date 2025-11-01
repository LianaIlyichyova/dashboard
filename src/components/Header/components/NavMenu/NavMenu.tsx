import { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import Card from "@components/Card";

import {
  DashboardOutlined,
  MailOutlined,
  AppstoreOutlined,
  FormOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

import { NavItem, NavList, NavLink, Container } from "./NavMenu.styles";

const navItems = [
  { id: 1, label: "Dashboard", icon: <DashboardOutlined />, active: true },
  { id: 2, label: "Email", icon: <MailOutlined /> },
  { id: 3, label: "UI Elements", icon: <AppstoreOutlined /> },
  { id: 4, label: "Forms", icon: <FormOutlined /> },
  { id: 5, label: "Charts", icon: <PieChartOutlined /> },
  { id: 6, label: "Pages", icon: <FileOutlined /> },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function NavMenu() {
  const isMobile = useIsMobile();

  const dropdownMenu = (
    <Menu>
      {navItems.map((item) => (
        <Menu.Item key={item.id}>
          <NavLink href="#" active={item.active}>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Container>
      <Card>
        {isMobile ? (
          <Dropdown
            overlay={dropdownMenu}
            trigger={["click"]}
            placement="bottomCenter"
            arrow
          >
            <NavLink as="div">
              <MenuFoldOutlined />
            </NavLink>
          </Dropdown>
        ) : (
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink href="#" active={item.active}>
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        )}
      </Card>
    </Container>
  );
}

export default NavMenu;
