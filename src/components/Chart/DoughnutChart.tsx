import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import * as S from '../../shared/ChartStyle';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['남', '여'],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: [
        '#629ACD',
        '#E79997',
        
      ],
      borderColor: [
        '#629ACD',
        '#E79997',
      ],
    },
  ],
};

export function DoughnutChart() {
  return (
    <S.ChartWrapper>
      <S.ChartHeader>일자별 성별 확진자 수</S.ChartHeader>
      <S.DoughnutContainer>
        <S.DoughnutWrapper>
          <Doughnut data={data} options={{plugins: {legend:{position: 'bottom'}}}}/>
        </S.DoughnutWrapper>
      </S.DoughnutContainer>
    </S.ChartWrapper>
  )
}