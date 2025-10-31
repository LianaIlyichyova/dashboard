import { type ThemeConfig } from "antd";
import { spacings, colors } from "./constants";

export const baseTokens: ThemeConfig = {
  token: { fontFamily: "'Plus Jakarta Sans', 'Open Sans', Arial, sans-serif" },
  components: {
    Layout: {
      headerPadding: spacings.xl,
    },
    Breadcrumb: {
      colorText: colors.white,
      linkColor: colors.colorTextTertiary,
      linkHoverColor: colors.white,
      lastItemColor: colors.white,
      separatorColor: colors.white,
    },
  },
};

export default baseTokens;
