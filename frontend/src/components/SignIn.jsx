import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const [Account ,setAccount]=useState(null)
  const navigate = useNavigate();



  const HandelAccount=()=>{

    const account = JSON.parse(localStorage.getItem("account"));  // Parse the stored JSON string
setAccount(account);

if (account && email === account.Email && password === account.Password) {
  alert("Login Successful");
} else {
  alert("Login Failed");
}

navigate("/Profile")

  }

  const HandelClick = (e) => {
    e.preventDefault();
    if (password.includes(" ")) {
      console.log("Password has space");
    }
    console.log("Email is " + email + " and password if " + password);
    HandelAccount();
  };
  return (
    <>
      <div className="w-[75dvw] rounded-xl shadow-lg flex  flex-col  px-10 p-4 gap-6 pt-10">
        <p className="text-3xl text-darkBlue font-bold -tracking-tighter ">
          Sign in
        </p>
        <p className="text-darkBlue/30">Please Login Here.</p>
        <div className="flex">
          <form
            className="flex flex-col gap-4 w-1/2 sm:w-full pb-10"
            onSubmit={HandelClick}>
            <div className="flex flex-col gap-4 ">
              <label htmlFor="Email" className="font-medium">
                Email Address :
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="border-b-[1px] px-2 border-b-darkBlue/70 h-8"
                id="1"
                placeholder="xyz@provider.com"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <label htmlFor="pass" className="font-medium">
                Password :
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={(e) => setpassword(e.target.value)}
                className="border-b-[1px] px-2 border-b-darkBlue/70 h-8"
                id="2"
                placeholder="Enter Your Password"
              />

              <span className="flex items-center ">
                <input
                  type="checkbox"
                  name="showText"
                  id="show"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPass" className="ms-2">
                  Show Password
                </label>
              </span>
              <div className="flex justify-center">
                <input
                  type="submit"
                  className="bg-lightGreen w-32 rounded-full py-2 text-lg font-semibold hover:bg-green/75   cursor-pointer transition ease-in"
                  value="Sign in"
                />
              </div>
            </div>
          </form>
          <div className="ms-20 my-[-100px] h-96 overflow-hidden aspect-square sm:hidden">
            <img
              className="aspect-square"
              src="https://img.freepik.com/premium-photo/user-sign-icon-left-side-with-white-background_187299-40023.jpg?w=740"
              alt="bg-Signin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
