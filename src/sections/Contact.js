"use client";
import ShadowAnimation from "@/components/shadowAnimation";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
    const contactRef = useRef(null)
    return (
        <section ref={contactRef} id="contact" className="container py-32 relative">
            <div className="headingContainer">
                <h2 className="sectionHeading">Contact</h2>
                <h3 className="sectionDescription">
                    Whether you want to collaborate or ask a question, hit me up!
                </h3>
            </div>
            <ShadowAnimation
                className="absolute left-0 top-0 translate-x-1/2 transform -z-10"
                color="#5455ff"
                blur="800px"
                spread="175px"
                scrollTargetRef={contactRef}
            />
            <div className="flex flex-auto flex-col p-[2rem] gap-2 max-w-md mx-auto bg-gray-800 rounded-sm">
                <h3 className="sectionHeading">Get in touch</h3>
                <form
                    name="contact"
                    className="text-black flex flex-col gap-3 align-center"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className="input"
                        name="name"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="input"
                        name="email"
                    />
                    <textarea
                        placeholder="Message"
                        rows={5}
                        cols={10}
                        required
                        className="input"
                        name="message"
                    />
                    <motion.button
                        whileInView={{ backgroundColor: "#215864" }} // Target color when in view (red)
                        transition={{ duration: 1.5, delay: 1 }} // Animation duration
                        viewport={{ once: true }} // Triggers animation only once when it comes in view
                        className="btn btn-primary"
                        type="submit"
                    >
                        Send!
                    </motion.button>
                </form>
            </div>
        </section>
    );
}
