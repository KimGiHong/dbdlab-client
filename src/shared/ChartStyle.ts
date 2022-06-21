import styled from "@emotion/styled";

export const ChartHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #FFF;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  padding-left: 30px;
`;

export const ChartContainer = styled.div`
  margin: 50px;
  width: 700px;
  canvas{
    background-color: #FFF;
  }
`;