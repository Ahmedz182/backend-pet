import React, { useState } from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { useEffect } from "react";

const Account = () => {
  const [Account, setAccount] = useState(true);
  useEffect(() => {
    // setAccount(false);
  });

  return (
    <>
      <div className="px-10 py-10 justify-center">
        <h1 className="text-4xl text-darkBlue tracking-widest font-semibold">
          Account
        </h1>
        <div className="flex flex-col items-center justify-center my-10">
          {Account ? <SignIn /> : <SignUp />}
        </div>
        <p className="  text-center">
          {Account ? (
            <p className="text-center"> Not Yet Registered?</p>
          ) : (
            <p className="text-center"> Login to exisiting Account?</p>
          )}
          <span
            className="font-bold cursor-pointer hover:border-b-2 transition ease-in text-darkBlue"
            onClick={() => {
              {
                Account ? setAccount(false) : setAccount(true);
              }
            }}>
            Click Here
          </span>
        </p>
      </div>
    </>
  );
};

export default Account;
