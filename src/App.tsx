import { ConfigProvider, App as AntdApp } from "antd";
import ThemeToggle from "@components/ThemeToggle";
import GlobalCSSStyles from "@styles/globalStyles";
import baseTokens from "@styles/baseTokens";
import themes from "./styles/themes";
import {
  ThemeProvider as StyledThemeProvider,
  type DefaultTheme,
} from "styled-components";
import { ThemeProvider, useTheme } from "@contexts/ThemeContext";
import type { ThemeType } from "./styles/constants";
import DashboardLayout from "@components/DashboardLayout";
import Header from "@components/Header";
import Footer from "@components/Footer";

const AppContent = () => {
  const { theme: currentTheme } = useTheme();
  const baseTheme = themes[currentTheme as ThemeType];
  const antdTheme = {
    token: { ...baseTokens.token, ...baseTheme.token },
    components: { ...baseTheme.components, ...baseTokens.components },
  };
  const styledTheme: DefaultTheme = baseTheme as DefaultTheme;

  return (
    <ConfigProvider theme={antdTheme}>
      <StyledThemeProvider theme={styledTheme}>
        <GlobalCSSStyles />
        <AntdApp
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Header />
          <DashboardLayout />
          <ThemeToggle />
          <Footer />
        </AntdApp>
      </StyledThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
