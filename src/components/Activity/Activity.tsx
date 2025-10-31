import InboxCard from "./components/InboxCard";
import Timeline from "./components/Timeline";
import Feedback from "./components/Feedback";
import Sales from "./components/Sales";

import { StyledActivity, StyledThirdColumn } from "./Activity.styles";

function Activity() {
  return (
    <StyledActivity>
      <InboxCard />

      <Timeline />
      <StyledThirdColumn>
        <Feedback />
        <Sales />
      </StyledThirdColumn>
    </StyledActivity>
  );
}

export default Activity;
