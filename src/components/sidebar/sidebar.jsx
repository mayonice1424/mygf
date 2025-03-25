/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./sidebar.css";
import { BiSolidHome } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Dashboard from "./../../pages/dashboard/dashboard";
const Sidebar = ({ open, data, setOpen }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const checkToken = async () => {
    const token = await localStorage.getItem("token");
    if (!token) {
      // navigate("/login")
    }
  };
  const isMobile = useMediaQuery({ minWidth: 768, maxWidth: 991 });
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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  useEffect(() => {
    // checkToken()
    const storedActivePage = localStorage.getItem("activePage");
    const active = storedActivePage
      ? capitalizeFirstLetter(storedActivePage.replace(/[/0-9]/g, "").slice())
      : "";
    setActiveButton(active);
    console.log(active);
    if (isMobile) {
      setOpen(false);
    }
  }, [data, navigate, isMobile]);
  useEffect(() => {
    // checkToken()
    const handleBeforeUnload = (event) => {
      localStorage.removeItem("activePage");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    // checkToken()
    const currentPathname = window.location.pathname;
    const pathSegments = currentPathname.split("/");
    const firstSegment = pathSegments[1];
    const newActivePage = firstSegment || "dashboard";
    localStorage.setItem("activePage", newActivePage);
    setActiveButton(capitalizeFirstLetter(firstSegment) || "");
    console.log(capitalizeFirstLetter(firstSegment));
  }, [localStorage.getItem("activePage"), navigate]);
  return (
    <>
      <div
        className={`${
          open ? "md:w-96" : "md:w-24"
        } hidden flex-col duration-500 md:flex min-h-screen pb-10 dark:bg-radial-[at_50%_75%] bg-white dark:from-sky-900 dark:via-sky-950 dark:to-zinc-900 to-100%
`}
      >
        <div className="w-[100%] items-start content-center justify-evenly pt dark:from-sky-900 dark:via-sky-950 dark:to-zinc-900 to-100% flex">
          <div className="w-56 h-24 justify-center content-center items-center flex">
            <img
              src={
                theme === "dark"
                  ? open
                    ? "/assets/logo_white_mode.png"
                    : "/assets/logo_garuda_png_white.png"
                  : open
                  ? "/assets/logo.png"
                  : "/assets/logo_garuda_png_blue.png"
              }
              className={`${open ? "w-full mt-5" : "w-1/2"}`}
            />
          </div>
        </div>
        <ul
          className={`menu flex flex-col w-[100%]  ${
            open ? "items-end relative gap-y-5" : "items-center"
          }  content-center justify-center `}
        >
          {data &&
            data.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  handleButtonClick(`${item.sidebar.name}`);
                  const route = item.sidebar.name.toLowerCase();
                  navigate(`/${route}`);
                }}
                className={`flex flex-row ${
                  open
                    ? "md:w-[90%] lg:pl-8 pl-5 relative rounded-l-[60px]"
                    : "md:w-[60%]"
                } content-center  items-center ${
                  open
                    ? "md:py-9 justify-evenly"
                    : "md:py-6  rounded-full mt-3 justify-center"
                } md:h-6  ${
                  activeButton === item.sidebar.name &&
                  activeButton !== "Dashboard" &&
                  open
                    ? "dark:from-sky-900 dark:via-sky-950 dark:to-zinc-900 to-100% before:top-[-80px] before:right-[0px] before:h-[80px] before:w-[40px] before:rounded-br-[80px] after:w-[40px] after:transform after:scale-y-[-1] after:rounded-br-[80px] after:top-[70px] after:right-[0px] after:h-[80px]"
                    : activeButton === item.sidebar.name &&
                      activeButton !== "Dashboard" &&
                      !open
                    ? "dark:from-sky-900 dark:via-sky-950 dark:to-zinc-900 to-100%"
                    : ""
                } cursor-pointer`}
              >
                <img src={item.sidebar.icon} className="w-6 h-6" />
                <div
                  className={`w-full pl-5 ${open ? "md:flex" : "md:hidden"}`}
                >
                  <h1 className={`text-xl z-[1] dark:text-black text-white `}>
                    {item.sidebar.name}
                  </h1>
                </div>
              </li>
            ))}
          <div
            className={`w-full flex  justify-center  ${
              open ? "px-5 mt-10" : ""
            }`}
          >
            <li
              onClick={() => {
                handleButtonClick("Dashboard");
                const dashboardRoute = "/dashboard";
                navigate(dashboardRoute);
              }}
              className={`flex flex-row   ${
                open
                  ? "md:w-[100%] px-5 relative rounded-[20px] "
                  : "md:w-[60%]"
              } content-center  items-center ${
                open
                  ? "md:py-7 justify-center "
                  : "md:py-6 rounded-full mt-3 justify-center"
              } md:h-6 ${
                activeButton === "Dashboard" && open
                  ? "bg-[#70acffc9] dark:bg-white bg-linear-to-t"
                  : activeButton === "Dashboard" && !open
                  ? "bg-[#70acffc9] dark:bg-white bg-linear-to-t"
                  : ""
              } cursor-pointer`}
            >
              <FiHome
                className={`flex   dark:text-black text-white    w-6 h-6`}
              />
              <div className={`w-full pl-5 ${open ? "md:flex" : "md:hidden"}`}>
                <h1
                  className={`text-xl dark:text-black text-white font-medium z-[1] `}
                >
                  Dashboard
                </h1>
              </div>
            </li>
          </div>
          <div
            className={`w-full flex  justify-center  ${open ? "px-5 " : ""}`}
          >
            <li
              onClick={() => {
                handleButtonClick("Profile");
                const profileRoute = "/profile";
                navigate(profileRoute);
              }}
              className={`flex flex-row   ${
                open ? "md:w-[100%] px-5 relative rounded-[20px]" : "md:w-[60%]"
              } content-center  items-center ${
                open
                  ? "md:py-7 justify-center "
                  : "md:py-6 rounded-full mt-3 justify-center"
              } md:h-6 ${
                activeButton === "Profile" && open
                  ? "bg-[#70acffc9] dark:bg-white"
                  : activeButton === "Profile" && !open
                  ? "bg-[#70acffc9] dark:bg-white"
                  : ""
              } cursor-pointer`}
            >
              <ImProfile className="flex dark:text-black text-white w-6 h-6" />
              <div className={`w-full pl-5 ${open ? "md:flex" : "md:hidden"}`}>
                <h1 className={`text-xl dark:text-black text-white z-[1] `}>
                  Profile
                </h1>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
