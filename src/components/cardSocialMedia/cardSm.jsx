import React from "react";
import "./cardSm.css";
import { FiUsers } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import Profile from "@/pages/profile/profile";
import { useNavigate } from "react-router-dom";

const CardSm = ({
  imageSrc,
  altText,
  link,
  Username,
  from,
  subTitle,
  ProfilePicture,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-md border flex items-start ">
      <div className="px-2  dark:hover:bg-[#e3eeffc9] flex-col hover:bg-[#f4f8ffc9] my-1 justify-center rounded-2xl items-center w-full flex gap-y-2">
        <div className="flex flex-row items-center w-full">
          <div
            className={`w-full h-[250px]  justify-center flex rounded-sm  items-center`}
            style={{
              backgroundImage: `url(${imageSrc})`, // Set the background image dynamically
              backgroundSize: "cover", // Ensure the background image covers the div
              backgroundPosition: "center", // Center the background image
            }}
          >
            {/* <img src={} alt={altText} className="rounded-xl  h-full" /> */}
          </div>
        </div>
        <div className="h-0.5 bg-blue-600 w-full"></div>
        <div className="w-full items-center text-lg font-normal flex  text-zinc-400">
          <div className="w-1/5">
            <img
              src={ProfilePicture}
              alt={"Profil Picture"}
              className="w-10 h-10 rounded-full border-2"
            />
          </div>
          <div>
            <p className=" font-normal text-sm  text-black py-1">{Username}</p>
          </div>
        </div>
        <div className="w-full text-sm font-normal text-zinc-900">
          <p className="truncate-ellipsis text-justify ">{subTitle}</p>
        </div>
        <div className="w-full  text-sm font-normal  flex justify-center text-zinc-900">
          <div
            onClick={() => {
              window.location.href = link;
            }}
            className=" w-full text-center dark:border-zinc-400 bg-sky-300 rounded-md border justify-center "
          >
            <p className=" font-medium  text-white hover:text-zinc-200 py-1">
              {`Read More on ${from}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
