import { colors } from "@styles/constants";

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

export { areaChartData, donutChartData, barChartData };
