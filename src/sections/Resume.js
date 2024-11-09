"use client"; // Ensure you're using client components
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";

export default function Resume() {
    const [isEnglish, setIsEnglish] = useState(true); // Track language state
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "center end"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    const handleToggle = () => {
        setIsEnglish(!isEnglish); // Toggle between true and false
    };
    return (
        <section id="resume" ref={heroRef} className="sectionContainer text-white pt-32">
            <motion.div
                className="headingContainer">
                <h2 className="sectionHeading">Resumé</h2>
                <motion.h3 style={{ scale }} className="sectionDescription">
                    You can find it here, <br /> both in English and Danish
                </motion.h3>
            </motion.div>

            <div className="flex justify-center relative">
                <button onClick={handleToggle} className="btn absolute left-0">{isEnglish ? "English" : "Danish"}</button>
                <div
                    className="rounded-sm h-fit w-[500px] pt-10">
                    {isEnglish ? (
                        <Image
                            src="/cv.webp"
                            alt="resume in English"
                            width={500}
                            height={250}
                            className="rounded-sm shadow-lg object-contain"
                        />
                    ) : (
                        <Image
                            src="/cv-dark.webp"
                            alt="resume in Danish"
                            width={500}
                            height={250}
                            className="rounded-sm shadow-lg object-contain"
                        />
                    )}
                </div>

            </div>
            <Link className="btn btn-primary" target="_blanc" href="https://rxresu.me/aagaardandreas1/cv-andreas">Or find it here <CgExternal className="h-5 w-5" /></Link>
        </section>
    );
}
