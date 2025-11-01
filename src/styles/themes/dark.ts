import type { DefaultTheme } from "styled-components";
import { colors } from "../constants";
import type { ThemeConfig } from "antd";

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
    Select: {
      colorBgContainer: colors.colorBgSecondary,
      colorText: colors.white,
      colorTextPlaceholder: colors.colorTextSecondaryDark,
      colorBorder: colors.colorTextSecondaryDark,
      activeBorderColor: colors.white,
      controlItemBgHover: colors.colorBgSecondary,
      controlItemBgActive: colors.colorBgSecondary,
      dropdownBg: colors.colorBgSecondary,
      itemBgHover: colors.colorBgSecondary,
      itemTextColor: colors.white,
      itemTextColorSelected: colors.white,
    },
    Drawer: {
      colorBgElevated: colors.colorBgBase,
      colorBgContainer: colors.colorBgBase,
      colorText: colors.white,
      colorTextHeading: colors.white,
      colorIcon: colors.white,
      colorSplit: colors.colorTextSecondaryDark,
    },
    Button: {
      colorBorder: colors.colorTextSecondaryDark,
    },
  },
} as unknown as ThemeConfig & DefaultTheme;

export default dark;
