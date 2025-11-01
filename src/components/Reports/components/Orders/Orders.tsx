import Card from "@components/Card";
import {
  Row,
  Cell,
  OrderId,
  ProductName,
  Amount,
  EditButton,
  StatusCell,
  UserCell,
} from "@components/Reports/Reports.styles";

import { Tag, Avatar } from "antd";

import Title from "@components/Title";

import { mockOrders } from "@components/Reports/mockData";

function Orders() {
  return (
    <Card>
      <Title color="light">Latest Orders</Title>

      {mockOrders.map((order, index) => (
        <Row key={`${order.id}-${index}`}>
          <Cell width="15%">
            <OrderId>{order.id}</OrderId>
          </Cell>
          <UserCell width="30%">
            <Avatar
              src={order.avatar}
              alt={order.name}
              size={32}
              style={{ flexShrink: 0 }}
            />
            <ProductName>{order.name}</ProductName>
          </UserCell>
          <StatusCell width="15%">
            <Tag color={order.statusColor}>{order.status}</Tag>
          </StatusCell>
          <Cell width="15%">
            <Amount>{order.amount}</Amount>
          </Cell>
          <Cell width="15%">
            <p>{order.date}</p>
          </Cell>
          <Cell width="15%">
            <EditButton>Edit</EditButton>
          </Cell>
        </Row>
      ))}
    </Card>
  );
}

export default Orders;
