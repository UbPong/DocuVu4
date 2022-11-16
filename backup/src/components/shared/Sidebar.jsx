import React from 'react';
import { useState } from 'react'; 
import loginIcon from './img/hamb.jpg';
import sideLogo from './img/DocuVu-C.png';
import loinImg from './img/DocuVu-A.png';
import {AiFillDashboard, AiFillFile, AiFillFolder} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import {FaTrash} from "react-icons/fa";
import {TfiFiles} from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Sidebar = () =>{
    const[toOpen, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", path: "/dashboard", gap: true },
        { title: "Document Type", src: <AiFillFile/>, path: '/documenttype', gap: true },
        { title: "User", src: <AiFillFolder />, path: '/user', gap: true },
        { title: "Group ", src: <HiUserGroup />, path: '/group', gap: true },
        { title: "Recyle bin", src: <FaTrash/>, path: '/recyclebin', gap: true },
        { title: "System Report", src: <TfiFiles/>, path: '/systemreport', gap: true },
      ];
    return(
        
        <div className={`bg-neutral-900  ${toOpen ? "w-60" : "w-[4.5rem]"} p-3 flex flex-col text-white relative duration-100`}> 
            {/* Session for Top part */}
           <div className='flex-none items-center gap-2 px-5 py-5 bg-[# 367FA9] duration-100'>
                <img src={loginIcon} alt="sample" size="15" className={`absolute -right-8 top-4 w-7 border-hidden border-2 duration-100 `}
                     onClick={() => setOpen(!toOpen)}
                 />
                {!toOpen?<img src={sideLogo}  alt="Sample" className={`duration-100 absolute cursor-pointer right-3 top-2 h-10 w-9`}/>:null}
                {toOpen?<img src={loinImg}  alt="Sample" className={`duration-100 absolute cursor-pointer left-50% top-2 h-10 max-w-60`}/>:null} 
            </div> 
            {/* Session for Links */}
            <div className='flex-1'>
            <ul>
                <div className={`${toOpen ? "w-60" : "w-15 "} bg-neutral-900  absolute left-0 h-full`}>
                {toOpen?<p className='text-white text-center bg-[#1E282C] py-2'>MAIN NAVIGATION</p>:null} 
                {Menus.map((menu,index)=>( 
                    <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#1E282C] 
                        ${menu.gap ? "mt-3.5" : "mt-2"} ${index === 0 && 'bg-black'}`} >
                        <Link to={menu?.path} key={index} >
                            <span className='text-xl block float-left ml-5'>
                                {menu.src ? menu.src : <AiFillDashboard/>}
                            </span>
                            <span className={`text-sm font-extralight flex-1 duration-200 ml-2 ${!toOpen && 'hidden'} `}>{menu.title}</span>
                        </Link>
                      
                    </li>
                ))}
                </div>
            </ul>  
            </div>
        </div>
    );
};
 
export default Sidebar;