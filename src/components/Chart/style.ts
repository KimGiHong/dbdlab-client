import styled from "@emotion/styled";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 280px;
  margin-top: 30px;
  background-color: #fff;
  width: 85%;
  height: 95vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  padding-left: 30px;
`;

export const ChartContainer = styled.div`
  margin: 50px;
  width: 800px;
  canvas{
    background-color: #FFF;
  }
`;