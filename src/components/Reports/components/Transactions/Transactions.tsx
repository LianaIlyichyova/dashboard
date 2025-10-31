import Card from "@components/Card";
import {
  Title,
  Row,
  Cell,
  Amount,
  EditButton,
  StatusCell,
  UserCell,
  UserName,
  Date,
} from "@components/Reports/Reports.styles";

import { Tag, Avatar } from "antd";

import { mockTransactions } from "@components/Reports/mockData";

function Transactions() {
  return (
    <Card>
      <Title>Latest Transactions</Title>
      {mockTransactions.map((transaction) => (
        <Row key={transaction.id}>
          <UserCell width="35%">
            <Avatar
              src={transaction.avatar}
              alt={transaction.name}
              size={32}
              style={{ flexShrink: 0 }}
            />
            <UserName>{transaction.name}</UserName>
          </UserCell>
          <StatusCell width="20%">
            <Tag color={transaction.statusColor}>{transaction.status}</Tag>
          </StatusCell>
          <Cell width="15%">
            <Amount>{transaction.amount}</Amount>
          </Cell>
          <Cell width="15%">
            <Date>{transaction.date}</Date>
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
