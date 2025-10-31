import styled from "styled-components";
import { colors, spacings } from "@styles/constants";

export const Container = styled.div`
  display: grid;
  gap: ${spacings.l};
  padding: ${spacings.l};
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: ${spacings.m};
  color: ${colors.colorTextTertiary};
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacings.s} ${spacings.m};
  background-color: ${colors.colorBgSecondary};
  border-radius: ${spacings.borderRadius};
  margin-bottom: ${spacings.s};
`;

export const HeaderCell = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  font-size: 13px;
  font-weight: 600;
  color: ${colors.colorTextTertiary};
  flex-shrink: 0;
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

export const UserName = styled.span`
  font-size: 14px;
  color: ${colors.colorTextTertiary};
`;

export const ProductName = styled.span`
  font-size: 14px;
  color: ${colors.colorTextTertiary};
`;

export const OrderId = styled.span`
  font-size: 13px;
  color: ${colors.colorTextTertiary};
`;

export const Amount = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.colorTextTertiary};
`;

export const Date = styled.div`
  font-size: 14px;
  color: ${colors.colorTextTertiary};
`;

export const Label = styled.div`
  font-size: 12px;
  color: ${colors.colorTextTertiary};
`;

export const AmountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const EditButton = styled.button`
  background: ${colors.colorTextTertiary};
  color: ${colors.colorBgPrimary};
  border: none;
  padding: 0 ${spacings.m};
  border-radius: ${spacings.borderRadius};
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.colorTextTertiary};
  }
`;
