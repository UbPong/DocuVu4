import React from 'react'
import LogoImg from '../assets/loginlogo.png'
import Ubixlogo from '../assets/Docuvu_logo1.png'
// import Nxp from '../assets/logonxp1.png'
import { FaUser } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'
import Swal from 'sweetalert2'
import axios from "axios"
import {   useState } from "react";
// import {sha1} from 'crypto-hash';
// import ReactLoading from "react-loading";

import { useNavigate} from  'react-router-dom';

//sample


function Login () {

//sample
const navigate = useNavigate();

//getting data from input
 const [userName, setuserName] = useState("");
 const [userNameError, setUserNameError] = useState(false);
 const [userPassword, setuserPassword] = useState("");
 const [userPassError, setUserPassError] = useState(false);
 
const [loginError, setLoginError] = useState(false);

//  const [authenticated, setauthenticated] = useState(
//     localStorage.setItem(localStorage.setItem("authenticated") || false)
//   );
// // useEffect(() => {
// //     const loggedInUser = localStorage.getItem("authenticated");
// //     if (loggedInUser) {
// //       setauthenticated(loggedInUser);
// //     }
// // }

 //get the setValue of Input
function handleUsername (e) 
 {
    let userNameValue = e.target.value;
    if (userNameValue === "" )
    {
        setUserNameError(true);
        console.warn(userNameValue);
    }else {
        setUserNameError(false);
        setuserName(userNameValue);
    }

}

function handlePassword  (e) 
 {
    let userPassValue = e.target.value;
    if (userPassValue ===  "")
    {
        setUserPassError(true);
    }else {
        setUserPassError(false);
        setuserPassword(userPassValue);
    }

}


//  const handleUsername = (value) => {
//     setuserName(value);
//  }

//  const handlePassword = (value) => {
//     setpassword(value);
   
    
//  }



    const handleLogin = (e) =>
    {
        e.preventDefault();
       if (userName === "" || userPassword === "") 
       {
        setUserNameError(true);
        setUserPassError(true);
        setLoginError(false);
      
       }
       else
       {

       
            const data =
            {
              userName : userName,
              password : userPassword,
              Type : "Signin"

            };
            console.log(data);



            // axios.post(`${url}api/Users/AddUsers`, data).then((result) => {

            //     //     console.log(result.data);
        
            //     // }).catch((error) => {
            //     //     alert(error);
            //     // })
        
            
            
           const url = 'https://localhost:44354/';

           axios.post(`${url}api/SignIn/Users`, data).then((result) => {

            
                        let getResult = result.data.ResponseMessage;
                     

                        console.log(result.data.ResponseMessage);
                        console.log(result.data);

                        if (getResult === "Valid User")
                        {
                            alert("wow");
                        }else if (getResult === "Invalid User")
                        {
                            setLoginError(true);
                          
                        }else {
                           
                        }

                        // switch (getResult) 
                        // {
                        //     case "Valid User":
                        //     text = "Success";
                        //     msg = "Valid Credentials";
                        //     icon = "success";
                        //     break;
            
                        //     case "Invalid User":
                        //     text = "Invalid Credentials";
                        //     msg = "Incorrect Username and Password Try again!";
                        //     icon = "error";
                        //     break;
            
                        //     default:
                        //     text = "No value found";
                        //     msg = "Looks Like Something Happens";
                        //     icon = "warning";
                        // }



                        
            
                        //   Swal.fire
                        //   ({
                        //     title: text,
                        //     text: msg,
                        //     icon: icon,
                        //     showConfirmButton: false,
                        //     timer: 3000
                        //     // onBeforeOpen: () => {
                        //     //     Swal.showLoading()
                        //     // },
                        //     })
                            // .then(() => {
                                
                            //     if (icon === "error") {
                            //         navigate("/login");
                            //     }else if(icon === "success"){ 
                            //         navigate("/dashboard");
                            //     }else {
                            //         navigate("/login");
                            //     }

                            // })
                           
            
                    }).catch((error) => {
                        alert(error);
                    })
            }
         

       
    //    }else if (userPassword === "") {

    //    

    //    }
    //    else
    //    {
        
    //     const data = {
            
    //         userName : userName,
    //         password : userPassword
    //     };

    //     console.log(data);
    //     // const url ='https://localhost:44304/api/Test/Login';
    //  
      


    }

 
        return (
            <div className='h-screen sm:grid-cols-1 font-body grid place-items-center '  >        

             
            <div className='sm:block bg-transparent  '>
    
                    <div className='max-w-[400px] w-full px-8 bg-transparent'>
                    
                    <div className='mb-2'>
                   
                        <img src={LogoImg} alt="DocuVu"  className='"object-fill h-38 w-96 '/>
                       
                        
                        {/* <p className='text-center text-sm'>Welcome to DocuVu</p> */}
                    </div>
                    
                       
                        <form className='block'>

                            
          
                                <div className=' ml-2 mb-1'>
                                    {userNameError?<span className="text-[10.5px] text-rose-600 italic font-semibold "> Username is required*</span> :null}       
                                </div>
                                <div className='mb-6 relative flex items-center text-gray-500 focus-within:text-gray-500'> 
                                    <FaUser className='w-4 h-4 absolute ml-3  pointer-events-none'/>
                                    <input onChange={handleUsername} className='pr-3 pl-10 py-2 w-full placeholder-gray-400 text-current rounded-xl border-none ring-1 ring-gray-300 focus:ring-gray-400 focus:ring-2' placeholder="Username" type="text"/>
                                   
                                </div>
                               


                                <div className=' ml-2 mb-1'>
                                {userPassError?<span className="text-[10.5px] text-rose-600 italic font-semibold ">Password is required*</span> : null}       
                                </div>
                                <div className='relative flex items-center text-gray-500 focus-within:text-gray-500'> 
                                    <FaKey className='w-4 h-4 absolute ml-3  pointer-events-none' />
                                    <input onChange={handlePassword} className='pr-3 pl-10 py-2 w-full placeholder-gray-400 text-current rounded-xl border-none ring-1 ring-gray-300 focus:ring-gray200 focus:ring-2' placeholder='Password' type="password"/>
                                </div>
                               

                        </form>
                        <div className='flex justify-between py-5 mb-5 text-sm'>
                            <p><input type="checkbox" className='mr-2'/>Remember me</p>
                            <p className='text-blue-600 font-bold'>Forgot Password?</p>
                        </div>


                        <div className='text-center mb-2'>
                           {loginError? <span className='text-[10.5px] text-red-600 italic font-semibold '>Username and Password is incorrect, Try again!</span> : null} 
                        </div>
    
                        {/* <ReactLoading
                    type="spin"
                    color="#0000FF"
                    height={30}
                    width={50}
                    className='ml-20 mb-7 -mt-10 align-center relative'
                    /> */}
                        <button onClick={handleLogin}  id="btnLog" className=' h-10 w-full px-10 mb-10 text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest'>
                            <span>Login </span>
                            
                            
                        </button>
                       
                        <div className='flex justify-center items-center'>
                                <a href='https://ubix.com.ph/'> <img src={Ubixlogo} alt="DocuVu"  className='w-25 h-12 mb-20 '/></a>
                            <p className='absolute  md:text-xs font-semibold '> © Copyright 2022 | UBIX Corporation | All Rights Reserved.  </p>
                        </div>
                        
                    </div>
                    
                </div> 
            
        </div>    
    
        )
    }

    
export default Login;


    
