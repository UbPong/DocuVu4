import React from 'react'
import { useState,useEffect } from 'react';
// import AddUser from './Modals/AddUsersModal';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaUserEdit,FaLock } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';


const User = () => {

// const [showUserModal, setShowUserModal] = useState(false);
// const handleClose = () => setShowUserModal(false);
const [users, setUsers] = useState([]);
const navigate = useNavigate();

const url = 'https://localhost:44354/';

const getUser = () => 
{
    axios.get(`${url}/api/Users/GetUsers`).then((json) => {
            setUsers(json.data.listUsers);
            console.log(json)
         }).catch((error) => {
            console.log(error);
         })
}

useEffect(() => {
    getUser();
},[])


const handleDelete = (id) => {


if (id > 0) {
    const deletedata =
 {
    ID : id,
    Type : "Delete"
 }
 axios
 .post(`${url}/api/Users/AddUsers`, deletedata)
 .then((json) => {
    console.log(json);
 }).catch((error) => {
    console.log(error);
 });
}


  

}



const handleEdit = (id) => {

   navigate("/", alert(id));

}


    return (
        <div className=''>
                <div className=' p-4 min-h-0 overflow-auto'>
                    <div className=''>
                            
                            {/* <AddUser onClose={handleClose} visible={showUserModal}/> */}
                            {/* onClick={() => setShowUserModal(true)} */}
                            <div className="overflow-auto rounded-lg shadow  ">
                                <button  onClick={() => navigate("/user/addusers")} className='mb-4 ml-2 mt-2 inline-block px-6 py-2 border-2 border-blue-600 bg-blue-200 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Add New User</button>
                            <table className="w-full  ">
                                    <thead className="bg-gray-50 border-b-2 border-gray-200 text-center ">
                                        <tr>
                                            {/* <th className="w-20 p-3 text-sm font-semibold tracking-wide ">No.</th> */}
                                            <th className="w-20 p-3 text-sm font-semibold tracking-wide ">Username</th>
                                            <th className="w-20 p-3 text-sm font-semibold tracking-wide ">User's Name</th>
                                            <th className="w-20 p-3 text-sm font-semibold tracking-wide ">Department</th>
                                            <th className="w-32 p-3 text-sm font-semibold tracking-wide ">Action</th>
                                          </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-center">

                                        {
                                            users && users.length > 0
                                            ?
                                            users.map((user, index) => {
                                              return (
                                                  


                                        <tr className="bg-white" key={index}>
                                            {/* <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                           
                                            </td> */}
                                            <td className="p- text-sm text-gray-700 whitespace-nowrap">
                                              {user.userName}
                                            </td>

                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            {user.firstName} {user.lastName}  
                                            </td>

                                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                {/* {user.creationDate} */}
                                                Administrator
                                            </td>
                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                
                                                <button className='text-green-600 mr-2' onClick={() => handleEdit(user.ID)}><FaUserEdit className='w-[20px] h-[15px]'/></button>

                                                <button className='text-gray-700 mr-2' ><MdLogout className='w-[20px] h-[15px]' /></button>

                                                <button className='text-blue-500 mr-2' ><FaLock className='w-[20px] h-[15px]' /></button>

                                                <button className='text-red-700 mr-2' onClick={() => handleDelete(user.ID)}><BsTrash className='w-[20px] h-[15px]' /></button>
                                            </td>
                                           
                                        </tr> 
                                       
                                                )
                                            })
                                            :
                                            "No Data"
                                        }


                                      
                                    </tbody>
                            </table>
                            </div>
                    </div>
                </div>
        </div>
    );

}
export default User;