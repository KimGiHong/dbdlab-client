import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as S from '../../shared/ChartStyle';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
};

const labels = ['11/01', '11/02', '11/03', '11/04', '11/05', '11/06', '11/07'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Bar Dataset',
      data: [200, 400, 800 , 1200, 1600, 1800, 2000],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChart() {
  return (
    <>
      <S.ChartHeader>일자별 연령대 확진자 수</S.ChartHeader>
      <S.ChartContainer>
        <Bar options={options} data={data} />
      </S.ChartContainer>
    </>
  )
}
