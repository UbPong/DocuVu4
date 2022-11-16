import React from 'react';
import DocuTypeTabs from './DocuTypeTabs';




const DocumentType = () => {


  return (
    <>
        <div className="flex flex-col gap-4 bg-white shadow-xl rounded-xl">
            <div className='pt-2 text-lg ml-2 font-normal'>
                <h1>Document Type</h1>
            </div>
            <div className='flex flex-row justify-between '>
                    <p></p>
                    <button type='submit' id='btnAddDocu'
                    className='mr-2 ml-2 rounded-lg w-32 h-10 border-[1px] border-[#0972B8] bg-[#0972B8] font-bold text-white text-[12px]'
                    >Add Document Type
                    </button>
            </div>
            
            <div className=' h-[30rem] 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col gap-4 justify-start'>
                <div className='w-[40%]'>
                    <h1 className='font-semibold text-sm pt-2 text-center'>Document Types</h1>
                </div>
                <div className='w-full h-screen pr-3'>
                    <DocuTypeTabs/>
                </div>
            </div>
        </div>
    </>
  )
}
export default DocumentType;