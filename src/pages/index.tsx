import React from 'react';
import type { NextPage } from 'next';
import SideBar from 'components/Sidebar/Sidebar';
import {LineChart} from 'components/Chart/LineChart';

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <LineChart />
    </>
  );
};

export default Home;
