import React, { useEffect, useState } from 'react';
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
import { getCovid19GenAgeCaseInfJson } from '../../api/Api';

interface BarChartProps {
  confCase: string,
  stateDt: string,
  gubun: string
}

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


export function BarChart() {
  const [barChartData,setBarChartData] = useState<BarChartProps[]>([]);
  const labels = ['11/01', '11/02', '11/03', '11/04', '11/05', '11/06', '11/07'];
  
  const result = (date: any) => {
    return(
      barChartData && barChartData.filter((item) => item.stateDt === date).map((item) => Number(item.confCase)).reduce(function add(sum: any, currValue: any) {
        return sum + currValue;
      }, 0)
    )
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Bar Dataset',
        data: [result("20211101"), result("20211102"), result("20211103"), result("20211104"), result("20211105"), result("20211106"), result("20211107")],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  useEffect(() => {
    getCovid19GenAgeCaseInfJson().then((res) => {
      res && setBarChartData(res.data.items.item);
    })
  }, []);
  
  return (
    <S.ChartWrapper>
      <S.ChartHeader>일자별 연령대 확진자 수</S.ChartHeader>
      <S.ChartContainer>
        <Bar options={options} data={data} />
      </S.ChartContainer>
    </S.ChartWrapper>
  )
}
