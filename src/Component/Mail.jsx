import React from 'react';
import { BsChevronLeft, BsChevronRight, BsThreeDotsVertical } from 'react-icons/bs';
import { TbReload } from 'react-icons/tb';
import Table from './Table';

const Mail = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-2">
        <div className="flex items-center gap-4 text-lg mt-4">
          <div className="bg-white">
            <input type="checkbox" />
            <select className="w-5">
              <option selected></option>
              <option>All</option>
              <option>None</option>
              <option>Read</option>
              <option>UnRead</option>
              <option>Starred</option>
              <option>UnStarred</option>
            </select>
          </div>
          <TbReload ></TbReload>
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </div>
        <div className='flex items-center gap-4 '>
            <h5 className='from-neutral-600'>1-50 of 100</h5>
            <div className='flex'>
                <BsChevronLeft className='mr-4'></BsChevronLeft>
                <BsChevronRight></BsChevronRight>
            </div>
        </div>
      </div>
      <div>
        <Table></Table>
      </div>
    </div>
  );
};

export default Mail;
