import Image from "next/image";
import backgroundpictue from "@/app/Images/About.jpg";
import Header from "../component/Header";

export default function About() {
  return (
    <div className="font-sans relative">
      {/* Background Image */}
      <Image
        src={backgroundpictue}
        alt=""
        className="w-full h-screen object-cover"
      />

      {/* Header */}
      <Header />

      {/* About Content Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-[90%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] bg-white bg-opacity-70 rounded-[20px] p-6 md:p-10 text-center">
          {/* Title */}
          <p className="text-green-900 text-4xl md:text-5xl lg:text-6xl font-semibold">
            About Our Cafe
          </p>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl mt-8 md:mt-12 px-4 md:px-8 font-semibold">
            Step into our Antique Café, where every sip tells a story! ☕ Immerse
            yourself in the rich aroma of freshly brewed coffee, crafted with
            the finest beans for an unforgettable taste. The warm, vintage
            ambiance, paired with the perfect blend of flavors, creates a cozy
            retreat from the modern rush. Every cup is a journey through time,
            with a hint of nostalgia and a whole lot of charm. Come, savor the
            past—one sip at a time!
          </p>
        </div>
      </div>
    </div>
  );
}