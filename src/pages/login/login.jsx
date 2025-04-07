import React, { useState, useEffect } from "react";
import { LuSunMedium } from "react-icons/lu";
import { InputLogin } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MdWbSunny } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const [count, setCount] = useState(0);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex w-full size-18 bg-radial-[at_50%_75%]  from-white via-blue-50 to-gray-50  transition-colors duration-300 dark:from-sky-900 dark:via-sky-950 dark:to-zinc-900 to-100%  min-h-screen  flex-row">
      <button
        onClick={toogleDarkMode}
        className="flex z-50 justify-center fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 items-center  rounded-full bg-radial-[at_50%_75%] bg-zinc-100   dark:bg-zinc-600 "
      >
        {darkMode == true ? (
          <HiMoon className="text-zinc-300 h-5 w-5" />
        ) : (
          <MdWbSunny className="text-amber-500 h-5 w-5" />
        )}
      </button>

      <div class=" w-2/3  lg:flex hidden  justify-center items-center">
        <img
          src="/assets/product.png"
          alt="Background"
          class="w-full h-full object-cover"
        />
      </div>
      <div className=" lg:w-1/2 w-full flex justify-center items-center ">
        <div className=" lg:w-full w-full  h-auto flex flex-row justify-center">
          <div
            className=" w-full h-full flex justify-center items-center  "
            style={{ maxWidth: "650px" }}
          >
            <div
              className=" rounded-lg md:w-full w-4/5 bg-white dark:bg-black/20 drop-shadow-md border-gray-100  backdrop-blur-none  border md:h-3/5 h-4/6 flex-col flex justify-center items-center "
              style={{
                border: darkMode ? "0.1px solid hsla(220, 20%, 25%, 0.6)" : "",
              }}
            >
              <div className="flex md:px-10 px-5 ring-blue-500/50 shadow-blue-500 rounded-3xl h-[50vh] justify-center flex-col w-full ">
                <div className="w-full justify-center flex items-center">
                  <img
                    src={
                      darkMode
                        ? "/assets/logo_white_mode.png"
                        : "/assets/logo.png"
                    }
                    style={{
                      width: "200px",
                    }}
                  />
                </div>
                <div className="w-full  flex justify-start ">
                  <div className="w-full  flex  items-center flex-col gap-y-7 py-1  ">
                    <div className="w-full py-4 ">
                      <text className="font-medium text-3xl text-black dark:text-white">
                        Sign in
                      </text>
                    </div>
                    <InputLogin
                      type="email"
                      placeholder="your@email.com"
                      label={"Email"}
                    />
                    <InputLogin
                      type="password"
                      placeholder="******"
                      label={"Password"}
                    />
                    {/* <div className="flex items-center justify-start  w-full space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm dark:text-white text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember Me
                    </label>
                  </div> */}
                    <div
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                      className="bg-linear-to-t dark:bg-zinc-100 bg-[#70acffc9] w-full rounded-lg flex  py-2 dark:hover:bg-zinc-200 hover:bg-blue-400 dark:hover:text-zinc-800  hover:text-gray-100 justify-center dark:text-black text-white font-medium"
                    >
                      Sign in
                    </div>
                    <div className="  w-full  flex justify-center font-normal">
                      <p className="underline text-muted-foreground underline-offset-1 hover:no-underline">
                        Forgot your password?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
