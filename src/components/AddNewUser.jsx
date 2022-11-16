import axios from "axios";
import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { json, useNavigate, Link } from "react-router-dom";
// import Swal from 'sweetalert2'
import Modal from "react-modal";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";

//Sample Departments
var data = [
  { id: "1", deptName: "Admin" },
  {
    id: "2",
    deptName: "Sales",
  },
  {
    id: "3",
    deptName: "IT",
  },
];

const AddUNewUSer = () => {
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
  function handleFirstName(e) {
    let firstNameValue = e.target.value;
    if (firstNameValue === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
      setFirstName(firstNameValue);
    }
  }

  //Empty LastName
  function handleLastName(e) {
    let lastNameValue = e.target.value;

    if (lastNameValue === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
      setLastName(lastNameValue);
    }
  }

  //Empty EmailAddress
  function handleEmailAddress(e) {
    let emailAddressValue = e.target.value;

    if (emailAddressValue === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmail(emailAddressValue);
    }
  }

  //Empty UserName
  function handleUserName(e) {
    let userNameValue = e.target.value;

    if (userNameValue === "") {
      //    setUserNameError(true);
    } else {
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
  function handleDateExpire(e) {
    let dateExpirevalue = e.target.value;

    if (dateExpirevalue === "") {
      setDateExpirationError(true);
    } else {
      setDateExpirationError(false);
      setDateExpiration(dateExpirevalue);
    }
  }

  //Empty Group ID
  function handleGroupId(e) {
    let groupIdValue = e.target.value;

    if (groupIdValue === "NoValue") {
      setGroupIDError(true);
    } else {
      setGroupIDError(false);
      setGroupID(groupIdValue);
    }
  }

  // Empty LockOut
  function handleLockOut(e) {
    let lockOutValue = e.target.value;
    if (lockOutValue === "NoValue") {
      setLockOutError(true);
    } else {
      setLockOutError(false);
      setLockOut(lockOutValue);
    }
  }
  const createdDate = dateFormat("yyyy-mm-dd");
  const newDateExpire = dateFormat(dateExpiration, "yyyy-mm-dd");
  var newFirst = firstName
    .split(" ")
    .map((word) => word[0])
    .join("");
  const generateUsername =
    newFirst.toLocaleLowerCase() + lastName.toLowerCase();

  var characters =
    "1234567890ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_+";
  var lenString = 12;
  var randomstring = "";

  //loop to select a new character in each iteration
  for (var i = 0; i < lenString; i++) {
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
    Type: "Add",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      emailAdd === "" ||
      lockOut === "NoValue" ||
      groupID === "NoValue"
    ) {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      //  setUserNameError(true);
      //  setPasswordError(true);
      //  setConfirmPasswordError(true);
      setLockOutError(true);
      setGroupIDError(true);
      setShowResults(true);

      //   <Link to={``} />

      //  setUserPassError(true);
    } else {
      const url = "http://192.168.6.52:9090/";
      axios
        .post(`${url}api/Users/AddUsers`, data)
        .then((result) => {
          json(result.ResponseMessage);

          if (result.data.ResponseMessage === "User Added") {
            var CryptoJS = require("crypto-js");
            var ciphertext = CryptoJS.AES.encrypt(
              JSON.stringify(genratedPassword),
              "my-secret-key@123"
            ).toString();
            navigate(`/user/addusers/${ciphertext}/`, {
              state: { userName: generateUsername },
            });
          } else if (result.data.ResponseMessage === "Existing User") {
            alert("Username is Already Exist ");
          } else {
            alert("Looks Like Something Happens");
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <>
      <div className="w-full h-full bg-gray-100 overflow-hidden">
        <div className="px-10  mb-10 mt-3 ml-[25%] bg-white w-[45%] h-[95%] border border-gray-300 shadow-md  rounded-lg">
          <div className="flex  ">
            <div className="flex justify-center w-[45px] h-[40px] -ml-8 mt-2  bg-gray-200  rounded-lg">
              <button
                onClick={() => navigate("/user")}
                className="text-[22px] text-black relative"
              >
                <RiArrowGoBackLine />
              </button>
            </div>

            <div className="ml-4 py-3.5 w-30 h-7">
              <p className="text-[16px] font-semibold">Add New User</p>
            </div>
          </div>

          {/* start */}

          <form className="">
            <div className="w-full text-center md:mb-0 shadow-2xl  ">
              <p className="text-xm text-center  font-semibold">
                Basic Information
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3  md:mb-0 mt-4  ">
                <input
                  onChange={handleFirstName}
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Firstname"
                />
                {firstNameError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the firstname.
                  </p>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3 mt-4 ">
                <input
                  onChange={handleLastName}
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="Lastname"
                />
                {lastNameError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the lastname.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3  md:mb-0   ">
                <input
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Employee ID"
                />
                {/* {firstNameError ? (
                <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                  Please fill out the firstname.
                </p>
              ) : null} */}
              </div>
              <div className="w-full md:w-1/2 px-3 ">
                <input
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="Phone Number"
                />
                {/* {lastNameError ? (
                <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                  Please fill out the lastname.
                </p>
              ) : null} */}
              </div>
            </div>

            <div className=" w-full px-3  mb-2 ">
              <div className="px-3">
                <input
                  onChange={handleEmailAddress}
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="Email Address"
                />
                {emailAddError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the email address.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="w-full text-center md:mb-0 shadow-2xl">
              <p className="text-xm text-center  font-semibold">
                Account Setup
              </p>
            </div>

            <div className=" flex justify-end">
              <div className="dropdown inline-block relative">
                <div className="bg-gray-200 text-gray-700 cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
                  <span className="mr-1 text-[12px]">
                    <AiOutlineRight />
                  </span>
                </div>

                <div className="border border-gray-300 dropdown-menu absolute hidden text-gray-700 pt-1 w-[240px] h-[300px] ml-[70px] -mt-[80px] rounded-md">
                  <div className="bg-white w-full h-full ">
                    <div className="justify-center text-center mb-1">
                      Access Control
                    </div>

                    <ul class="w-full font-medium text-gray-900 bg-white ">
                      <li class="w-full  border-b border-gray-200  ">
                        <div class="flex items-center pl-3">
                          <input
                            id="view-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="view-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            View Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 ">
                        <div class="flex items-center pl-3">
                          <input
                            id="upload-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="upload-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Upload Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="donwload-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="donwload-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Download Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="edit-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="edit-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Edit Document Properties
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="delete-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="delete-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Delete Uploaded Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="print-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="print-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Print Document
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">
                <input
                  value={generateUsername}
                  onChange={handleUserName}
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="Username"
                  disabled
                />
                {/* {userNameError? <p className="text-red-500 text-xs italic ml-4">Please fill out this field.</p>  :null} */}
              </div>

              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">
                <div className=" ">
                  <select
                    onChange={handleGroupId}
                    className="text-xs cursor-pointer appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-last-name"
                    type="select"
                  >
                    <option disabled selected value="NoValue">
                      Select Department
                    </option>
                    <option className="" value="1">
                      Administrator
                    </option>
                    <option className="" value="2">
                      Accountant
                    </option>
                  </select>
                  {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div> */}
                  {groupIDError ? (
                    <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                      Please Select Group
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3 ">
                <div className="">
                  <select
                    onChange={handleLockOut}
                    className="text-xs cursor-pointer appearance-none block w-full bg-gray-100 text-black border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-last-name"
                    type="select"
                  >
                    <option disabled selected value="NoValue">
                      Select Lock Out
                    </option>
                    <option value="0">No Lock Out</option>
                    <option value="3">Lock Out: 3</option>
                    <option value="5">Lock Out: 5</option>
                    <option value="10">Lock Out: 10</option>
                  </select>
                  {/* <div className="pointer-events-none relative inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div> */}
                  {lockOutError ? (
                    <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                      Please Select Lock Out
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 ">
                <input
                  className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="Requested By"
                />
                {/* {userNameError? <p className="text-red-500 text-xs italic ml-4">Please fill out this field.</p>  :null} */}
              </div>
            </div>
          </form>
          <button
            onClick={handleSubmit}
            className="min-w-[30%] float-right mr-3 text-xs h-10 mt-2 px-10  text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest"
          >
            Save New User
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUNewUSer;
