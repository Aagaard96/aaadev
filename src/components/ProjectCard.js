"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CgExternal } from "react-icons/cg";


export default function ProjectCard({ title, description, occupation, img, position, link }) {
    return (
        <div
            className={`max-w-[800px]  p-8 bg-gray-800 shadow-[0_7px_18px_#000] mb-6 rounded-sm text-neutral flex flex-col md:flex-row gap-10 group
                ${position === 'left' ? 'ml-auto xl:transform xl:-translate-x-[35%]' : 'mr-auto xl:transform xl:translate-x-[35%]'}
            `}
        >
            {position === 'left' ? (
                <>
                    {/* Text on the left */}
                    <div className="project-info-ctn">
                        <div className="pb-5">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-occupation">{occupation}</p>
                            <p className="project-description">{description}</p>
                        </div>
                        <Link target="_blank" className="btn project-btn-link" href={link}>Show me <CgExternal className="h-5 w-5" /></Link>
                    </div>
                    {/* Image on the right */}
                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, }}
                        transition={{
                            duration: 0.75,
                        }}
                        viewport={{ once: true, amount: 0.75 }}
                        className="project-img-ctn"
                    >
                        <Image src={img} priority height="600" width="600" alt={title} className="project-img" />
                    </motion.div>
                </>
            ) : (
                <>
                    {/* Image on the left */}
                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.75,
                        }}
                        viewport={{ once: true, amount: 0.75 }}
                        className="project-img-ctn">
                        <Image src={img} priority height="600" width="600" alt={title} className="project-img" />
                    </motion.div>
                    {/* Text on the right */}
                    <div className="project-info-ctn text-end">
                        <div className="pb-5">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-occupation">{occupation}</p>
                            <p className="project-description">{description}</p>
                        </div>
                        <Link target="_blank" className="btn self-end project-btn-link" href={link}>Show me <CgExternal className="h-5 w-5" /></Link>
                    </div>
                </>
            )}
        </div>
    )
}
