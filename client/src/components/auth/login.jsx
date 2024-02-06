import Cookies from 'js-cookie';
import axios from "axios";
import { Link } from 'react-router-dom';
import loginImage from "../../assets/images/Vote.png";
import { BASE_URL , LOGIN_URL } from '../../redux_saga/constant';
import React, { useRef, useState } from 'react'

const Login = () => {
  const Email = useRef();
  const Password = useRef();
  const [ showPassword , setShowPassword ] = useState(false);

  const handleLogin = async () => {
    const data = {
      Email : Email.current.value,
      Password : Password.current.value,
    };
    await axios.post(BASE_URL + LOGIN_URL , data).then((res) => {
      console.log("response loggin auth" , res);
      Cookies.set("Role", res.data.data.Role);
      Cookies.set("Name" , res.data.data.Name);
      Cookies.set("Profile" , res.data.data.profile);
      window.location = "/dashboard";
    })
    .catch((error) => {
      console.log("login jsx error" , error.message);
    });
  };
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-r from-blue-900 via-bule-700 to-blue-500">
        <div className="border flex rounded-2xl m-[10%] bg-blue-200">
          <div className="hidden md:block">
            <img src={loginImage} alt="LoginImg" />
          </div>
          <div className="px-10 py-16 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="font-bold text-5xl text-center">Welcome back!</h1>
              <p className="text-center mt-3 font-semibold text-gray-500">
                Democracy is based upon the conviction there are extraordinary
                possibilities in ordinary people.
              </p>
            </div>

            <form>
              <div className="mt-10 grid grid-col-1 gap-x-6 gap-y-6 sm:grid-col-6">
                <div className="relative col-span-full">
                  <i className="input-icon fi fi-rr-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="pl-14 pr-5 block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 focus: focus:ring-blue-600 sm:text-lg sm:leading-6"
                    ref={Email}
                    required
                  />
                </div>

                <div className="relative col-span-full">
                  <i className="fi fi-rr-key absolute input-icon"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="fPassword"
                    placeholder="Enter your password"
                    icon="fi-rr-key"
                    className="pl-14 pr-5 block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 focus: focus:ring-blue-600 sm:text-lg sm:leading-6"
                    ref={Password}
                    required
                  />
                  <i
                    className={`fi fi-rr-eye${
                      !showPassword ? "-crossed" : ""
                    } input-icon left-[auto] right-4 cursor-pointer`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
              </div>

              <div className="col-span-1/2 mt-8 pb-6">
                <input
                  type="submit"
                  value="Login"
                  onClick={() => handleLogin()}
                  className="rounded-full w-full bg-gray-950 px-3 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-800"
                />
              </div>

              <div className="px-5 mt-2 font-semibold text-sm flex justify-end text-gray-800 hover:text-gray-600">
                <Link>Forgot Password?</Link>
              </div>

              {/* <div className="relative w-full flex items-center gap-2 my-5 opacity-25 uppercase text-black font-bold">
                <hr className="w-1/2 border-black" />
                <p>or</p>
                <hr className="w-1/2 border-black" />
              </div>

              <div className="col-span-1/2 mt-8 pb-6">
                <button
                  className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[100%] center"
                  onClick={handleGoogleAuth}
                >
                  <img src={GoogleImage} className="w-5" />
                  continue with google
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;