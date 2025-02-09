import Link from "next/link";

export default function Header() {
  return (
    <div className="text-[#8d6237] text-lg md:text-2xl font-sans w-full flex justify-center md:justify-end gap-4 md:gap-8 p-4 absolute top-0 z-10 lg:pt-[20px]">
      <Link href="/">
        <p className="hover:underline hover:underline-offset-8">Intro</p>
      </Link>
      <Link href="/Menu">
        <p className="hover:underline hover:underline-offset-8">Menu</p>
      </Link>
      <Link href="/About">
        <p className="hover:underline hover:underline-offset-8">About</p>
      </Link>
      <Link href="/Contact">
        <p className="hover:underline hover:underline-offset-8">Contact</p>
      </Link>
    </div>
  );
}