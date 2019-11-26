import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

export default function Chart({ chartData }) {
  const [chartData2, setChartData] = useState({});

  useEffect(() => {
    function loadChartJS() {
      setChartData(chartData);
    }

    loadChartJS(chartData);
  }, [chartData]);

  return (
    <>
      <Bar
        data={chartData2}
        options={{
          title: {
            display: true,
            text: `Hectares`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />

      <Radar
        data={chartData2}
        options={{
          title: {
            display: true,
            text: `Mapeamento das safras`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />

      <Line
        data={chartData2}
        options={{
          title: {
            display: true,
            text: `Produtividade`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />

      <Pie
        data={chartData2}
        options={{
          title: {
            display: true,
            text: `Produtos mais vendidos`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </>
  );
}
