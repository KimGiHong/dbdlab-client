import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import * as S from '../../shared/ChartStyle';
import { getCovid19GenAgeCaseInfJson } from '../../api/Api';
import { LineChartProps } from '../../interface/chart.props';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const returnColor = (age: string) => {
  switch (age) {
    case "0-9":
      return "#629ACD"
    case "10-19":
      return "#9287D8"      
    case "20-29":
      return "#CD87D8" 
    case "30-39":
      return "#ff8787"
    case "40-49":
      return "#63e6be"      
    case "50-59":
      return "#ffe066" 
    case "60-69":
      return "#ff922b"
    case "70-79":
      return "#82c91e"      
    case "80 이상":
      return "#c5f6fa"           
    default:
      return "black"
  }
}

export function BottomChart() {
  const [ChartData,setChartData] = useState<LineChartProps[]>([]);
  const labels = ['11/01', '11/02', '11/03', '11/04', '11/05', '11/06', '11/07'];
  const [selectValue, setSelectValue] = useState<string>('20211101');
  const onChangeSelect = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectValue(e.target.value);
  };

  //Bar Chart
  // 일자별 연령대 확진자 수
  const barResult = (date: string, age: string) => {
    return(
      ChartData && ChartData.filter((item) => item.stateDt === date && item.gubun === age).map((item) => Number(item.confCase)).reduce(function add(sum: number, currValue: number) {
        return sum + currValue;
      }, 0)
    )
  };

  const barChartData = (age: string) => [{
      label: age,
      data: [barResult("20211101", age),barResult("20211102", age),barResult("20211103", age),barResult("20211104", age),barResult("20211105", age),barResult("20211106", age),barResult("20211107", age)],
      borderColor: returnColor(age),
      backgroundColor: returnColor(age)
  }]

  const BarChartdata = {
    labels,
    datasets: [
      barChartData("0-9")[0],
      barChartData("10-19")[0],
      barChartData("20-29")[0],
      barChartData("30-39")[0],
      barChartData("40-49")[0],
      barChartData("50-59")[0],
      barChartData("60-69")[0],
      barChartData("70-79")[0],
      barChartData("80 이상")[0],
    ],
  };

  // Doughnut Chart
  // 일자별 성별 확진자 수
  const doughnutResult = (gender: string, date: string ) => {
    return(
      ChartData && ChartData.filter((item) => item.gubun === gender && item.stateDt === date).map((item) => Number(item.confCase)).reduce(function add(sum: number, currValue: number) {
        return sum + currValue;
      }, 0)
    )
  };

  const DoughnutChartdata = {
    labels: ['남', '여'],
    datasets: [{
        data: [doughnutResult("남성", selectValue), doughnutResult("여성", selectValue)],
        backgroundColor: [
          '#629ACD',
          '#E79997',
          
        ],
        borderColor: [
          '#629ACD',
          '#E79997',
        ],
      },
    ]
  };

  useEffect(() => {
    getCovid19GenAgeCaseInfJson().then((res) => {
      res && setChartData(res.data.items.item);
    })
  }, []);

  return (
    <S.Flex>
      <S.ChartWrapper>
        <S.ChartHeader>일자별 연령대 확진자 수</S.ChartHeader>
        <S.ChartContainer>
          <Bar options={{
            plugins: {legend: {position: 'bottom'}},
            indexAxis: 'y' as const,
            responsive: true,
            maintainAspectRatio :false,
            scales:{
              x:{
                stacked:true
              },
              y:{
                stacked:true
              },
          }
            }} data={BarChartdata} />
        </S.ChartContainer>
      </S.ChartWrapper>
      <S.ChartWrapper>
        <S.ChartHeader>일자별 성별 확진자 수</S.ChartHeader>
        <S.Select value={selectValue} onChange={onChangeSelect}>
          <option value="20211101">11/01</option>
          <option value="20211102">11/02</option>
          <option value="20211103">11/03</option>
          <option value="20211104">11/04</option>
          <option value="20211105">11/05</option>
          <option value="20211106">11/06</option>
          <option value="20211107">11/07</option>
        </S.Select>
        <S.DoughnutContainer>
          <S.DoughnutWrapper>
            <Doughnut data={DoughnutChartdata} options={{plugins: {legend:{position: 'bottom'}}}}/>
          </S.DoughnutWrapper>
        </S.DoughnutContainer>
      </S.ChartWrapper>    
    </S.Flex>
  )
}
