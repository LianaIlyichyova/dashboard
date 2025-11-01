import styled from "styled-components";

import { Form } from "antd";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FormItems = styled.section`
  flex: 1;
`;

export { StyledForm, FormItems };
