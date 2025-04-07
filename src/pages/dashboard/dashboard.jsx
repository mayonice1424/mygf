import { useState, useEffect } from "react";
import "./dashboard.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";
import CardApps from "@/components/cardmenu/cardApps";
import CardSm from "@/components/cardSocialMedia/cardSm";
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
        <div className="w-full  justify-center flex duration-300 ease-in-out">
          <div className="w-8/9 bg-[url(/assets/background.jpg)] select-none transition-colors p-2 rounded-3xl h-full">
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Slides horizontally
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`carousel ${index}`}
                    className="w-full  px-52"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 w-full left-0 right-0 flex justify-around z-10 px-10">
          <div className="w-8/10 justify-between flex">
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

      <div className="py-10 w-full flex-grow">
        <div className="w-full px-20  my-5 font-normal text-xl">
          <h1 className="text-4xl font-medium">Application</h1>
        </div>
        <div className=" ">
          <div className="grid px-20  grid-cols-5 gap-y-4 gap-x-2 ">
            <CardApps
              imageSrc={"/assets/HRIS.png"}
              altText={"Logo"}
              Title={"HRIS"}
              subTitle={"HRIS Application"}
            />
            <CardApps
              imageSrc={"/assets/ID_Card.png"}
              altText={"Logo"}
              Title={"ID Card"}
              subTitle={"Profile ID Card "}
            />
            <CardApps
              imageSrc={"/assets/ID_Card.png"}
              altText={"Logo"}
              Title={"QR Profile"}
              subTitle={"QR to See a Profile of Employee"}
            />
            <CardApps
              imageSrc={"/assets/HRIS.png"}
              altText={"Logo"}
              Title={"MS Teams"}
              subTitle={"Collaboration app for hybrid work"}
            />
            <CardApps
              imageSrc={"/assets/HRIS.png"}
              altText={"Logo"}
              Title={"HRIS"}
              subTitle={"HRIS Application"}
            />
            <CardApps
              imageSrc={"/assets/HRIS.png"}
              altText={"Logo"}
              Title={"HRIS"}
              subTitle={"HRIS Application"}
            />
            <CardApps
              imageSrc={"/assets/HRIS.png"}
              altText={"Logo"}
              Title={"HRIS"}
              subTitle={"HRIS Application"}
            />
            <CardApps
              imageSrc={"/assets/HRIS.png"}
              altText={"Logo"}
              Title={"HRIS"}
              subTitle={"HRIS Application"}
            />
          </div>
        </div>
      </div>
      <div className="py-10 w-full flex-grow">
        <div className="w-full px-20  my-5 font-normal text-xl">
          <h1 className="text-4xl font-medium">Social Media</h1>
        </div>
        <div className=" ">
          <div className="grid px-20  grid-cols-5 gap-y-4 gap-x-2 ">
            <CardSm
              imageSrc={"/assets/linkedInGarudaFood.jpeg"}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={"/assets/linkedIn.jpeg"}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
            <CardSm
              imageSrc={"/assets/linkedInGarudaFoodWhite.jpeg"}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={"/assets/linkedIn.jpeg"}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
            <CardSm
              imageSrc={"/assets/linkedInGarudaFood.jpeg"}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={"/assets/linkedIn.jpeg"}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
            <CardSm
              imageSrc={"/assets/danaPrestasiSiswa.jpeg"}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={"/assets/linkedIn.jpeg"}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
