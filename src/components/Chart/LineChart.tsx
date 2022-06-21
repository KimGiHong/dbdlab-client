import React, { useEffect, useState } from 'react';
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
import { getCovid19InfStateJson } from '../../api/Api';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

interface ChartDataProps {
  decideCnt: string,
  stateDt: string,
  stateTime: string
}

const options = {
  plugins: {
    legend: {
      display: false,
    }
  },

};

export const LineChart = () => {
  const [lineChartData,setLineChartData] = useState<ChartDataProps[]>([]);

  const labels = lineChartData.map((item) => item.stateDt.replace(/\B(?=(\d{2})+(?!\d))/g,'/').substring(6,11)).sort();

  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        backgroundColor: '#E79997',
        borderColor: '#E79997',
        borderWidth: 2,
        fill: false,
        data: lineChartData.map((item) => item.decideCnt),
      },
    ],
  
  };

  useEffect(() => {
    getCovid19InfStateJson().then((res) => {
      res && setLineChartData(res.data.items.item);
    })
  }, []);

  return (
    <>
      <S.ChartHeader>코로나 일자별 확진자 수</S.ChartHeader>
      <S.ChartContainer>
        <Line data={data} options={options}/>
      </S.ChartContainer>
    </>
  );
}
