"use client";
import { Eye, EyeClosed } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../Components/ui/hover-card";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");
  const [messagetype, setMessageType] = useState<"success" | "error">(
    "success"
  );

  const router = useRouter();

  const signUpFormRef = useRef<HTMLFormElement | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = signUpFormRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!name || !email || !password || !confirmPassword) {
      console.log({ name, email, password, confirmPassword });

      setMessage("All fields are required.");
      setMessageType("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Invalid email format.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((response) => {
      response.json().then((data: { success: boolean; message: string }) => {
        if (data.success) {
          setMessage(data.message);
          setMessageType("success");
          form.reset();
          router.push("/dashboard");
        } else {
          setMessage(data.message);
          setMessageType("error");
        }
      });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage(" ");
      setMessageType("success");
    }, 2000);
  }, [message, messagetype]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative z-[3]">
      <p className=" text-white text-3xl">SignUp</p>
      <div className=" flex flex-col h-fit min-w-[80%] md:min-w-[30%]  md:max-w-1/2 justify-center items-center">
        <form
          action=""
          className=" flex flex-col gap-4 p-4 border-b border-blue-800 w-full"
          ref={signUpFormRef}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full p-2 rounded-md bg-gray-800/75 text-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-2 rounded-md bg-gray-800/75 text-white"
            required
          />
          <div className=" flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
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
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            className="w-full p-2 rounded-md bg-gray-800/75 text-white"
            required
          />
          <button
            type="submit"
            name="signup"
            className="w-full p-2 bg-blue-800 text-white rounded-md hover:bg-blue-950 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-800"
            onClick={handleSignup}
          >
            Signup
          </button>
          <p
            className={`text-green-500 text-base text-center ${
              messagetype === "success" ? "text-green-500" : "text-red-500"
            }`}
            id="alert"
          >
            {message}
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
          <p className="text-center text-sm mt-2 text-white">
            Has an account?{" "}
            <Link href="/auth/login">
              <span className="text-blue-500 cursor-pointer hover:underline ">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
