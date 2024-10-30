import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {
    return (
        <header className="z-20 py-5 backdrop-blur-sm fixed w-full">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Image
                        src="/aaa_black.svg"
                        alt="AAA Logo"
                        height={80}
                        width={80}
                        className="invert"
                    />
                    <TiThMenuOutline className="w-5 h-5 md:hidden" />
                    <nav className="hidden md:flex gap-6 text-neutral-300 items-center tracking-tight">
                        <Link href="#projects">Projects</Link>
                        <Link href="#">Resumé</Link>
                        <Link href="#">About</Link>
                        <Link href="#contact" className="bg-[#86ad7d] shadow-inner text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center">Contact</Link>
                    </nav>
                </div>
            </div>

        </header>
    )
}