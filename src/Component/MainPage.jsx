import React from 'react';
import { BiPencil } from 'react-icons/bi';
import SideNav from './SideNav';
import Mail from './Mail';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaLightbulb, FaUserCheck } from 'react-icons/fa';
import { VscVerified } from 'react-icons/vsc';

const MainPage = () => {
    return (
        <div className='grid grid-cols-12 h-[100vh]'>
            <div className='bg-white  col-span-3'>

                <button class="w-36 hover:shadow-2xl mt-5  p-4 pb-4 ms-3 rounded-2xl bg-emerald-200 flex">
                    <BiPencil className='text-2xl mr-3'></BiPencil>
                    Compost</button>
            <SideNav></SideNav>
            </div>
            <div className=' col-span-8'>
                <Mail></Mail>
            </div>
            <div className=' text-2xl flex flex-col gap-y-4 items-center mt-5'>
                <BsFillCalendar2DateFill></BsFillCalendar2DateFill>
                <FaLightbulb></FaLightbulb>
                <VscVerified></VscVerified>
                <FaUserCheck></FaUserCheck>
            </div>
           
        </div>
    );
};

export default MainPage;