import { Container } from "./Reports.styles";

import Orders from "./components/Orders";
import Transactions from "./components/Transactions";

function Reports() {
  return (
    <Container>
      <Transactions />
      <Orders />
    </Container>
  );
}

export default Reports;
