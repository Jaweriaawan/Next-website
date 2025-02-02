import Image from "next/image"
import backgroundpictue from "@/app/Images/About.jpg"
import Header from "../component/Header"


export default function About (){
  return <div className="font-sans">
  <Image src={backgroundpictue} alt="" className="w-full h-[100vh] relative" />
  <Header /> 
  <div className="w-[30%] h-[650px] bg-white absolute mt-[-750px] ml-[660px] rounded-[20px] opacity-70 text-center pt-[70px]">
     <p className="text-green-900 text-6xl font-semibold">About Our Cafe</p>
     <p className="text-[19px] mt-[80px] px-[60px] font-semibold">Step into our Antique Café, where every sip tells a story! ☕ Immerse yourself in the rich aroma of freshly brewed coffee, crafted with the finest beans for an unforgettable taste. The warm, vintage ambiance, paired with the perfect blend of flavors, creates a cozy retreat from the modern rush. Every cup is a journey through time, with a hint of nostalgia and a whole lot of charm. Come, savor the past—one sip at a time!</p>
  </div>
</div>
}