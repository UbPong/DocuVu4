
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import dateFormat from 'dateformat';
import { json, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'
import Modal from 'react-modal';
import { FcInfo } from 'react-icons/fc';

const AddUsersModal = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAdd, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [groupID, setGroupID] = useState("");
    const [lockOut, setLockOut] = useState("");
    const [dateExpiration, setDateExpiration] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailAddError, setEmailError] = useState("");
    // const [userNameError, setUserNameError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [groupIDError, setGroupIDError] = useState("");
    const [lockOutError, setLockOutError] = useState("");
    const [dateExpirationError, setDateExpirationError] = useState("");


    const [showResults, setShowResults] = useState(false);


    //Empty FirstName
    function handleFirstName (e) 
 {
    let firstNameValue = e.target.value;
    if (firstNameValue === "" )
    {
        setFirstNameError(true);
       
        
    }else {
        setFirstNameError(false);
        setFirstName(firstNameValue);
    }

}

//Empty LastName
function handleLastName (e) 
{
   let lastNameValue = e.target.value;
   
   if (lastNameValue === "" )
   {
       setLastNameError(true);
       
       
   }else {
       setLastNameError(false);
       setLastName(lastNameValue);
   }

}

//Empty EmailAddress
function handleEmailAddress (e) 
{
   let emailAddressValue = e.target.value;
  
   if (emailAddressValue === "" )
   {
       setEmailError(true);
       
       
   }else {
       setEmailError(false);
       setEmail(emailAddressValue);
   }

}

//Empty UserName
function handleUserName (e) 
{
   let userNameValue = e.target.value;
  
   if (userNameValue === "" )
   {
    //    setUserNameError(true);
       
       
   }else {
    //    setUserNameError(false);
       setUserName(userNameValue);
   }

}

// //Empty Password
// function handlePassword (e) 
// {
//    let passwordValue = e.target.value;
   
//    if (passwordValue === "" )
//    {
//        setPasswordError(true);
       
       
//    }else {
//        setPasswordError(false);
//        setPassword(passwordValue);
//    }

// }

// //Empty ConfirmPassword
// function handleConfirmPassword (e) 
// {
//    let confirmPasswordValue = e.target.value;
   
//    if (confirmPasswordValue === "" )
//    {
//        setConfirmPasswordError(true);
      
       
//    }else {
//        setConfirmPasswordError(false);
//        setConfirmPassword(confirmPasswordValue);
//    }

// }


//Empty DateExpiration
function handleDateExpire (e) 
{
   let dateExpirevalue = e.target.value;
   
   if (dateExpirevalue === "" )
   {
       setDateExpirationError(true);
       
       
   }else {
    setDateExpirationError(false);
       setDateExpiration(dateExpirevalue);
   }

}

//Empty Group ID
function handleGroupId  (e)  
{
    let groupIdValue = e.target.value;
   
   if (groupIdValue === "NoValue" )
   {
       setGroupIDError(true);
       
       
   }else {
    setGroupIDError(false);
       setGroupID(groupIdValue);
   }
}

