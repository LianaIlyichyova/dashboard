import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

import StyledChartContainer, { StyledLabel } from "./MiniBarChart.styles";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

interface MiniBarChartProps {
  label: string;
  value: string | number;
  color: string;
  data: number[];
}

export default function MiniBarChart({
  label,
  value,
  color,
  data,
}: MiniBarChartProps) {
  const chartData = {
    labels: data.map((_, i) => i.toString()),
    datasets: [
      {
        data,
        backgroundColor: color,
        barThickness: 6,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        display: false,
        categoryPercentage: 0.9,
        barPercentage: 0.9,
      },
      y: { display: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <StyledChartContainer>
      <div className="chart-wrapper">
        <Bar data={chartData} options={options} />
      </div>
      <StyledLabel>
        {label} {value}
      </StyledLabel>
    </StyledChartContainer>
  );
}
