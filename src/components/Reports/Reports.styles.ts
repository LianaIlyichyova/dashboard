import styled from "styled-components";
import { colors, fontSizes, spacings } from "@styles/constants";

export const Container = styled.section`
  display: grid;
  gap: ${spacings.l};
  grid-template-columns: 1fr 1fr;
  font-size: ${fontSizes.m};
  color: ${({ theme }) => theme.token.colorTextPrimary};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.s};
  padding: ${spacings.l};
  border-bottom: 1px solid ${colors.black};
  transition: background-color 0.2s;
  justify-content: space-between;
  min-width: 450px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const UserCell = styled(Cell)`
  display: flex;
  align-items: center;
  gap: ${spacings.s};
`;

export const StatusCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

export const ProductName = styled.span``;

export const OrderId = styled.span`
  font-size: ${fontSizes.s};
`;

export const Amount = styled.div`
  font-weight: 500;
`;

export const Label = styled.div`
  font-size: ${fontSizes.s};
`;

export const AmountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const EditButton = styled.button`
  background: ${colors.colorTextSecondary};
  color: ${colors.white};
  border: none;
  padding: ${spacings.s} ${spacings.l};
  border-radius: ${spacings.borderRadius};
  font-size: ${fontSizes.s};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.colorBgHeader};
  }
`;
