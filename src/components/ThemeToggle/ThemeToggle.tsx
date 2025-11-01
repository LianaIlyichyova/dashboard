import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { StyledThemeToggleWrapper } from "./ThemeToggle.styles";

interface ThemeToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ThemeToggle = ({ checked, onChange }: ThemeToggleProps) => {
  return (
    <StyledThemeToggleWrapper>
      <Switch
        checked={checked}
        onChange={onChange}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </StyledThemeToggleWrapper>
  );
};

export default ThemeToggle;
