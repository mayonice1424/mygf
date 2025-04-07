import React from "react";
import { FiUsers } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
const CardApps = ({ imageSrc, altText, Title, subTitle }) => {
  return (
    <div className="w-full  rounded-md border dark:border-2 dark:border-zinc-200  flex items-start dark:hover:bg-zinc-100 hover:bg-[#f4f8ffc9]">
      <div className="px-2   flex-col  my-1 hover:my-1 justify-center rounded-2xl items-center w-full flex hover:gap-y-2 gap-y-2">
        <div className="flex flex-row items-center w-full bg-blue-100 rounded-br-4xl">
          <div className="w-1/5 p-2 mx-2  justify-center flex rounded-sm  items-center">
            {Title == "HRIS" ? (
              <FiUsers className="h-10 w-10 text-blue-300" />
            ) : Title == "ID Card" ? (
              <FiUser className="h-10 w-10 text-blue-300" />
            ) : Title == "QR Profile" ? (
              <BsQrCodeScan className="h-10 w-10 text-blue-300" />
            ) : (
              <PiMicrosoftTeamsLogoLight className="h-10 w-10 text-blue-300" />
            )}
            {/* <img
              src={imageSrc}
              alt={altText}
              className="rounded-3xl h-10 w-10"
            /> */}
          </div>
          <div className="w-full text-lg font-normal text-zinc-600">
            <p>{Title}</p>
          </div>
        </div>
        <div className="w-full text-sm font-normal text-zinc-900">
          <p>{subTitle}</p>
        </div>
        <div className="w-full  text-sm font-normal  flex justify-end text-zinc-900">
          <div className=" px-5  rounded-md border bg-sky-300 ">
            <p className=" font-medium  text-white py-1">{"Go To App"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardApps;
