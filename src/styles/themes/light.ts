import type { DefaultTheme } from "styled-components";
import { colors } from "../constants";
import { type ThemeConfig } from "antd";

const light = {
  token: {
    colorText: colors.black,
    colorTextPrimary: colors.colorTextTertiary,
    colorIcon: colors.colorTextTertiary,
    colorBgHeader: colors.colorBgHeader,
    fontSizeIcon: 24,

    colorBgBase: colors.white,
    colorPrimaryBg: colors.white,
    colorTextSecondary: colors.colorLabelDark,
    colorBgCard: colors.colorBgCardLight,
    scrollbarThumb: "rgba(0, 0, 0, 0.2)",
    scrollbarThumbHover: "rgba(0, 0, 0, 0.3)",
  },
  components: {
    Form: {
      labelColor: colors.colorLabelDark,
    },
    Select: {
      colorBgContainer: colors.white,
      colorText: colors.colorTextTertiary,
      controlItemBgActive: colors.colorBgCardLight,
      controlItemBgHover: colors.colorBgCardLight,
      colorBorder: colors.colorBgTertiary,
      activeBorderColor: colors.colorBgSecondary,
      colorTextPlaceholder: colors.colorLabelDark,
    },
    Input: {
      colorBgBase: colors.white,
      colorBorder: colors.colorBgTertiary,
      colorText: colors.colorTextTertiary,
      colorTextPlaceholder: colors.colorLabelDark,
      activeBorderColor: colors.colorBgSecondary,
      hoverBorderColor: colors.colorBgSecondary,
      colorBgContainer: colors.white,
    },
  },
} as ThemeConfig & DefaultTheme;

export default light;
