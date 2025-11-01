import Orders from "./components/Orders";
import Transactions from "./components/Transactions";

import { Container } from "./Reports.styles";

function Reports() {
  return (
    <Container>
      <Transactions />
      <Orders />
    </Container>
  );
}

export default Reports;
