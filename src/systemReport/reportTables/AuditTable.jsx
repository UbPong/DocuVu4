import React from 'react';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { IoCreateSharp } from 'react-icons/io5';
import { VscOpenPreview } from 'react-icons/vsc';


const AuditTable = () => {
    const [posts, setPost] = useState([]);

	const columns = [{
		name: <h1 className='font-bold text-black'>Uploaded By</h1>,
		selector: (row) => row.name,
        sortable: true,
		maxWidth: "300px",
		
	},
	{
		name: <h1 className='font-bold text-black'>Uploaded Date</h1>,
		selector: (row) => <div className=''>10-20-2002 02:13:08 PM</div>,
        sortable: true,
		maxWidth: "300px",
		
		
	},
	{
		name: <h1 className='font-bold text-black'>Document Type</h1>,
		selector: (row) => row.username,
        sortable: true,
		maxWidth: "300px",
		
	
	},
	{
		name: <h1 className='font-bold text-black'>Department</h1>,
		selector: (row)=> <div className=''>Admin</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
    {
		name: <h1 className='font-bold text-black'>Document Index</h1>,
		selector: (row)=> <div className=''>Child</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
];
	useEffect(() => {
		const fetchPosts = async () => {
			try{
				const res = await axios.get('https://jsonplaceholder.typicode.com/users');
				setPost(res.data);

			} catch (error){
				console.log(error);
			}
		}	
		fetchPosts();	
	}, []);

    return(
        <>
            <div className='relative'>
                <DataTable 
						title=""
                        columns={columns} 
                        data={posts}
                        pagination
                        paginationDefaultPage
						selectableRows
						selectableRowsHighlight
						fixedHeader
                        fixedHeaderScrollHeight='300px'
                        highlightOnHover
                        actions={
                                <>
                                    <div className='relative'>
                                        <button type='submit' id='auditGenerate'
                                            className='text-center pl-5 rounded-lg w-32 h-10 border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px]'
                                        >
                                            <IoCreateSharp size={20} className='text-white text-[13px sm:absolute sm:top-[25%] sm:left-[8%] -translate-y-1/2]' />
                                            Generate Report 
                                        </button>
                                    </div>
                                    <div className='relative'>
                                        <button type='submit' id='bulkUpload'
                                            className='text-center pl-3 rounded-lg w-32 h-10 border-[1px] border-red-700 bg-red-700 text-white text-[12px]'
                                        >
                                            <VscOpenPreview size={20} className='text-white text-[13px sm:absolute sm:top-[28%] sm:left-[5%] -translate-y-1/2]' />
                                            Preview Report
                                        </button>
                                    </div>
                                </>
                        }
                        subHeader
                        subHeaderAlign = "center"
                        subHeaderComponent ={
                                <>
                                    <div className='p-2'>
                                        <table className='table-auto ml-10  '>
                                            <tbody className='p-10'>
                                                <tr>
                                                    <td>
                                                        <select 
                                                            id='auditUploadBy' 
                                                            className='rounded-md h-8 w-full mr-5 border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value='1'>Uploaded By</option>
                                                            <option value='2'>sdddddddddddd</option>
                                                            <option value='3'>sdddddddddddd</option>
                                                            <option value='4'>sdddddddddddd</option>
                                                            <option value='5'>sdddddddddddd</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="auditUploadDate"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="2">Uploaded Date</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="audtitDocuType"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                        <option value="1">Document Type</option>
                                                    </select>
                                                    </td>
                                                    <td>
                                                        <select id="autiDept"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="1">Department</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="auditDocuIndex"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="1">Document Index</option>
                                                        </select>
                                                    </td>       
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                        }
                    />
            </div>
        </>
    ) 
}
export default  AuditTable;