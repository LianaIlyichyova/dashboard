import Card from "@components/Card";
import {
  Row,
  Cell,
  Amount,
  EditButton,
  StatusCell,
  UserCell,
} from "@components/Reports/Reports.styles";

import { Tag, Avatar } from "antd";

import { mockTransactions } from "@components/Reports/mockData";
import Title from "@components/Title";

function Transactions() {
  return (
    <Card>
      <Title color="light">Latest Transactions</Title>
      {mockTransactions.map((transaction) => (
        <Row key={transaction.id}>
          <UserCell width="35%">
            <Avatar
              src={transaction.avatar}
              alt={transaction.name}
              size={32}
              style={{ flexShrink: 0 }}
            />
            <p>{transaction.name}</p>
          </UserCell>
          <StatusCell width="20%">
            <Tag color={transaction.statusColor}>{transaction.status}</Tag>
          </StatusCell>
          <Cell width="15%">
            <Amount>{transaction.amount}</Amount>
          </Cell>
          <Cell width="15%">
            <p>{transaction.date}</p>
          </Cell>
          <Cell width="15%">
            <EditButton>Edit</EditButton>
          </Cell>
        </Row>
      ))}
    </Card>
  );
}

export default Transactions;
