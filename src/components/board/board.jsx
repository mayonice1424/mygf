import { Outlet } from "react-router-dom";
// import Sidebar from "./sidebar";
// import Navbar from "./navbar";
// import axios from "axios";
// import { sidebar } from "../utils/api";
// import { ModalProvider } from "./modalContext";
import { useState, useEffect } from "react";
import { LoginProvider } from "../loginContext/loginContext.jsx";
import { NavProvider } from "../navbar/navContext.jsx";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import { ModalProvider } from "../modal/modalContext.jsx";
const Board = () => {
  const [data, setData] = useState([]);
  // const getData = async () => {
  //   await axios
  //     .get(sidebar.get, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const [open, setOpen] = useState(true);
  useEffect(() => {
    // getData();
  }, []);
  return (
    <>
      <LoginProvider>
        <ModalProvider>
          <NavProvider>
            <div className="flex bg-white dark:bg-zinc-900 h-screen overflow-hidden w-full">
              <Sidebar open={open} data={data} setOpen={setOpen} />
              <div className="flex flex-col md:rounded-ss-3xl min-h-screen w-full">
                <Navbar open={open} data={data} setOpen={setOpen} />
                <Outlet />
              </div>
            </div>
          </NavProvider>
        </ModalProvider>
      </LoginProvider>
    </>
  );
};
export default Board;
