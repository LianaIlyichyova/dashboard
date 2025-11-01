import styled from "styled-components";
import { spacings } from "@styles/constants";

const Container = styled.section`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: ${spacings.l};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Container;
