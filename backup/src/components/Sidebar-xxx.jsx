import React from 'react';
import { useState } from "react";
import loginImg from '../assets/DocuVu.png';
import sideLogo from '../assets/logo/DocuVu-D.png';
import UserMe from '../assets/users/me.jpg';
import loginIcon from '../assets/hmb.jpg';
import {BiSearchAlt2} from "react-icons/bi";
import {AiFillDashboard, AiFillFile, AiFillFolder} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import {FaTrash} from "react-icons/fa";
import {TfiFiles} from "react-icons/tfi";


const Sidebar = () => {
    const[Open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", gap: true },
        { title: "Document Type", src: <AiFillFile/>, gap: true },
        { title: "User", src: <AiFillFolder />, gap: true },
        { title: "Group ", src: <HiUserGroup />, gap: true },
        { title: "Recyle bin", src: <FaTrash/>, gap: true },
        { title: "System Report", src: <TfiFiles/>, gap: true },
      ];
    return(
        <>
        <div className='flex relative'>
        {/*Header section */}
        <div className='absolute w-screen min-h-[8.8%] bg-[#3C8DBC] border'>
            <div className='container bg-[#3C8DBC] min-h-[8.8%] max-5xl'>
                <div className='flex flex-row py-1 items-center'>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'></div>
                    <div className='basis-1/3'>
                        <div class="flex border-1 rounded-md absolute top-2.5 ">
                            <input type="text" class="rounded-sm w-50 h-8 bg-[#374850] focus:bg-white text-gray-900 text-sm" placeholder="Search Documents"/>
                            <button class="flex items-center justify-center overflow-hidden bg-[#374850] ">
                                <BiSearchAlt2 className='roundeed-md'/>
                            </button>
                        </div>
                    </div> 
                    <div className='basis-1/3'>
                        
                    </div>
                    <div className='basis-1/3'>
                    <img  className='rounded-full w-7 float-left py-1.5' src={UserMe} alt="pong"/>
                        <button className='relative flex float-rigth justify-center items-center bg-[#3C8DBC] text-white group h-11 w-70'>
                            <p className='text-sm'>Jeyllou Maru</p>
                            <div className='absolute hidden group-focus:block  top-full min-w-full w-max bg-[#3C8DBC] shadow-md rounded'>
                                <ul className='text-left border rounded'>
                                    <li className='px-4 py-1 '><img  className='rounded-full w-10' src={UserMe} alt="pong"/></li>
                                    <li className='px-4 py-1'>Jeyllou Maru</li>
                                    <li className='px-4 py-1 bg-[#F4F4F4] text-gray-500 hover:bg-gray-700'><a href='https://www.rgbtohex.net/'>Profile</a></li>
                                    <li className='px-4 py-1 bg-[#F4F4F4] text-gray-500 hover:bg-gray-700 '><a href='https://www.rgbtohex.net/'>Logout</a></li>

                                </ul>
                            </div>
                        </button>
                        
                    </div>
                </div>
            </div>
            
        </div>
         {/*Sidebar*/}
        <div className={`${Open ? "w-60" : "w-15 "} p-5 pt-8 relative duration-300`}>
            <img src={loginIcon} alt="sample" size="15" className={`absolute cursor-pointer -right-8 top-4 w-7 border-hidden border-2  ${!Open && "rotate-180"}`}
            onClick={() => setOpen(!Open)}
            />
           <div className='flex gap-x-4 items-center'>
                {!Open?<img src={sideLogo}  alt="Sample" className={`duration-300 cursor-pointer bg-[##367FA9] absolute cursor-pointer left-0 top-2 h-10 w:20`}/>:null}
                {Open?<img src={loginImg}  alt="Sample" className={`duration-300 cursor-pointer bg-[##367FA9] absolute cursor-pointer left-50% top-2 h-10 min-w-[70%]`}/>:null} 
            </div> 
            <ul>
                <br/>
                <div className={`${Open ? "w-60" : "w-15 "} bg-black absolute left-0 h-full`}>
                {Open?<p className='text-white text-center bg-[#1E282C] py-2'>MAIN NAVIGATION</p>:null} 
                {Menus.map((menu,index)=>( 
                    <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#1E282C] 
                        ${menu.gap ? "mt-3.5" : "mt-2"} ${index === 0 && 'bg-black'}`}>
                        <span className='text-xl block float-left'>
                        {menu.src ? menu.src : <AiFillDashboard/>}
                        </span>
                        <span className={`text-sm font-extralight flex-1 duration-200 ${!Open && 'hidden'} `}>{menu.title}</span>
                    </li>
                ))}
                </div>
            </ul>   
        </div>
         {/*Body */}
        <div className="sm:text-2xl sm:p-3 sm:pt-16  sm:font-normal sm:flex-1 sm:h-screen">
            <h1 className=''>Dashboard</h1>            
        </div>
      </div>
      </>
    ); 
};
export default Sidebar;
