import Link from "next/link";

export default function Header(){
  return <div className="text-[#8d6237] text-[24px] font-sans w-full flex gap-[35px] pl-[1450px] pt-[20px] mt-[-900px] absolute">
    <Link href="/"><p className="hover:underline hover:underline-offset-8">Intro</p></Link>
    <Link href="/Menu"><p className="hover:underline hover:underline-offset-8">Menu</p></Link>
    <Link href="/About"><p className="hover:underline hover:underline-offset-8">About</p></Link>
    <Link href="/Contact"><p className="hover:underline hover:underline-offset-8">Contact</p></Link>
</div>
}