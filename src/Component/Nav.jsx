import React from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import { BsQuestionLg } from 'react-icons/bs';
import { PiDotsNineBold } from 'react-icons/pi';
const Nav = () => {
  return (
    <div className="navbar justify-between  bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl">Gmail</a>
        </div>
      </div>
      {/* ================================================ */}
      <div className="w-full flex justify-center">
        <form className="w-3/5 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:shadow-md">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5"
            >
              <TbAdjustmentsHorizontal className="text-2xl text-black" />
            </button>
          </div>
        </form>
      </div>
      {/* ===================================================== */}
      <div className="">
        <div className='flex'>
            <div className=' flex  justify-center items-center '>
                <PiDotsNineBold className='text-3xl mr-3'></PiDotsNineBold>
<BsQuestionLg className='text-3xl mr-3'></BsQuestionLg>
            <FiSettings className='text-3xl mr-3'></FiSettings>
            </div>
          <div className="avatar  ">
            <div className="w-12  rounded-full">
              <img src="https://images.unsplash.com/photo-1581704906775-891dd5207444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
