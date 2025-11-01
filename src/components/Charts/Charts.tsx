import ChartCard from "./components/ChartCard";

import { fontSizes } from "@styles/constants";
import { useTheme } from "styled-components";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

import StyledCharts from "./Charts.styles";

import { areaChartData, donutChartData, barChartData } from "@data/charts";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

export default function DashboardCharts() {
  const theme = useTheme();
  const labelColor = theme.token.colorTextPrimary;

  return (
    <StyledCharts>
      <ChartCard
        title="Monthly Earnings"
        marketplaceValue="$56241"
        totalIncomeValue="$23651"
      >
        <div style={{ height: 250 }}>
          <Doughnut
            data={donutChartData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: {
                    color: labelColor,
                  },
                },
              },
            }}
          />
        </div>
        <div
          style={{
            marginTop: "2rem",
            fontSize: fontSizes.m,
            textAlign: "center",
            color: labelColor,
          }}
        >
          <p>Download Sales | In-Store Sales | Mail-Order Sales</p>
        </div>
      </ChartCard>

      {/* Area (Line) Chart */}
      <ChartCard
        title="Email Sent"
        marketplaceValue="$89425"
        totalIncomeValue="$56210"
        lastMonthValue="$8974"
        isTripleStat={true}
      >
        <div style={{ height: 250 }}>
          <Line
            data={areaChartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: labelColor },
                },
                y: {
                  grid: { color: theme.token.colorText, lineWidth: 0.5 },
                  ticks: { color: labelColor },
                },
              },
              plugins: {
                legend: {
                  labels: { color: labelColor },
                },
              },
            }}
          />
        </div>
      </ChartCard>

      {/* Bar Chart */}
      <ChartCard
        title="Monthly Earnings"
        marketplaceValue="$2548"
        totalIncomeValue="$6985"
      >
        <div style={{ height: 250 }}>
          <Bar
            data={{
              ...barChartData,
              datasets: barChartData.datasets.map((dataset) => ({
                ...dataset,
                stack: "Stack 0",
                borderWidth: 2,
                barThickness: 20,
                categoryPercentage: 0.9,
                barPercentage: 0.9,
              })),
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  stacked: true,
                  grid: { display: false },
                  ticks: { color: labelColor },
                },
                y: {
                  stacked: true,
                  grid: { color: theme.token.colorText, lineWidth: 0.5 },
                  ticks: { color: labelColor },
                },
              },
              plugins: {
                legend: {
                  labels: { color: labelColor },
                },
              },
            }}
          />
        </div>
      </ChartCard>
    </StyledCharts>
  );
}
