import type { DefaultTheme } from "styled-components";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const dark = {
  token: {
    colorText: colors.white,
    colorTextPrimary: colors.white,
    colorTextHeading: colors.white,
    colorIconHover: colors.white,
    fontSizeIcon: 24,
    colorBgHeader: colors.colorBgHeader,
    colorBgBase: colors.colorBgPrimary,
    colorBgCard: colors.colorBgCardDark,
    colorPrimaryBg: colors.colorBgSecondary,

    scrollbarThumb: "rgba(255, 255, 255, 0.2)",
    scrollbarThumbHover: "rgba(255, 255, 255, 0.3)",
  },
  components: {
    Layout: {
      bodyBg: colors.colorBgPrimary,
      headerBg: "transparent",
    },
    Select: {
      colorBgElevated: colors.colorBgTertiary,
      colorText: colors.white,
      controlItemBgActive: colors.colorBgSecondary,
      controlItemBgHover: colors.colorBgSecondary,
      colorBorder: colors.colorBgCardDark,
      activeBorderColor: colors.white,
      selectorBg: colors.colorBgTertiary,
      hoverBorderColor: colors.white,
      colorTextPlaceholder: colors.colorBgCardLight,
    },

    Input: {
      colorBgBase: colors.colorBgTertiary,
      addonBg: colors.colorBgSecondary,
      colorBorder: colors.colorLabelDark,
      colorText: colors.white,
      colorTextPlaceholder: colors.colorLabelDark,
      activeBorderColor: colors.white,
      hoverBorderColor: colors.white,
      colorBgContainer: colors.colorBgTertiary,
    },
  },
} as ThemeConfig & DefaultTheme;

export default dark;
