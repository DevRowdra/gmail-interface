import React from 'react';
import { BsChevronLeft, BsChevronRight, BsThreeDotsVertical } from 'react-icons/bs';
import { TbReload } from 'react-icons/tb';
import Table from './Table';

const Mail = () => {
  return (
    <div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between mx-2">
        <div className="flex items-center gap-4 text-lg mt-4">
          <div className="bg-white">
            <input type="checkbox" />
            <select className="w-5">
              <option defaultValue=""></option>
              <option>All</option>
              <option>None</option>
              <option>Read</option>
              <option>UnRead</option>
              <option>Starred</option>
              <option>UnStarred</option>
            </select>
          </div>
          <TbReload />
          <BsThreeDotsVertical />
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <h5 className="from-neutral-600">1-50 of 100</h5>
          <div className="flex">
            <BsChevronLeft className="mr-4" />
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Mail;
