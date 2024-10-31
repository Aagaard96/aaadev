import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {
    return (
        <header className="z-20 py-5 backdrop-blur-sm fixed w-full">
            <div className="sectionContainer">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/aaa_black.svg"
                            alt="AAA Logo"
                            height={80}
                            width={80}
                            className="invert"
                        />
                    </Link>
                    <TiThMenuOutline className="w-5 h-5 md:hidden" />
                    <nav className="hidden md:flex gap-6 text-neutral items-center tracking-tight">
                        <Link href="#projects">Projects</Link>
                        <Link href="#resume">Resumé</Link>
                        <Link href="#about">About</Link>
                        <Link
                            href="#contact"
                            className="btn"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
