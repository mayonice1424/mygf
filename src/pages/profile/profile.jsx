import { useState, useEffect } from "react";
import "./profile.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Profile = () => {
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
    <div className="w-full flex-col bg-white h-full flex">
      <div className="relative w-full overflow-hidden rounded-lg flex-col flex justify-center">
        {/* Carousel Image */}
        <div className="w-full justify-center flex duration-300 ease-in-out">
          <div className="w-2/3 select-none bg-sky-500 p-2 rounded-3xl h-full">
            <img
              src={images[currentSlide]}
              alt="carousel"
              className="rounded-3xl"
            />
          </div>
        </div>

        {/* Navigator and Buttons */}
        <div className="absolute  top-1/2 w-full left-0 right-0 flex justify-around z-10 px-5">
          <div className="w-5/7 justify-between  flex ">
            {/* Previous Button */}
            <div
              className="w-13 h-13 p-2 border-4 border-sky-500 flex rounded-full justify-center items-center bg-zinc-100"
              onClick={prevSlide}
            >
              <GrFormPrevious className="w-10 h-10" />
            </div>
            {/* Next Button */}
            <div
              className="w-13 rounded-full p-2 border-4 border-sky-500 h-13 flex justify-center items-center bg-zinc-100"
              onClick={nextSlide}
            >
              <GrFormNext className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center z-10 -mt-7">
        <div className="flex justify-evenly w-1/12">
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
    </div>
  );
};

export default Profile;
