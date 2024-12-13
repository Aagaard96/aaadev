"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false); // State for toggling the menu
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for toggling the dropdown
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    // Function to toggle the menu
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    // Function to close the menu when a link is clicked
    const closeMenu = () => setMenuOpen(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setDropdownOpen(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);
    return (
        <header className="z-50 py-5 backdrop-blur-sm fixed w-full">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/aaa_black.svg"
                            alt="AAA Logo"
                            height={80}
                            width={80}
                            className="invert h-[50px] sm:h-[65px] lg:h-[80px]"
                        />
                    </Link>
                    <button
                        className="md:hidden text-2xl text-neutral z-50"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <nav
                        className={`${isMenuOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                            } transition-transform duration-300 ease-in-out uppercase transform md:transform-none md:opacity-100 md:translate-x-0 absolute md:relative top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-gray-950/90 md:bg-transparent flex flex-col md:flex-row justify-center items-center gap-10 md:gap-4 lg:gap-6 text-neutral font-semibold text-2xl md:text-base lg:text-lg`}
                    >
                        <Link
                            href="#welcome"
                            onClick={closeMenu}
                            className="link link-hover"
                        >
                            Welcome
                        </Link>
                        <Link
                            href="#projects"
                            onClick={closeMenu}
                            className="link link-hover"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#resume"
                            onClick={closeMenu}
                            className="link link-hover"
                        >
                            Resumé
                        </Link>
                        <Link
                            href="#about"
                            onClick={closeMenu}
                            className="link link-hover"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            onClick={closeMenu}
                            className="link link-hover btn"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
