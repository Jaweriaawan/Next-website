import Image from "next/image"
import background from "@/app/Images/Conatct.jpg"
import second from "@/app/Images/contact2.webp"
import Header from "../component/Header"

export default function Contact(){
  return <div className="font-sans">
   <div className="flex w-full relative">
     <Image src={background} alt="" className="w-[50%] h-[100vh]" />
     <Image src={second} alt="" className="w-[50%] h-[100vh]" />
   </div>
   <Header />
   <div className="w-[550px] h-[700px] bg-black absolute opacity-70 rounded-[20px] ml-[200px] mt-[-750px]">
     <input type="text" placeholder="Name" className="w-[400px] h-[60px] pl-[40px] outline-none mt-[50px] ml-[70px] text-[20px] bg-black border-b-[2px] border-white text-white" />
     <input type="email" placeholder="Email" className="w-[400px] h-[60px] pl-[40px] outline-none mt-[80px] ml-[70px] text-[20px] bg-black border-b-[2px] border-white text-white" />
     <textarea  placeholder="Message" className="w-[400px] h-[200px] pl-[40px] outline-none pt-[10px] mt-[120px] ml-[70px] text-[20px] bg-black border-b-[2px] border-white text-white" /><br />
     <button className="text-white text-[20px] ml-[400px] mt-[10px] hover:opacity-50">Send it</button>
   </div>

   <div className="w-[550px] h-[700px] absolute ml-[1200px] rounded-[20px] bg-white mt-[-750px] opacity-70 text-center pt-[50px]">
      <p className="text-green-900 text-6xl font-semibold">Contact Us</p>
      <p className="text-[19px] mt-[80px] px-[50px] font-semibold">We’d love to hear from you! Whether you have a question, want to book a table, or just chat about your love for antiques and coffee, we’re here for you. Visit us at <span className="text-green-900 font-bold">Antique Cafe</span> to soak in the vintage charm, or reach out via phone at <span className="text-green-900 font-bold">000-0000-0000</span>. You can also drop us an email at <span className="text-green-900 font-bold">gmail@gmail.com</span> we’ll get back to you as soon as we put down our coffee cups! Follow us on [Social Media Handles] for updates, specials, and a daily dose of nostalgia.</p>
   </div>
</div>
}