import { useState } from "react";

import {
  StyledHeaderTop,
  IconButton,
  RotateIcon,
  Logo,
  Title,
  StyledSearch,
} from "./HeaderTop.styles";
import { StyledSection } from "@components/Header/Header.styles";
import { Badge, Avatar, Drawer } from "antd";
import {
  BellOutlined,
  SettingOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import Settings from "@components/Settings";

function HeaderTop() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <StyledHeaderTop>
      <StyledSection>
        <Logo>V</Logo>
        <Title>V Telecom</Title>
      </StyledSection>

      <StyledSection>
        <StyledSearch placeholder="Search..." variant="filled" />
        <IconButton>
          <FullscreenOutlined />
        </IconButton>

        <Badge count={3} size="small" offset={[-2, 5]}>
          <IconButton>
            <BellOutlined />
          </IconButton>
        </Badge>

        <Avatar
          style={{ flexShrink: 0 }}
          src="https://randomuser.me/api/portraits/women/44.jpg"
          size={36}
        />

        <RotateIcon>
          <SettingOutlined onClick={showDrawer} />
        </RotateIcon>
      </StyledSection>

      <Drawer
        title="Settings"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <Settings />
      </Drawer>
    </StyledHeaderTop>
  );
}

export default HeaderTop;
