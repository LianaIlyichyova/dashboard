import Card from "@components/Card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import {
  Value,
  Description,
  LearnMore,
  StyledChartContainer,
  StyledContainer,
} from "./Sales.styles";
import Title from "@components/Title";
import { colors } from "@styles/constants";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const mockData = {
  sales: "52,345",
  chartData: [55, 70, 45, 65, 75, 85, 60, 100, 50, 20],
  description: "The languages only differ grammar The languages only ",
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      display: false,
      categoryPercentage: 0.8,
      barPercentage: 0.8,
    },
    y: { display: false },
  },
  responsive: true,
  maintainAspectRatio: false,
};

function Sales() {
  const chartData = {
    labels: mockData.chartData.map((_, i) => `Week ${i + 1}`),
    datasets: [
      {
        data: mockData.chartData,
        backgroundColor: colors.colorBgHeader,
        borderRadius: 3,
      },
    ],
  };

  return (
    <Card style={{ height: "max-content" }}>
      <Title color="light">Yearly Sales</Title>
      <StyledContainer>
        <div>
          <Value>{mockData.sales}</Value>
          <Description>{mockData.description}</Description>
          <LearnMore href="#">Learn more</LearnMore>
        </div>
        <StyledChartContainer>
          <Bar data={chartData} options={options} />
        </StyledChartContainer>
      </StyledContainer>
    </Card>
  );
}

export default Sales;
