import Image from "next/image";
import backgroundImage from "@/app/Images/Introbackground.jpg";
import { RiCupFill } from "react-icons/ri";
import Header from "./component/Header";

export default function Intro() {
  return (
    <div className="font-sans relative">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        className="w-full h-screen object-cover"
      />

      {/* Header */}
      <Header />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        {/* Antique Cafe Title */}
        <div className="w-full max-w-[400px] bg-black bg-opacity-65 p-6 rounded-lg mb-4">
          <p className="font-bold text-3xl md:text-5xl text-white">Antique Cafe</p>
          <p className="text-lg md:text-xl text-[#C4A484] mt-4">Your daily energy booster</p>
        </div>

        {/* Welcome Text */}
        <div className="w-full max-w-[400px] bg-black bg-opacity-65 p-6 rounded-lg mb-4">
          <p className="text-base md:text-lg text-white">
            Welcome to Antique Cafe – where every sip tells a story and every corner whispers nostalgia. Step in, unwind, and let the aroma of freshly brewed coffee take you on a journey through time.
          </p>
        </div>

        {/* Explore Button */}
        <div className="w-full max-w-[250px] bg-black bg-opacity-75 p-4 rounded-lg flex items-center justify-center gap-3">
          <RiCupFill className="w-6 h-6 md:w-8 md:h-8 text-[#C4A484]" />
          <p className="text-lg md:text-xl text-[#C4A484]">Let's explore</p>
        </div>
      </div>
    </div>
  );
}