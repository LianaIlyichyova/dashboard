import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    token: {
      colorHeaderBg: string;
      colorBgCard: string;
      colorTextPrimary: string;
      colorText: string;
      scrollbarThumb: string;
      scrollbarThumbHover: string;
      colorBgHeader: string;
      colorBgBase: string;
    };
  }
}
