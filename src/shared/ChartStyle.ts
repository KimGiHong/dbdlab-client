import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  width: 100%;
  border-top: 2px solid lightgray;
  background-color: #FFF;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFF;
  width: 100%;
  border-right: 2px solid lightgray;
`;

export const ChartHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #FFF;
  border-bottom: 2px solid lightgray;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  padding-left: 50px;
`;


export const Select = styled.select`
  margin-left: 90%;
  width: 8%;
`;

export const ChartContainer = styled.div`
  margin: 50px;
  width: 700px;
  canvas{
    background-color: #FFF;
  }
`;

export const DoughnutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #FFF;
`;

export const DoughnutWrapper = styled.div`
  background-color: #FFF;
  width: 400px;
  canvas{
    background-color: #FFF;
  }
`;