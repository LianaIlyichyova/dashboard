import { StyledContent, StyledContainer } from "./TimelineItem.styles";

function TimelineItem({ date, text }: Record<string, string>) {
  return (
    <StyledContainer>
      <StyledContent>
        <p className="date">{date}</p>
        <p className="text">{text}</p>
      </StyledContent>
    </StyledContainer>
  );
}

export default TimelineItem;
