import Image from "next/image";
import background from "@/app/Images/Conatct.jpg";
import second from "@/app/Images/contact2.webp";
import Header from "../component/Header";

export default function Contact() {
  return (
    <div className="font-sans relative">
      {/* Background Images */}
      <div className="flex flex-col lg:flex-row w-full">
        <Image
          src={background}
          alt=""
          className="w-full lg:w-1/2 h-[50vh] lg:h-screen object-cover"
        />
        <Image
          src={second}
          alt=""
          className="w-full lg:w-1/2 h-[50vh] lg:h-screen object-cover"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Container for Contact Form and Contact Information */}
      <div className="w-full max-w-[90%] md:max-w-[1200px] mx-auto absolute top-[10%] left-1/2 transform -translate-x-1/2 p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-black bg-opacity-70 rounded-[20px] p-6 md:p-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 md:h-14 pl-4 outline-none mt-4 text-lg bg-black border-b-2 border-white text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 md:h-14 pl-4 outline-none mt-6 text-lg bg-black border-b-2 border-white text-white"
            />
            <textarea
              placeholder="Message"
              className="w-full h-32 md:h-40 pl-4 outline-none pt-2 mt-6 text-lg bg-black border-b-2 border-white text-white"
            />
            <br />
            <button className="text-white text-lg md:text-xl mt-4 hover:opacity-50">
              Send it
            </button>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 bg-white bg-opacity-70 rounded-[20px] p-6 md:p-8 text-center">
            <p className="text-green-900 text-4xl md:text-5xl lg:text-6xl font-semibold">
              Contact Us
            </p>
            <p className="text-base md:text-lg mt-6 md:mt-8 px-4 md:px-6 font-semibold">
              We’d love to hear from you! Whether you have a question, want to
              book a table, or just chat about your love for antiques and coffee,
              we’re here for you. Visit us at{" "}
              <span className="text-green-900 font-bold">Antique Cafe</span> to
              soak in the vintage charm, or reach out via phone at{" "}
              <span className="text-green-900 font-bold">000-0000-0000</span>.
              You can also drop us an email at{" "}
              <span className="text-green-900 font-bold">gmail@gmail.com</span>.
              We’ll get back to you as soon as we put down our coffee cups!
              Follow us on [Social Media Handles] for updates, specials, and a
              daily dose of nostalgia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}