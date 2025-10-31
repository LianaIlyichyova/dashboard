import { spacings } from "@styles/constants";
import styled from "styled-components";

const StyledActivity = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  gap: ${spacings.l};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.l};
  height: 100%;
`;

export { StyledActivity, StyledThirdColumn };
