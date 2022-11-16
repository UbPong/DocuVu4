import React from 'react';
import { useState } from 'react';
import "./modal.css";

const UseProfileModal = ({ visible, onClose }) => {
   
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    

if (!visible) return null; 
    return (
        <div className='left-0  h-screen w-screen fixed top-0 font-body  backdrop-blur-sm
        flex justify-center items-center'>
            <div className=' min-w-[60%] min-h-[70%]  bg-gray100 border rounded-lg  shadow-2xl'>
                    
                <div className='flex justify-between bg-white '>  
                    <div className='ml-2 mt-2 w-30 h-7'>
                        <p>User's Profile</p>
                    </div>
                
                    <div className='flex justify-center w-8 h-8 mr-2 mt-2 bg-red-600  rounded-xl'> 
                        <button onClick={onClose} className="text-xl text-white">X</button>
                    </div>
                
                </div>
                    
                    {/* start */}
                <div className=''>

                <div className="bloc-tabs  bg-white">
                            <button className={`text-xs min-h-[20%] ${toggleState === 1 ? "tabs active-tabs" : "tabs" }`}
                            onClick={() => toggleTab(1)}>
                                Profile
                            </button>

                            <button className={`text-xs min-h-[20%] ${toggleState === 2 ? "tabs active-tabs" : "tabs" }`}
                            onClick={() => toggleTab(2)}>
                                Change Password
                            </button>

                            <button className={`text-xs min-h-[20%] ${toggleState === 3 ? "tabs active-tabs" : "tabs" }`}
                            onClick={() => toggleTab(3)}>
                                Access Control
                            </button>
                </div>

                        <div className="content-tabs">
                            <div className={toggleState === 1 ? "content  active-content" : "content"} >

                                    <div>

                                        <p className='mt-3 ml-3 text-center font-semibold border rounded-md shadow-lg max-w-[18%] max-h-'>Basic Information</p>
                                
                                        <div className="flex flex-wrap mt-4 ml-20">
                                            <div className=" mb-3 md:mb-0 mt3">
                                                <p className='text-xs font-semibold mt-2'>User ID: </p>                
                                            </div>

                                            <div className="ml-3">
                                             <p className='text-xs font-bold mt-2'>Sample Administrator</p>
                                               
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap mt-4 ml-20">
                                            <div className=" mb-3 md:mb-0 mt3">
                                                <p className='text-xs font-semibold mt-2'>Name: </p>                
                                            </div>

                                            <div className="ml-3">
                                             <p className='text-xs font-bold mt-2'>Sample User</p>
                                               
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mt-4 ml-20">
                                            <div className=" mb-3 md:mb-0 mt3">
                                                <p className='text-xs font-semibold mt-2'>Email: </p>                
                                            </div>

                                            <div className="ml-3">
                                             <p className='text-xs font-bold mt-2'>Sample Email</p>
                                               
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap mt-4 ml-20">
                                            <div className=" mb-3 md:mb-0 mt3">
                                                <p className='text-xs font-semibold mt-2'>Group: </p>                
                                            </div>

                                            <div className="ml-3">
                                             <p className='text-xs font-bold mt-2'>Sample Group</p>
                                               
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mt-4 ml-20">
                                            <div className=" mb-3 md:mb-0 mt3">
                                                <p className='text-xs font-semibold mt-2'>Lock Out: </p>                
                                            </div>

                                            <div className="ml-3">
                                             <p className='text-xs font-bold mt-2'>5</p>
                                               
                                            </div>
                                        </div>
                                            
                                    </div>                            
                           
                            </div>

                            <div className={toggleState === 2 ? "content  active-content" : "content"} >

                                <div>
                                    <p className='mt-3 ml-3 text-center font-semibold border rounded-md shadow-lg max-w-[18%] max-h-'>
                                        Reset Password
                                    </p>

                                    <form className=' max-w-[75%] mt-4 ml-20 text-center'>
                               
                                        <div className=' text-gray500 focus-within:text-gray500 mb-4 mt-6 '>   
                                            <input onChange="" className='pr-3 pl-10 py-2 min-w-[55%] h-9 placeholder-gray400 text-current rounded-xl border-none ring-1 ring-gray300 focus:ring-gray200 focus:ring-2' placeholder="Old Password" type="password"/>
                                        </div>
                                        
                                        <div className=' text-gray500 focus-within:text-gray500 mb-3 '> 
                                            <input onChange="" className='pr-3 pl-10 py-2 min-w-[55%] h-9 placeholder-gray400 text-current rounded-xl border-none ring-1 ring-gray300 focus:ring-gray200 focus:ring-2' placeholder='New Password' type="password"/>
                                        </div>

                                        <div className=' text-gray500 focus-within:text-gray500 mb-3 '> 
                                            <input onChange="" className='pr-3 pl-10 py-2 min-w-[55%] h-9 placeholder-gray400 text-current rounded-xl border-none ring-1 ring-gray300 focus:ring-gray200 focus:ring-2' placeholder='Confirm Password' type="password"/>
                                        </div>

                                        

                                    </form>

                                        <div className=' text-gray500 focus-within:text-gray500 mb-3 mt-10 '> 
                                            <button className='float-right mr-8 h-8  max-w-[30%] px-10 mb-10 text-white transition-colors duration-150 bg-blue-700 rounded-md focus:shadow-outline hover:bg-blue800 justify-center tracking-widest'>Save Password</button>
                                        </div>

                                </div>

                            </div>

                            <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                            >
                            <h2>Content 3</h2>
                            <hr />
                            <p>
                                3
                            </p>
                            </div>
                        </div>
        

                </div>
                    
            </div> 

        </div>
    );
}

export default UseProfileModal;