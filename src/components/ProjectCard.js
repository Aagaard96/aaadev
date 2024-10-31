"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";


export default function ProjectCard({ title, description, occupation, img, position, link }) {
    return (
        <div
            className={`w-[800px] h-[250px] p-8 bg-gray-800 shadow-[0_7px_18px_#000] mb-6 rounded-sm text-white flex gap-10 group
                ${position === 'left' ? 'ml-auto transform -translate-x-[35%]' : 'mr-auto transform translate-x-[35%]'}
            `}
        >
            {position === 'left' ? (
                <>
                    {/* Text on the left */}
                    <div className="flex-1 text-left flex justify-center flex-col">
                        <div className="pb-5">
                            <h3 className="font-extrabold text-2xl">{title}</h3>
                            <p className="font-medium text-lg">{occupation}</p>
                            <p className="text-sm">{description}</p>
                        </div>
                        <Link className="btn w-fit flex items-center gap-2 uppercase" href={link}>Show me <CgExternal className="h-5 w-5" /></Link>
                    </div>
                    {/* Image on the right */}
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,

                        }}
                        viewport={{ once: true }}
                        className="relative flex-1 group-hover:scale-105 duration-300">
                        <Image src={img} fill alt={title} className="object-cover rounded-sm border border-neutral shadow-[0_7px_14px_#000] " />
                    </motion.div>

                </>
            ) : (
                <>
                    {/* Image on the left */}
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,

                        }}
                        viewport={{ once: true }}
                        className="relative flex-1 group-hover:scale-105 duration-300">
                        <Image src={img} fill alt={title} className="object-cover rounded-sm border border-neutral shadow-[0_7px_14px_#000] " />
                    </motion.div>
                    {/* Text on the right */}
                    <div className="flex-1 text-right flex justify-center flex-col">
                        <div className="pb-5">
                            <h3 className="font-extrabold text-2xl">{title}</h3>
                            <p className="font-medium text-lg">{occupation}</p>
                            <p className="text-sm">{description}</p>
                        </div>
                        <Link className="btn w-fit self-end flex items-center gap-2 uppercase" href={link}>Show me <CgExternal className="h-5 w-5" /></Link>
                    </div>
                </>
            )}
        </div>
    )
}
