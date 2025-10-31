import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    token: {
      colorHeaderBg: string;
      colorPrimaryBg: string;
      colorBgCard: string;
      colorIcon: string;
      colorIconHover: string;
      colorTextPrimary: string;
      colorText: string;
      scrollbarThumb: string;
      scrollbarThumbHover: string;
      colorBgHeader: string;
    };
  }
}