// Empty LockOut
function handleLockOut  (e)  
{
    let lockOutValue = e.target.value;
   if (lockOutValue === "NoValue" )
   {
       setLockOutError(true);
       
   }else {
    setLockOutError(false);
       setLockOut(lockOutValue);
   }
}
const createdDate = dateFormat("yyyy-mm-dd");
 const newDateExpire = dateFormat(dateExpiration, "yyyy-mm-dd");
 var newFirst = firstName.substring(0, 1);
 const generateUsername = newFirst.toLocaleLowerCase()+lastName.toLowerCase();
 
 
 var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_+";
 var lenString = 12;  
 var randomstring = '';  
 
         //loop to select a new character in each iteration  
 for (var i=0; i<lenString; i++) {  
     var rnum = Math.floor(Math.random() * characters.length);  
     randomstring += characters.substring(rnum, rnum + 1);  
 }  
 
 const genratedPassword = randomstring;

    const data = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAdd,
        userName: generateUsername,
        password: genratedPassword,
        groupID: groupID,
        creationDate: createdDate,
        expireDate: newDateExpire,
        lockOut: lockOut,
        Type: "Add"
    }



    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (firstName === "" || lastName === "" || emailAdd === "" || lockOut === "NoValue" || groupID === "NoValue") 
        {
         setFirstNameError(true);
         setLastNameError(true);
         setEmailError(true);
        //  setUserNameError(true);
        //  setPasswordError(true);
        //  setConfirmPasswordError(true);
         setLockOutError(true);
         setGroupIDError(true);
         setShowResults(true);
        
        //  setUserPassError(true);
       
        }else {

           const text1 =  "Your Username is:" + generateUsername;
           const text2 =  "Your Username is:" + genratedPassword;

           const text = text1 +"\n"+text2;
         
          
          const url = 'https://localhost:44354/';
         axios.post(`${url}api/Users/AddUsers`, data).then((result) => {
            json(result.ResponseMessage);
         
         if (result.data.ResponseMessage === "User Added")
         {

            alert(text);
            


         }else if(result.data.ResponseMessage === 'Existing User')
         {
            alert("Username is Already Exist ");
         }else{
            alert("Looks Like Something Happens");
         }

        }).catch((error) => {
            alert(error);
        })

        }

    }

 
    



    return(
            <>


  
{/* <div   className='fixed inset-0 bg-transparent flex justify-center items-center'>

<div className='bg-white w-[34%] h-[40%] ml-[18%] rounded-2xl border '>
    <div className='bg-blue-400 h-[30%] rounded-t-lg'>
        <p className='px-2 py-3 text-2xl font-semibold text-white tracking-wide'>Password Generated</p>
        <p className='px-2 -mt-4 text-xm  text-white'>Mark Antipala</p>
    </div>
    
    <div>
            <p className='py-4 ml-4 text-gray-400 font-semibold text-[12px]'>Password</p>
            <div className='-mt-3 border border-gray-100 ml-4 w-[60%] h-[45px] '>
                <p className='ml-2 py-2 text-[15px]'>{genratedPassword}</p>
            </div>
            <p className='ml-8 mt-1 text-[13px] font-semibold text-blue-700 mb-3 cursor-pointer'>COPY PASSWORD</p>
            
                <div className='ml-4 border border-blue-600 w-[93%] h-[55px] rounded-xl bg-blue-100'>
                    <FcInfo className='ml-2 h-[30px] w-[20px] ' /> 
                </div>
                <div className=' w-[80%] ml-[60px] -mt-[50px] '>
                    <p  className='text-[13px] font-mono text-gray-500'> Save time by letting users recover their passwords by setting a <span className='text-blue-700'>self recovery policy</span></p>
                </div>
        
    </div>
    
</div>
</div> */}
         
         
      

            <div className='px-10 mt-10 ml-[25%] bg-white w-[50%] h-[85%] shadow-2xl shadow-secondary-600 border rounded-lg'>
            
          
                <div className='flex justify-between '>
                    <div className='ml-2 mt-2 w-30 h-7'>
                        <p>Add New User</p>
                    </div>

                    <div className='flex justify-center w-9 h-9 mr-2 mt-2 bg-red-600  rounded-xl'>
                        <button onClick={() => navigate("/user")} className="text-xl text-white">X </button>
                    </div>

                </div>

                {/* start */}
               

                <form className="">

                    <div className='w-full text-center md:mb-0 shadow-2xl  '>
                        <p className='text-xm text-center  font-semibold'>Basic Information</p>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
                        <div className="w-full md:w-1/2 px-3  md:mb-0 mt-4  ">
                            <input onChange={handleFirstName} className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Firstname" />
                            {firstNameError? <p className="text-red-500 text-[11px] italic ml-4 -mt-2">Please fill out the firstname.</p> :null}
                            
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-4 ">
                            <input  onChange={handleLastName} className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Lastname"/>
                            {lastNameError? <p className="text-red-500 text-[11px] italic ml-4 -mt-2">Please fill out the lastname.</p>  :null}
                        </div>
                    </div>

                    <div className=" w-full px-3 mt-4 mb-5 ">
                        <div className="px-3">
                            <input onChange={handleEmailAddress} className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Email Address" />
                            {emailAddError? <p className="text-red-500 text-[11px] italic ml-4 -mt-2">Please fill out the email address.</p>  :null}
                        </div>
                    </div>
                    
                    <div className='w-full text-center md:mb-0 shadow-2xl'>
                        <p className='text-xm text-center  font-semibold'>Account Setup</p>
                    </div>


                    <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">

                            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-4">
                                <input value={generateUsername} onChange={handleUserName} className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Username" disabled/>
                                {/* {userNameError? <p className="text-red-500 text-xs italic ml-4">Please fill out this field.</p>  :null} */}
                            </div>

                            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-4">
                                <div className=" ">
                                    <select onChange={handleGroupId}  className="text-xs cursor-pointer appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="select"  >
                                        <option disabled selected value='NoValue'>Select Group</option>
                                        <option className='' value="1">Administrator</option>
                                        <option className='' value="2">Accountant</option>
                                        
                                    </select>
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div> */}
                                    {groupIDError? <p className="text-red-500 text-[11px] italic ml-4 -mt-2">Please Select Group</p>  :null}
                                </div>
                            </div>
                   </div>

                    <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">

                        <div className="w-full md:w-1/2 px-3 mt-4">
                            <div className="">
                                <select  onChange={handleLockOut} className="text-xs cursor-pointer appearance-none block w-full bg-gray-100 text-black border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="select" >
                                    <option disabled selected value='NoValue'>Select Lock Out</option>
                                    <option value='0'>No Lock Out</option>
                                    <option value='3'>Lock Out: 3</option>
                                    <option value='5'>Lock Out: 5</option>
                                    <option value='10'>Lock Out: 10</option>
                                    
                                </select>
                                {/* <div className="pointer-events-none relative inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div> */}
                                {lockOutError? <p className="text-red-500 text-[11px] italic ml-4 -mt-2">Please Select Lock Out</p>  :null}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0 mt-4">
                            <input onChange={handleDateExpire} className="appearance-none block  min-w-[94%] h-9 text-xs text-gray600 border border-current rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Expiration" />
                            {dateExpirationError?<p className="text-red-500text-[11px] italic ml-4 -mt-2">Please fill out this field.</p> :null}
                        </div>
                        
                    </div>

                </form>
                    <button onClick={handleSubmit} className='min-w-[30%] float-right mr-3 text-xs h-10 m px-10 mb-4 text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest'>Save New User</button>
                                
                    

                </div>

            </>
      
    );
}

export default AddUsersModal;