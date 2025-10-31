import styled from "styled-components";
import { spacings, colors } from "@styles/constants";

const StyledHeaderBottom = styled.section`
  padding: ${spacings.m} ${spacings.xxl} 80px ${spacings.xxl};
  background-color: ${colors.colorBgHeader};

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: ${spacings.l};
  }
`;

const StyledRightSection = styled.div`
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  color: ${colors.white};
`;

export default StyledHeaderBottom;

export { StyledRightSection, StyledTitle };
