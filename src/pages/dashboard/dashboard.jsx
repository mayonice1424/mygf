import { useState, useEffect } from "react";
import "./dashboard.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";
const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/assets/konten_1.jpg", // Gambar pertama
    "/assets/konten_2.png", // Gambar kedua
    "/assets/konten_3.jpg", // Gambar ketiga
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Update setiap 5 detik
    return () => {
      clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index); // Pindah ke slide tertentu berdasarkan indeks
  };

  return (
    <div className="w-full  bg-zinc-50 flex flex-col h-full overflow-y-auto">
      <div className="w-full relative rounded-lg flex-col flex justify-center">
        <div className="w-full bg-red-300 justify-center flex duration-300 ease-in-out">
          <div className="w-full select-none  bg-[] bg-radial-[at_50%_75%] transition-colors   to-100% p-2 rounded-3xl h-full">
            <img
              src={images[currentSlide]}
              alt="carousel"
              className="rounded-3xl px-52"
            />
          </div>
        </div>

        <div className="absolute top-1/2 w-full left-0 right-0 flex justify-around z-10 px-10">
          <div className="w-5/7 justify-between flex">
            <motion.div
              className="w-13 h-13 p-2 flex border border-white rounded-full justify-center items-center bg-zinc-200"
              onClick={prevSlide}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GrFormPrevious className="w-10 h-10 text-zinc-700" />
            </motion.div>

            <motion.div
              className="w-13 rounded-full p-2 h-13 border border-white flex justify-center items-center bg-zinc-200"
              onClick={nextSlide}
              whileHover={{ scale: 1.2 }} // Scale up when hovered
              whileTap={{ scale: 0.8 }} // Scale down when tapped
              transition={{ type: "spring", stiffness: 300 }} // Add spring effect for smooth animation
            >
              <GrFormNext className="w-10 h-10 text-zinc-700" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full flex xl:justify-start justify-center  xl:px-96 z-10 -mt-7">
        <div className="flex xl:justify-evenly justify-evenly w-1/12">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index
                  ? "bg-white border-2 border-sky-500"
                  : "bg-gray-400 border-2 border-white"
              }`}
              onClick={() => goToSlide(index)} // Klik untuk langsung ke slide tertentu
            ></div>
          ))}
        </div>
      </div>

      <div className="py-10 flex-grow">
        <div className="w-full h-10 px-10 my-10 font-normal text-xl">
          {/* Menu Application */}
        </div>
        <div className="px-60 ">
          <div className="grid grid-cols-5 gap-y-4 ">
            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/HRIS.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    style={{
                      transform: "",
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">
                HRIS Application
              </div>
            </div>
            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/ID_Card.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    style={{
                      transform: "",
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">
                ID Card
              </div>
            </div>
            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/QR_Profile.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    style={{
                      transform: "",
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">
                Qr Profile
              </div>
            </div>
            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/ID_Card.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    // style={{
                    //   transform: "",
                    // }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">
                ID Card
              </div>
            </div>

            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/TeamsLogo.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    style={{
                      transform: "",
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">Teams</div>
            </div>
            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/HRIS.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    style={{
                      transform: "",
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">
                HRIS Application
              </div>
            </div>
            <div className="flex justify-center w-full flex-col gap-y-4">
              <div className="w-full flex justify-center">
                <div className="dark:bg-[#70acffc9] bg-[#70acffc9]   my-1  justify-center rounded-2xl items-center flex  h-20 w-20 ">
                  <img
                    src={"/assets/HRIS.png"}
                    alt="carousel"
                    className="rounded-3xl h-15 w-15"
                    style={{
                      transform: "",
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full text-black justify-center">
                HRIS Application
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
