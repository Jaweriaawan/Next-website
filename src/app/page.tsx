import Image from "next/image"
import backgroundImage from "@/app/Images/Introbackground.jpg"
import { RiCupFill } from "react-icons/ri";
import Header from "./component/Header";


export default function Intro(){
  return <div className="font-sans">
    <Image src={backgroundImage} alt="" className="w-full h-[100vh] relative" />
    <Header />
    <div className="w-[400px] h-[200px] bg-black absolute mt-[-680px] ml-[600px] opacity-65 text-center pt-[40px]">
       <p className="font-bold text-5xl text-white">Antique Cafe</p>
       <p className="text-[20px] text-[#C4A484] mt-[20px]">Your daily energy booster</p>
    </div>
    <div className="w-[400px] h-[230px] ml-[600px] bg-black mt-[-540px] absolute opacity-65 px-[15px] pt-[30px]">
      <p className="text-[18px] text-white">Welcome to Antique Cafe – where every sip tells a story and every corner whispers nostalgia. Step in, unwind, and let the aroma of freshly brewed coffee take you on a journey through time.</p>
    </div>
    <div className="w-[250px] h-[60px] bg-black opacity-75 mt-[-295px] ml-[680px] text-[#C4A484] flex px-[40px] text-center pt-[13px] gap-[15px]">
    <RiCupFill className="w-[35px] h-[35px]" />
    <p className="text-[20px] ">Let's explore</p>
    </div>
</div>
}