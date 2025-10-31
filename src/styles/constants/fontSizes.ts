const fontSizes = {
  small: "0.875rem",
  body: "1rem",
  large: "1.125rem",
  metric: "1.5rem",

  "lh-tight": 1.2,
  "lh-base": 1.5,
};

export type FontSize = keyof typeof fontSizes;

export default fontSizes;
