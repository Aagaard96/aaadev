"use client"; // Ensure you're using client components
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Resume() {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <section className="container text-white">
            <div className="mb-10">
                <h2 className="section-heading">Resumé</h2>
                <h3 className="section-main-heading">You can find it here, <br /> both in english and danish</h3>
            </div>
            <div className="flex justify-center relative">
                <div className="rounded-lg h-fit w-[500px]">
                    <Image
                        src="/cv-dark.webp"
                        alt="resume"
                        width={500}
                        height={250}
                        className="rounded-lg shadow-lg object-contain"
                    />
                </div>
                <motion.div
                    className="absolute w-40 h-40 bg-gray-800 rounded-lg skew-y-6 border-2 border-[#86ad7d]  top-[10%] right-[80%] -z-20"
                    style={{ scale }}
                >
                    <motion.div
                        style={{
                            scaleY: scrollYProgress
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ rotate: 180, scale: 1 }} // Trigger this animation when in view
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1.5
                    }}
                    className="absolute h-[200px] w-[200px] bg-gray-800 rounded-full border-2 border-[#86ad7d] -skew-y-12 top-[35%] left-[75%] -z-20"
                    viewport={{ once: true }} // Optional: Set to true if you want the animation to trigger only once
                ></motion.div>

            </div>
        </section>
    );
}
