import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

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
            text: `Largest Cities In City`,
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
            text: `Largest Cities In City`,
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
            text: `Largest Cities In City`,
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
