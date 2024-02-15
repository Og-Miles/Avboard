import React from "react";
import {
  CarouselSlide,
  ColumnChart,
  CustomCard,
  LineChart,
} from "../components";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

import man from "../../data/man.png";

const Dashboard = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-10'>
        <div className='col-span-2 h-full'>
          <CustomCard
            title='Revenue Target'
            amount='₦ 1 Billion'
            percentage='+0.07%'
            text='Since January'
            backgroundImage={man.src}
            icon={<LiaMoneyBillWaveSolid />}
            bgColor='green-700'
            bgMain='white'
          />
        </div>
        {/* Bar Chart */}
        <div className='row-span-1 lg:row-span-2 col-span-2 b-white rounded-2xl shadow-lg h-full w-full'>
          <ColumnChart />
          {/* Bar Chart ends */}
        </div>

        {/* Staffs */}
        <div className='col-span-2 lg:col-span-1 bg-white rounded-2xl'>
          <CustomCard
            title='Staffs'
            amount='25'
            percentage='+3%'
            text='Since January'
            icon={<LiaMoneyBillWaveSolid />}
            bgColor='black'
          />
        </div>

        {/* Line Chart */}

        <LineChart />
      </div>
      <p className='text-center mb-3 mt-3'>
        © 2024 All rights reserved by Aviliahealthcare.com
      </p>
    </>
  );
};

export default Dashboard;
