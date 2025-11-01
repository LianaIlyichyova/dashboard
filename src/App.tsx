import { ConfigProvider, App as AntdApp } from "antd";
import GlobalCSSStyles from "@styles/globalStyles";
import baseTokens from "@styles/baseTokens";
import themes from "./styles/themes";
import {
  ThemeProvider as StyledThemeProvider,
  type DefaultTheme,
} from "styled-components";
import { SettingsProvider, useSettings } from "@contexts/SettingsContext";
import type { ThemeType } from "./styles/constants";
import DashboardLayout from "@components/DashboardLayout";
import Header from "@components/Header";
import Footer from "@components/Footer";

const AppContent = () => {
  const { settings } = useSettings();

  const currentTheme: ThemeType = (settings?.theme as ThemeType) || "light";

  const baseTheme = themes[currentTheme];
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
          <Footer />
        </AntdApp>
      </StyledThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

export default App;
