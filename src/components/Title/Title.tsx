import type { ReactNode } from "react";
import StyledTitle from "./Title.styles";

interface TitleProps {
  children: ReactNode;
  color?: "white" | "dark" | "light";
}

function Title({ color = "dark", children }: TitleProps) {
  return <StyledTitle color={color}>{children}</StyledTitle>;
}

export default Title;
