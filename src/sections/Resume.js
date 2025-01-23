"use client"; // Ensure you're using client components
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import ShadowAnimation from "@/components/shadowAnimation";

export default function Resume() {
    const resumeRef = useRef(null)
    const [isEnglish, setIsEnglish] = useState(true); // Track language state

    const handleToggle = () => {
        setIsEnglish(!isEnglish); // Toggle between true and false
    };
    return (
        <section id="resume" className="text-neutral pt-32 relative">
            <ShadowAnimation
                className="absolute left-1/2 top-1/2 translate-x-1/2 transform"
                color="#22c55eff"
                blur="600px"
                spread="200px"
                scrollTargetRef={resumeRef}
            />
            <div ref={resumeRef} className="container">
                <div className="headingContainer">
                    <h2 className="sectionHeading">Resumé</h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        viewport={{ once: true, }}
                        className="sectionDescription">
                        You can find it here{/*, <br /> both in English and Danish */}
                    </motion.h3>
                </div>

                <div className="flex justify-center relative">
                    <button
                        onClick={handleToggle}
                        className="btn absolute left-0 flex items-center gap-1"
                    >
                        {isEnglish ? (
                            <>
                                light{" "}
                                <span>
                                    <MdOutlineDarkMode />
                                </span>
                            </>
                        ) : (
                            <>
                                dark
                                <span>
                                    <MdLightMode />
                                </span>
                            </>
                        )}
                    </button>
                    <div className="rounded-sm h-fit w-[500px] pt-10">
                        {isEnglish ? (
                            <Image
                                src="/cv-dark.webp"
                                alt="resume in English"
                                width={500}
                                height={250}
                                className="rounded-sm shadow-lg object-contain"
                            />
                        ) : (
                            <Image
                                src="/cv.webp"
                                alt="resume in Danish"
                                width={500}
                                height={250}
                                className="rounded-sm shadow-lg object-contain"
                            />
                        )}
                    </div>
                </div>
                <Link
                    className="btn btn-primary"
                    target="_blanc"
                    href="https://rxresu.me/aagaardandreas1/cv-andreas"
                >
                    Or find it here <CgExternal className="h-5 w-5" />
                </Link>
            </div>
        </section>
    );
}
