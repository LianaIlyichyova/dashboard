import {
  StyledHeaderTop,
  IconButton,
  RotateIcon,
  Logo,
  Title,
  StyledSearch,
} from "./HeaderTop.styles";
import { StyledSection } from "@components/Header/Header.styles";
import { Badge, Avatar } from "antd";
import {
  BellOutlined,
  SettingOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";

function HeaderTop() {
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
          <SettingOutlined />
        </RotateIcon>
      </StyledSection>
    </StyledHeaderTop>
  );
}

export default HeaderTop;
