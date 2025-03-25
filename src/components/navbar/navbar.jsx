/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { Outlet } from "react-router-dom"
import { IoIosNotifications } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidHome } from "react-icons/bi";

import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { useNav } from "./navContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { notification } from "../utils/api";

import { useModal } from "../modal/modalContext";
import Modal from "../modal/modal";
import Dashboard from "./../../pages/dashboard/dashboard";
const Navbar = ({ open, setOpen, data }) => {
  const { visible, setVisible } = useModal();
  const navigate = useNavigate();
  const { nav, setNav } = useNav();
  const [activeButton, setActiveButton] = useState("");
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const checkToken = async () => {
    const token = await localStorage.getItem("token");
    if (token == null) {
      // navigate("/login")
    }
  };
  const handleButtonClick = (index) => {
    setActiveButton((prevActiveButton) => {
      let nextActiveButton;
      if (index === "Profile") {
        const profileRoute = "/profile";
        const currentRoute = window.location.pathname;
        const currentRouteSegments = currentRoute.split("/");
        const firstSegment = currentRouteSegments[1];
        if (firstSegment.toLowerCase() === "profile") {
          localStorage.setItem("activePage", firstSegment);
          nextActiveButton = capitalizeFirstLetter(
            firstSegment.replace(/[/0-9]/g, "").slice()
          );
        } else {
          // Jika bukan halaman profil, arahkan ke halaman profil
          navigate(profileRoute);
          localStorage.setItem("activePage", profileRoute.slice(1));
          nextActiveButton = capitalizeFirstLetter(
            profileRoute.replace(/[/0-9]/g, "").slice()
          );
        }
      } else {
        const route = index.toLowerCase();
        nextActiveButton = capitalizeFirstLetter(route);
        localStorage.setItem("activePage", route);
        navigate(route);
      }
      return nextActiveButton;
    });
  };
  const [count, setCount] = useState("");
  useEffect(() => {
    const storedActivePage = localStorage.getItem("activePage");
    const active = storedActivePage
      ? capitalizeFirstLetter(storedActivePage.replace(/[/0-9]/g, "").slice())
      : "";
    setActiveButton(active);
    console.log(active);
  }, [data, navigate]);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.removeItem("activePage");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    const currentPathname = window.location.pathname;
    const pathSegments = currentPathname.split("/");
    const firstSegment = pathSegments[1];
    const newActivePage = firstSegment || "dashboard";
    localStorage.setItem("activePage", newActivePage);
    setActiveButton(capitalizeFirstLetter(firstSegment) || "");
    console.log(capitalizeFirstLetter(firstSegment));
    // checkToken()
  }, [localStorage.getItem("activePage")]);

  return (
    <>
      <Modal
        isvisible={visible}
        setIsVisible={setVisible}
        from={"notification"}
        onClose={() => setVisible(false)}
      />
      <div className="p-7 bg-white md:rounded-tl-4xl sm:ml-0 flex  h-[10vh] sm:w-full md:w-[100%] ">
        <div className="w-[90%] md:w-[84%] lg:w-[90%] flex-row flex relative  items-center ">
          <div
            onClick={() => setOpen(!open)}
            className={`absolute z-50 bg-zinc-300  border-zinc-400 justify-center content-center flex-wrap items-center px-4 py-4 ml-[-10] hidden ${
              !open && "hidden"
            } lg:flex cursor-pointer rounded-full border-2 `}
          >
            <RxHamburgerMenu
              className={`${
                !open && "rotate-180"
              } text-zinc-600  absolute w-4 h-4`}
              src={"/control.png"}
              alt="control"
            />
          </div>
          {/* sidebar mobile navbar */}
          <div
            onClick={() => setNav(true)}
            className={`absolute justify-center border-zinc-400 content-center flex-wrap items-center px-4 py-4 ml-[-10] flex  bg-zinc-300 cursor-pointer rounded-full border-2 `}
          >
            <RxHamburgerMenu
              className={`${!open}  text-zinc-600 absolute w-4 h-4`}
              src={"/control.png"}
              alt="control"
            />
          </div>
          <div className="ml-16">
            <h1 className="text-2xl font-semibold text-zinc-900 ">
              {activeButton}
            </h1>
          </div>
        </div>
        <div className="hidden md:flex w-[10%] justify-evenly relative items-center ">
          {count == 0 ? null : (
            <div
              className={`z-10 -mt-2 py-[0.15rem] w-[12%] flex px-[0.65rem] absolute text-zinc-600 text-xs font-semibold justify-center items-center -ml-8 border-2 rounded-full border-zinc-400 bg-zinc-300 `}
            >
              {count > 9 ? "9+" : count}
            </div>
          )}
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className={`cursor-pointer absolute w-[2%] mr-14 justify-center rounded-full border-2 border-zinc-400  bg-zinc-300  flex-col  px-4 py-4  flex content-center flex-wrap items-center`}
          >
            <IoIosNotifications className={`text-zinc-600 absolute w-7 h-6`} />
          </div>
          <div className="absolute w-[2%] ml-10 justify-center rounded-full border-2 border-zinc-400  bg-zinc-300  flex-col px-4 py-4  flex content-center flex-wrap items-center cursor-pointer">
            <CiLogin
              onClick={() => {
                localStorage.removeItem("activePage");
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className={`absolute text-zinc-600 w-7 h-6`}
            />
          </div>
        </div>
        <div className="md:hidden w-[10%] justify-evenly  items-center relative flex ">
          {count == 0 ? null : (
            <div
              className={` ${
                nav ? "hidden duration-100" : " duration-100 flex"
              } z-10 -mt-2  w-[12%] flex py-[0.15rem] px-[0.65rem] absolute text-zinc-600 text-xs font-semibold justify-center items-center ml-6 border-2 rounded-full border-zinc-400 bg-red-600`}
            >
              {count > 9 ? "9+" : count}
            </div>
          )}
          <div
            onClick={() => {
              navigate("/notification");
            }}
            className="absolute  w-[2%] md:mr-14 mr-0 justify-center rounded-full border-2 border-zinc-400  bg-zinc-300  flex-col  px-4 py-4  flex content-center flex-wrap items-center"
          >
            <IoIosNotifications
              className={` cursor-pointer text-zinc-600 absolute w-7 h-6`}
            />
          </div>
        </div>
      </div>
      {/* mobile dev */}
      <div
        className={`${
          nav ? "translate-x-0" : "-translate-x-full"
        } duration-500 md:hidden ${
          visible ? "" : "bg-zinc-900"
        }  absolute w-3/4 z-50 h-full bottom-0`}
      >
        <div className="px-8">
          <div className="flex justify-around">
            <div className="w-[100%] items-start content-start  flex">
              <div className="w-full h-32  content-center items-center justify-center flex">
                <img
                  src="/assets/logo_white_mode.png"
                  className={`w-60 h-16 `}
                />
              </div>
            </div>
            <div onClick={() => setNav(false)} className="pt-8 ">
              <IoMdClose className="text-zinc-600 w-7 h-7 " />
            </div>
          </div>
          <div className="flex flex-col w-[100%] content-center justify-between h-10 pt-5 gap-y-4   ">
            {data &&
              data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleButtonClick(`${item.sidebar.name}`);
                    const route = item.sidebar.name.toLowerCase();
                    navigate(`/${route}`);
                  }}
                  className={`flex flex-row content-center justify-evenly items-center h-11 pl-6 py-9 ${
                    activeButton === item.sidebar.name &&
                    activeButton !== "Profile"
                      ? "bg-red-950 rounded-l-full"
                      : ""
                  } cursor-pointer`}
                >
                  <img src={item.sidebar.icon} className="w-6 h-6" />
                  <div className="w-full pl-5">
                    <h1 className={`text-2xl text-zinc-600`}>
                      {item.sidebar.name}
                    </h1>
                  </div>
                </div>
              ))}
            <div
              onClick={() => {
                handleButtonClick("Dashboard");
                const dasboardRoute = "/dashboard";
                navigate(dasboardRoute);
              }}
              className={`flex flex-row content-center justify-evenly items-center px-6 h-11 py-7 ${
                activeButton === "Dashboard" ? "bg-zinc-700 rounded-[20px]" : ""
              } cursor-pointer`}
            >
              <BiSolidHome className="text-white w-8 h-8" />
              <div className="w-full pl-5">
                <h1 className={`text-2xl text-white`}>Dashboard</h1>
              </div>
            </div>
            <div
              onClick={() => {
                handleButtonClick("Profile");
                const profileRoute = "/profile";
                navigate(profileRoute);
              }}
              className={`flex flex-row content-center justify-evenly items-center px-6 h-11 py-7  ${
                activeButton === "Profile" ? "bg-zinc-700 rounded-[20px]" : ""
              } cursor-pointer`}
            >
              <ImProfile className="text-white w-6 h-6" />
              <div className="w-full pl-5">
                <h1 className={`text-2xl text-white`}>Profile</h1>
              </div>
            </div>
            <div
              onClick={() => {
                localStorage.removeItem("activePage");
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className={`flex pl-6 flex-row content-center justify-evenly items-center h-11 py-9 cursor-pointer`}
            >
              <CiLogout className="text-white w-6 h-6" />
              <div className="w-full pl-5">
                <h1 className={`text-2xl text-white`}>Log Out</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
