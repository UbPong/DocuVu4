import React from 'react'
import { useState } from "react";
import {FiHardDrive, FiMinus, FiPlus } from 'react-icons/fi'




const DashboardDocuVuStorage = ()  =>{
    const[Open, setOpen] = useState(true);

	return (
        <>
        <div className='py-2 text-lg ml-2 font-normal'>
            <h1>Dashboard</h1>
        </div>
        {/* SESSION DISK STORAGE */}
        <div>
            <div>
                <BoxStorage >
                    <div>
                        <span className='text-[15px] '>DocuVu Storage</span>
                    </div>
                    <div>
                        <span className='pt-1 duration-300'>
                            {Open ?<FiMinus className='duration-100' onClick={() => setOpen(!Open)} />:null} 
                            {!Open ?<FiPlus className='duration-100' onClick={() => setOpen(!Open)} />:null} 
                        </span>
                    </div>
                </BoxStorage>
            </div>
            {Open?<BoxContainerStorage>
                <div className="flex flex-1 gap-4 w-[50rem]">
                <BoxWrap>
                    <div className="h-20 w-20 flex items-center justify-center bg-sky-500">
                        <FiHardDrive className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-black font-bold">C: Drive</span>
                        <div className="flex items-center">
                            <strong className="text-basic text-black font-semibold">90%</strong>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-black font-light">1.48TB free of 1.79TB</span>
                        </div>
                    </div>
                </BoxWrap>
                <BoxWrap>
                    <div className="h-20 w-20 flex items-center justify-center bg-green-500">
                        <FiHardDrive className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-black font-bold">D: Drive</span>
                        <div className="flex items-center">
                            <strong className="text-basic text-black font-semibold">70%</strong>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-black font-light">1.20TB free of 2.79TB</span>
                        </div>
                    </div>
                </BoxWrap>
                </div>
            </BoxContainerStorage>:null} 
        </div>
        </>
	);
};

export default DashboardDocuVuStorage;


const BoxStorage = ({children}) =>{
    return <div className="bg-white rounded-sm p-4 flex-1   flex items-center h-12 justify-between border-0 border-t-4 border-gray-400">{children}</div>
}

const BoxContainerStorage = ({children}) =>{
    return <div className="bg-white rounded-sm  p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

const BoxWrap = ({children}) =>{
    return <div className="bg-gray-200 rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}