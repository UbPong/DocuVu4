import React, { useState, useEffect } from "react";
import axios from "axios";
// import User from './User';
import { useParams } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Empty LastName
  function handlePassword(e) {
    let passwordValue = e.target.value;

    if (passwordValue === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPassword(passwordValue);
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

  var newFirst = firstName.substring(0, 1);
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
    emailAddress: emailAdd,
    userName: generateUsername,
    password: genratedPassword,
    Type: "Update",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "" || emailAdd === "") {
      setEmailError(true);
      setPasswordError(true);

      //  setUserPassError(true);
    } else {
      const text1 = "Your Username is:" + generateUsername;
      const text2 = "Your Username is:" + genratedPassword;

      const text = text1 + "\n" + text2;

      const url = "http://192.168.6.52:9090/";
      axios
        .post(`${url}api/Users/AddUsers`, data)
        .then((result) => {
          if (result.data.ResponseMessage === "User Added") {
            alert(text);
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

  const url = "http://192.168.6.52:9090/";
  let params = useParams();
  if (params.id > 0) {
    const data = {
      ID: params.id,
    };
    axios
      .post(`${url}/api/Users/UsersByID`, data)
      .then((json) => {
        if (json) {
          setFirstName(json.data.users.firstName);
          setLastName(json.data.users.lastName);
          setUserName(json.data.users.userName);
          setEmail(json.data.users.emailAddress);
          setPassword(json.data.users.password);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className=" px-10 mt-10 ml-[25%] bg-white w-[50%] h-[500px] shadow-2xl shadow-secondary-600 border rounded-lg">
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
            <p className="text-[16px] font-semibold">Edit User</p>
          </div>
        </div>

        {/* start */}

        <form className="">
          <div className="w-full text-center  shadow-2xl  ">
            <p className="text-xm text-center  font-semibold">
              Basic Information
            </p>
          </div>

          <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
            <div className="w-full md:w-1/2 px-3 md:mb-0 mt-4 ">
              <p className="text-gray-500 text-[12px] italic ml-4 mb-1">
                Firstname
              </p>
              <input
                value={firstName}
                className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Firstname"
                disabled
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mt-4 ">
              <p className="text-gray-500 text-[12px] italic ml-3 mb-1">
                Lastname
              </p>
              <input
                value={lastName}
                className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Lastname"
                disabled
              />
            </div>
          </div>

          <div className=" w-full px-3 mt-4 mb-5 ">
            <div className="px-3">
              <p className="text-gray-500 text-[12px] italic ml-4 mb-1">
                Email Address
              </p>
              <input
                value={emailAdd}
                onChange={handleEmailAddress}
                className="text-[12px] appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Email Address"
              />
              {emailAddError ? (
                <p className="text-red-500 text-xs italic ml-4">
                  Please fill out this field.
                </p>
              ) : null}
            </div>
          </div>

          <div className="w-full text-center md:mb-0 shadow-2xl">
            <p className="text-xm text-center  font-semibold">Account Setup</p>
          </div>

          <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
            <div className="w-full md:w-1/2 px-3 md:mb-0 mt-4 ">
              <p className="text-gray-500 text-[11.5px] italic ml-4 mb-1">
                Account Username
              </p>
              <input
                value={userName}
                className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Username"
                disabled
              />
            </div>

            <div className="w-full md:w-1/2 px-3 md:mb-0 mt-4 ">
              <p className="text-gray-500 text-[11.5px] italic ml-4 mb-1">
                Account Password
              </p>
              <input
                value={password}
                onChange={handlePassword}
                className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Username"
              />
              {passwordError ? (
                <p className="text-red-500 text-xs italic ml-4">
                  Please fill out this field.
                </p>
              ) : null}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className=" min-w-[30%] float-right mr-3 text-xs h-10 m px-10 mb-4 text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
