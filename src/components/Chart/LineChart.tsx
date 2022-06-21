import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as S from '../../shared/ChartStyle';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['11/01', '11/02', '11/03', '11/04', '11/05', '11/06', '11/07'];

const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      backgroundColor: '#E79997',
      borderColor: '#E79997',
      borderWidth: 2,
      fill: false,
      data: [0, 200, 400, 500, 600, 300, 800],
    },
  ],

};

const options = {
  plugins: {
    legend: {
      display: false,
    }
  },

};

export const LineChart = () => {
  return (
    <>
      <S.ChartHeader>코로나 일자별 확진자 수</S.ChartHeader>
      <S.ChartContainer>
        <Line data={data} options={options}/>
      </S.ChartContainer>
    </>
  );
}
