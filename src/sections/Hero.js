"use client";
import { FaArrowDown } from "react-icons/fa6";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Example from "@/components/typewriter";

export default function Hero() {
    const heroRef = useRef();
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    useMotionValueEvent(translateY, "change", (latestValue) =>
        console.log(latestValue)
    );

    return (
        <section
            ref={heroRef}
            className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip border-b border-b-white h-screen"
        >
            <div className="sectionContainer">
                <div className="md:flex items-center">
                    <div className="md:w-[478px] lg:w-[700px]">
                        {/* <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold tracking-tighter bg-gradient-to-b from-neutral to-[#86ad7d] text-transparent bg-clip-text mt-6">
                            Porte Folio <br /> AAA DEV.
                        </h1> */}
                        <Example />
                        <div className="flex gap-1 items-center mt-[30px]">
                            <Link href="#projects" className="btn flex gap-1 items-center">
                                Start looking <FaArrowDown className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[648px] xl:h-[750px] md:flex-1 relative">
                        <motion.img
                            src="/aaa_black.svg"
                            alt="cog image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                            animate={{
                                translateY: [-30, 30],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 4,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}