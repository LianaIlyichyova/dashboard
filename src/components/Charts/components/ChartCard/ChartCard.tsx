import { type ReactNode } from "react";
import Card from "@components/Card";
import Title from "@components/Title";

import { StatGrid } from "./ChartCard.styles";
interface ChartCardProps {
  title: string;
  marketplaceValue: string;
  totalIncomeValue: string;
  children: ReactNode;
  isTripleStat?: boolean;
  lastMonthValue?: string;
}

function ChartCard({
  title,
  marketplaceValue,
  totalIncomeValue,
  lastMonthValue,
  children,
  isTripleStat = false,
}: ChartCardProps) {
  return (
    <Card>
      <Title>{title}</Title>

      <StatGrid $isTriple={isTripleStat}>
        <div className="stat-item">
          <div className="value">{marketplaceValue}</div>
          <div className="label">Marketplace</div>
        </div>

        <div className="stat-item">
          <div className="value">{totalIncomeValue}</div>
          <div className="label">Total Income</div>
        </div>

        {isTripleStat && (
          <div className="stat-item">
            <div className="value">{lastMonthValue}</div>
            <div className="label">Last Month</div>
          </div>
        )}
      </StatGrid>

      {children}
    </Card>
  );
}

export default ChartCard;
