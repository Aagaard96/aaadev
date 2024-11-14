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
            className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip border-b border-b-white"
        >
            <div className="container">
                <div className="flex flex-col justify-center md:flex-row items-center h-screen ">
                    <div className="w-[300px] md:w-[478px] lg:w-[700px]">
                        <Example />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{ delay: 7, duration: 2 }}
                            className="flex gap-1 items-center justify-center md:justify-start mt-[30px]">
                            <Link href="#projects" className="btn flex gap-1 items-center">
                                Start looking <FaArrowDown className="h-5 w-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="mt-20 md:mt-0 md:h-[648px] xl:h-[750px] md:flex-1 relative hidden md:block">
                        <motion.img
                            src="/aaa_black.svg"
                            alt="cog image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none sm:-left-56 md:-left-56 lg:-left-18"
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