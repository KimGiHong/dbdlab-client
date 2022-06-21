import React from 'react';
import type { NextPage } from 'next';
import SideBar from 'components/Sidebar/Sidebar';
import {LineChart} from 'components/Chart/LineChart';
import styled from '@emotion/styled';
import { BarChart } from 'components/Chart/BarChart';

const Positioner = styled.div`
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

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <Positioner>
        <LineChart />
        <BarChart />
      </Positioner>
    </>
  );
};

export default Home;
