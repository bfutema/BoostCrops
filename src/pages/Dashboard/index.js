import React, { useState, useEffect } from 'react';

import { Graficos, GraficosList } from './styles';

import Chart from '~/components/ChartJS';

export default function Dashboard() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    function loadChartJS() {
      const data = {
        labels: [
          'Boston',
          'Worcester',
          'Springfield',
          'Lowell',
          'Cambridge',
          'New Bedford',
        ],
        datasets: [
          {
            label: 'Population',
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
          },
        ],
      };

      setChartData(data);
    }

    loadChartJS();
  }, []);

  return (
    <GraficosList>
      <Graficos>
        <Chart
          chartData={chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
      </Graficos>
    </GraficosList>
  );
}
