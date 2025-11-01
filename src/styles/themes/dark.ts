import type { DefaultTheme } from "styled-components";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const dark = {
  token: {
    colorText: colors.white,
    colorTextPrimary: colors.colorTextSecondaryDark,
    colorTextHeading: colors.white,
    colorIconHover: colors.white,
    fontSizeIcon: 24,
    colorBgHeader: colors.colorBgHeader,
    colorBgBase: colors.colorBgBase,
    colorBgCard: colors.colorBgCardDark,
    colorPrimaryBg: colors.colorBgBase,

    scrollbarThumb: "rgba(255, 255, 255, 0.2)",
    scrollbarThumbHover: "rgba(255, 255, 255, 0.3)",
  },
  components: {
    Layout: {
      headerBg: "transparent",
    },
    Select: {
      colorBgElevated: colors.colorTextSecondaryDark,
      colorText: colors.white,
      controlItemBgActive: colors.colorBgSecondary,
      controlItemBgHover: colors.colorBgSecondary,
      colorBorder: colors.colorBgCardDark,
      activeBorderColor: colors.white,
      selectorBg: colors.colorTextSecondaryDark,
      hoverBorderColor: colors.white,
      colorTextPlaceholder: colors.colorTextSecondaryDark,
    },

    Input: {
      colorBgBase: colors.colorTextSecondaryDark,
      addonBg: colors.colorBgSecondary,
      colorBorder: colors.colorTextSecondaryDark,
      colorText: colors.white,
      colorTextPlaceholder: colors.colorTextSecondaryDark,
      activeBorderColor: colors.white,
      hoverBorderColor: colors.white,
      colorBgContainer: colors.colorTextSecondaryDark,
    },
  },
} as ThemeConfig & DefaultTheme;

export default dark;
