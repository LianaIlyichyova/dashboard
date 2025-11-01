import type { DefaultTheme } from "styled-components";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const light = {
  token: {
    colorText: colors.black,
    colorTextPrimary: colors.colorTextSecondary,
    colorIcon: colors.colorTextSecondary,
    colorBgHeader: colors.colorBgHeader,
    fontSizeIcon: 24,

    colorBgBase: colors.white,
    colorPrimaryBg: colors.white,
    colorTextSecondary: colors.colorTextSecondary,
    colorBgCard: colors.colorBgCardLight,
    scrollbarThumb: "rgba(0, 0, 0, 0.2)",
    scrollbarThumbHover: "rgba(0, 0, 0, 0.3)",
  },
  components: {
    Form: {
      labelColor: colors.colorTextSecondary,
    },
    Select: {
      colorBgContainer: colors.white,
      colorText: colors.colorTextSecondary,
      controlItemBgActive: colors.colorBgCardLight,
      controlItemBgHover: colors.colorBgCardLight,
      colorBorder: colors.colorTextSecondary,
      activeBorderColor: colors.colorBgSecondary,
      colorTextPlaceholder: colors.colorTextSecondary,
    },
    Input: {
      colorBgBase: colors.white,
      colorBorder: colors.colorTextSecondary,
      colorText: colors.colorTextSecondary,
      colorTextPlaceholder: colors.colorTextSecondaryDark,
      activeBorderColor: colors.colorBgSecondary,
      hoverBorderColor: colors.colorBgSecondary,
      colorBgContainer: colors.white,
    },
  },
} as ThemeConfig & DefaultTheme;

export default light;
