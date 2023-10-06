/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './shared/header/Header';
import Navber from './shared/navber/Navber';
import LeftSideNav from './shared/leftSidenav/LeftSideNav';
import RightSideNav from './shared/rightSideNav/RightSideNav';
import BreakingNews from './breakingnews/BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <BreakingNews></BreakingNews>

            <Navber></Navber>


            <div className='grid lg:grid-cols-4 gap-6 grid-cols-1'>

                <div className=' border'><LeftSideNav></LeftSideNav></div>


                <div className='text-4xl font-bold col-span-2 text-center border'>newses</div>


                <div className='border'><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;