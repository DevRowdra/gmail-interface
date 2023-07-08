import React from 'react';
import { BiSolidInbox } from 'react-icons/bi';
import { BsChevronDown, BsClock } from 'react-icons/bs';
import { MdStarBorder } from 'react-icons/md';
import { VscSend } from 'react-icons/vsc';
import { GrDocument } from 'react-icons/gr';

const SideNav = () => {
    return (
        <div className='mt-10'>
            <div className='ps-8 mr-8 flex items-center bg-slate-500 py-2 '><BiSolidInbox className='mr-6'></BiSolidInbox> Inbox</div>
            <div className='ps-8 mr-8 flex items-center py-2 '><MdStarBorder className='mr-6 text-lg'></MdStarBorder> Starred</div>
            <div className='ps-8 mr-8 flex items-center py-2 '><BsClock className='mr-6'></BsClock> Snoozed</div>
            <div className='ps-8 mr-8 flex items-center py-2 '><VscSend className='mr-6'></VscSend> Send</div>
            <div className='ps-8 mr-8 flex items-center py-2 '><GrDocument className='mr-6'></GrDocument> Drafts</div>
            <div className='ps-8 mr-8 flex items-center py-2 '><BsChevronDown className='mr-6'></BsChevronDown> More</div>

        </div>
    );
};

export default SideNav;