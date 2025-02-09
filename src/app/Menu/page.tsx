import Image from "next/image";
import backgroundPic from "@/app/Images/Menubackgrpund.jpg";
import first from "@/app/Images/menu1.webp";
import second from "@/app/Images/menu2.webp";
import third from "@/app/Images/menu3.webp";
import four from "@/app/Images/menu5.jpg";
import five from "@/app/Images/menu6.jpg";
import six from "@/app/Images/menu7.webp";
import Header from "../component/Header";

export default function Menu() {
  return (
    <div className="font-sans relative">
      {/* Background Image */}
      <Image
        src={backgroundPic}
        alt=""
        className="w-full h-screen object-cover"
      />

      {/* Header */}
      <Header />

      {/* Menu Title */}
      <div className="w-full max-w-[90%] md:max-w-[500px] bg-white bg-opacity-65 absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center py-4 rounded-[15px]">
        <p className="text-3xl md:text-5xl text-[#4B382A] font-semibold">
          Our Coffee Menu
        </p>
      </div>

      {/* Menu Items Container */}
      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] absolute top-[20%] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 lg:mt-[50px]">
        {/* First Column */}
        <div className="w-full md:w-1/2 bg-[#644937] rounded-[20px] p-4 md:p-6 grid gap-4">
          {/* Hot Cappuccino */}
          <div className="flex items-center gap-4">
            <Image
              src={first}
              alt="Hot Cappuccino"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
            />
            <div>
              <p className="text-lg md:text-xl text-[#352820] font-semibold">
                Hot Cappuccino
              </p>
              <p className="text-black">$150</p>
            </div>
          </div>

          {/* Hot Americano */}
          <div className="flex items-center gap-4">
            <Image
              src={second}
              alt="Hot Americano"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
            />
            <div>
              <p className="text-lg md:text-xl text-[#352820] font-semibold">
                Hot Americano
              </p>
              <p className="text-black">$10</p>
            </div>
          </div>

          {/* Hot Latte */}
          <div className="flex items-center gap-4">
            <Image
              src={third}
              alt="Hot Latte"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
            />
            <div>
              <p className="text-lg md:text-xl text-[#352820] font-semibold">
                Hot Latte
              </p>
              <p className="text-black">$175</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 bg-[#644937] rounded-[20px] p-4 md:p-6 grid gap-4">
          {/* Iced Cappuccino */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-lg md:text-xl text-[#352820] font-semibold ml-[200px]">
                Iced Cappuccino
              </p>
              <p className="text-black ml-[200px]">$29</p>
            </div>
            <Image
              src={four}
              alt="Iced Cappuccino"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
            />
          </div>

          {/* Iced Americano */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-lg md:text-xl text-[#352820] font-semibold ml-[200px]">
                Iced Americano
              </p>
              <p className="text-black ml-[200px]">$180</p>
            </div>
            <Image
              src={five}
              alt="Iced Americano"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
            />
          </div>

          {/* Iced Milky Latte */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-lg md:text-xl text-[#352820] font-semibold ml-[200px]">
                Iced Milky Latte
              </p>
              <p className="text-black ml-[200px]">$18</p>
            </div>
            <Image
              src={six}
              alt="Iced Milky Latte"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}