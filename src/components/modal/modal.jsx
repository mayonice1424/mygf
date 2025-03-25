/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoEye } from "react-icons/io5";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { announcement, user } from "../../utils/api";
import { IoEyeOff } from "react-icons/io5";
import { notification } from "../../utils/api";
import { IoMdInformationCircle } from "react-icons/io";
import { TiWarning } from "react-icons/ti";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Role from "../checkRole/checkRole";
import { useModal } from "./modalContext";
import { useLogin } from "../loginContext/loginContext";
const Modal = ({ isvisible, onClose, from, setIsVisible }) => {
  const navigate = useNavigate();
  const role = Role();
  const { visible, setVisible } = useModal();
  const { popup, setPopup } = useLogin();
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notif, setNotif] = useState([]);

  const [image, setImage] = useState([]);
  const getPopup = async () => {
    await axios
      .get(announcement.get)
      .then((response) => {
        setImage(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let count = 0;
  const handleOnNextClick = async () => {
    const productsLength = image.length;
    count = (currentIndex + productsLength + 1) % image.length;
    await setCurrentIndex(count);
  };

  useEffect(() => {
    // let intervalId;
    if (isvisible && from === "") {
    } else if (isvisible && from === "") {
    }
  }, [isvisible, from]);

  if (!isvisible) return null;
  return (
    <>
      <div
        className="fixed  h-screen w-screen rounded-md inset-0 bg-black bg-opacity-25 
     justify-center items-center flex backdrop-blur-sm"
      >
        <div className="md:w-[50%] bg-zinc-900 w-[85%]">
          <div className="bg-white p-2 w-full flex-row flex rounded justify-between">
            <div>
              <button
                onClick={() => onClose()}
                className="text-black font-semibold text-xl "
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
