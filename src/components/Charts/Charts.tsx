import ChartCard from "./components/ChartCard";

import { colors, fontSizes } from "@styles/constants";
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

const donutChartData = {
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: ["rgba(13, 202, 240, 0.8)", "#7A6FBE", "#2A3142"],
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 2,
    },
  ],
  labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
};

const areaChartData = {
  labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
  datasets: [
    {
      label: "Series A",
      data: [0, 60, 100, 40, 180, 120, 0],
      borderColor: "rgba(52, 195, 143, 1)",
      backgroundColor: "rgba(52, 195, 143, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: "Series B",
      data: [0, 40, 80, 20, 160, 80, 0],
      borderColor: "rgba(122, 111, 190, 1)",
      backgroundColor: "rgba(122, 111, 190, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: "Series C",
      data: [0, 80, 120, 60, 240, 160, 0],
      borderColor: "rgba(13, 202, 240, 1)",
      backgroundColor: "rgba(13, 202, 240, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

const barChartData = {
  labels: [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
  ],
  datasets: [
    {
      label: "Marketplace",
      data: [60, 70, 80, 90, 75, 65, 85, 95, 70, 80, 90, 70],
      backgroundColor: "rgba(13, 202, 240, 0.6)",
      borderColor: colors.colorTextSecondary,
    },
    {
      label: "Total Income",
      data: [100, 110, 105, 120, 115, 100, 95, 105, 120, 110, 100, 115],
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderColor: colors.colorTextSecondary,
    },
  ],
};

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
