import Image from "next/image"
import backgroundPic from "@/app/Images/Menubackgrpund.jpg"
import first from "@/app/Images/menu1.webp"
import second from "@/app/Images/menu2.webp"
import third from "@/app/Images/menu3.webp"
import four from "@/app/Images/menu5.jpg"
import five from "@/app/Images/menu6.jpg"
import six from "@/app/Images/menu7.webp"
import Header from "../component/Header"

export default function Menu (){
  return <div className="font-sans">
   <Image src={backgroundPic} alt="" className="w-ful h-[100vh] relative" />
    <Header />
   <div className="w-[500px] h-[80px] bg-white absolute mt-[-770px] ml-[740px] font-semibold opacity-65 text-center pt-[10px] rounded-[15px] text-[#4B382A]">
    <p className="text-5xl">Our Coffee Menu</p>
   </div>

   <div className="w-[50%] h-[600px] absolute mt-[-630px] ml-[25%] flex gap-[60px]">
     <div className="w-[450px] h-[600px] bg-[#644937] grid grid-rows-3 gap-[15px] rounded-[20px]">
         <div className="w-[400px] h-[190px] flex pl-[20px] pt-[20px]">
           <Image src={first} alt="" className="w-[150px] h-[150px]" />
             <div className="text-[20px] font-semibold pl-[20px] pt-[40px]">
                 <p className="text-[#352820]">Hot Cappuccino</p>
                 <p className="text-black">$150</p>
             </div>
         </div>

         <div className="w-[400px] h-[190px] flex pl-[20px] pt-[20px]">
         <Image src={second} alt="" className="w-[150px] h-[150px]" />
             <div className="text-[20px] font-semibold pl-[20px] pt-[40px]">
                 <p className="text-[#352820]">Hot Americano</p>
                 <p className="text-black">$10</p>
             </div>
         </div>

         <div className="w-[400px] h-[190px] flex pl-[20px] pt-[20px]">
         <Image src={third} alt="" className="w-[150px] h-[150px]" />
              <div className="text-[20px] font-semibold pl-[20px] pt-[40px]">
                 <p className="text-[#352820]">Hot Latte</p>
                 <p className="text-black">$175</p>
              </div>
         </div>
     </div>

     <div className="w-[450px] h-[600px] bg-[#644937] grid grid-rows-3 gap-[15px] rounded-[20px]">
         <div className="w-[400px] h-[190px] flex pl-[80px] pt-[20px]">
             <div className="text-[20px] font-semibold pr-[20px] pt-[40px]">
                 <p className="text-[#352820]">Iced Cappuccino</p>
                 <p className="text-black">$29</p>
             </div>
            <Image src={four} alt="" className="w-[150px] h-[150px]" />
         </div>

         <div className="w-[400px] h-[190px] flex pl-[80px] pt-[20px]">
             <div className="text-[20px] font-semibold pr-[20px] pt-[40px]">
                 <p className="text-[#352820]">Iced Americano</p>
                 <p className="text-black">$180</p>
             </div>
            <Image src={five} alt="" className="w-[150px] h-[150px]" />
         </div>

         <div className="w-[400px] h-[190px] flex pl-[80px] pt-[20px]">
              <div className="text-[20px] font-semibold pr-[20px] pt-[40px]">
                 <p className="text-[#352820]">Iced Milky Latte</p>
                 <p className="text-black">$18</p>
              </div>
            <Image src={six} alt="" className="w-[150px] h-[150px]" />
         </div>
     </div>
   </div>
</div>
}