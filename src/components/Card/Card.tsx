import type { ReactNode } from "react";
import StyledCardContainer from "./Card.styles";

interface CardProps {
  children: ReactNode;
  style?: Record<string, string>;
}

function Card({ children, style }: CardProps) {
  return <StyledCardContainer style={style}>{children}</StyledCardContainer>;
}

export default Card;
