"use client";

import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../Components/ui/hover-card";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div className="text-white w-full h-full flex flex-col justify-center items-center relative z-[3]">
        {" "}
        <p className=" text-3xl my-2">Login</p>
        <div className="h-fit min-w-[80%] md:min-w-[30%]  md:max-w-1/2 flex flex-col justify-center items-center">
          <form className="flex flex-col gap-4  p-4 border-b border-blue-800 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md bg-gray-800/75 text-white"
              required
            />
            <div className=" flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 rounded-md bg-gray-800/75 text-white"
                required
              />
              {showPassword ? (
                <Eye
                  color="white"
                  className=" absolute right-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <EyeClosed
                  color="white"
                  className=" absolute right-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-800 text-white rounded-md hover:bg-blue-950 transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
            <p className=" text-green-500 text-base text-center" id="alert">
              Login Successfull
            </p>
          </form>
          <div className="m-2 flex justify-center items-center ">
            <HoverCard openDelay={0} closeDelay={300}>
              <HoverCardTrigger>
                <div className=" w-fit h-10 text-white text-2xl flex justify-center items-center rounded-xl p-3 border border-blue-800 cursor-pointer shadow-[0px_0px_0px_0px_#193cb8] hover:shadow-[0px_0px_30px_-5px_#193cb8] transition-all duration-100">
                  G
                </div>
              </HoverCardTrigger>
              <HoverCardContent side="right" className="p-2" asChild>
                <div className=" w-fit h-fit text-white text-xs flex justify-center items-center rounded-md border border-blue-800">
                  Work in Progress
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="">
            <p className="text-center text-sm mt-2">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup">
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
