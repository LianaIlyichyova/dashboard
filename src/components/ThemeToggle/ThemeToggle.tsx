import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

import { useTheme } from "@contexts/ThemeContext";
import { StyledThemeToggleWrapper } from "./ThemeToggle.styles";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledThemeToggleWrapper>
      <Switch
        checked={isDark}
        onChange={(checked) => toggleTheme(checked ? "dark" : "light")}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </StyledThemeToggleWrapper>
  );
};

export default ThemeToggle;
