import React from 'react';
import { BiSolidInbox } from 'react-icons/bi';
import { BsChevronDown, BsClock } from 'react-icons/bs';
import { MdStarBorder } from 'react-icons/md';
import { VscSend } from 'react-icons/vsc';
import { GrDocument } from 'react-icons/gr';

const SideNav = () => {
  return (
    <div className="mt-10">
      <div className="ps-8 mr-8 flex items-center bg-slate-500 py-2">
        <BiSolidInbox className="mr-4 sm:mr-6" />
        <span className="hidden sm:inline">Inbox</span>
      </div>
      <div className="ps-8 mr-8 flex items-center py-2">
        <MdStarBorder className="mr-4 sm:mr-6 text-lg" />
        <span className="hidden sm:inline">Starred</span>
      </div>
      <div className="ps-8 mr-8 flex items-center py-2">
        <BsClock className="mr-4 sm:mr-6" />
        <span className="hidden sm:inline">Snoozed</span>
      </div>
      <div className="ps-8 mr-8 flex items-center py-2">
        <VscSend className="mr-4 sm:mr-6" />
        <span className="hidden sm:inline">Send</span>
      </div>
      <div className="ps-8 mr-8 flex items-center py-2">
        <GrDocument className="mr-4 sm:mr-6" />
        <span className="hidden sm:inline">Drafts</span>
      </div>
      <div className="ps-8 mr-8 flex items-center py-2">
        <BsChevronDown className="mr-4 sm:mr-6" />
        <span className="hidden sm:inline">More</span>
      </div>
    </div>
  );
};

export default SideNav;
