import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setemail] = useState(" ");
  const [name, setname] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const HandelClick = (e) => {
    // e.preventDefault();
    if (password.includes(" ")) {
      console.log("Password has space");
    }
    console.log("Email is " + email + " and password if " + password);

    HandelAccount();
  };

  const user = {
  
    Email: email,
    Password: password
  };
  
const HandelAccount=()=>{
  const account =localStorage.setItem("account",JSON.stringify(user))
  console.log(account);
  navigate("/Account");
  setPassword("")
setemail("")
setname("")
alert("Account Created Succssfully.")
  
}
  return (
    <>
      <div className="w-[75dvw] rounded-xl shadow-lg flex  flex-col  px-10 p-4 gap-6 pt-10">
        <div className="flex pt-10">
          <div className="me-20  h-96 overflow-hidden aspect-square sm:hidden">
            <img
              className="aspect-square"
              src="https://img.freepik.com/premium-photo/user-profile-sign-icon-right-side-with-white-background_187299-40020.jpg"
              alt="bg-Signin"
            />
          </div>
          <form
            className="flex flex-col gap-4 w-1/2 sm:w-full pb-10"
            onSubmit={HandelClick}>
            <p className="text-3xl text-darkBlue font-bold -tracking-tighter ">
              Create An Account
            </p>
            <p className="text-darkBlue/30">Shop Smarter Not Harder.</p>
            <div className="flex flex-col gap-4 ">
              <label htmlFor="Email" className="font-medium">
                Full Name :
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="border-b-[1px] px-2 border-b-darkBlue/70 h-8"
                id="0"
                placeholder="Ahmed Fayyaz"
              />
            </div>
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
                onChange={(e) => setPassword(e.target.value)}
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
                />{" "}
                <label htmlFor="showPass" className="ms-2">
                  Show Password
                </label>
              </span>
              <div className="flex justify-center">
                <input
                  type="submit"
                
                  className="bg-lightGreen w-44 rounded-full py-2 text-lg font-semibold hover:bg-green/75   cursor-pointer transition ease-in"
                  value="Create Account"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
