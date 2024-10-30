"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Example() {
    return (
        <div className="h-[200px] flex items-center">
            <BlockInTextCard
                examples={[
                    "Welcome!",
                    "My name is Andreas Aagaard",
                    "I'm a front-end developer",
                    "This is my portfolio",
                    "Feel free to contact me for any questions or inquiries",
                ]}
            />
        </div>
    );
}

const BlockInTextCard = ({ examples }) => {
    return <Typewrite examples={examples} />;
};

const LETTER_DELAY = 0.07;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((prevIndex) => (prevIndex + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, [examples.length]);

    return (
        <p className="mb-2.5 text-sm font-light uppercase">
            <span className="text-6xl text-white tracking-tight font-semibold">
                {examples[exampleIndex].split(" ").map((word, wordIndex) => (
                    <span key={`${exampleIndex}-${wordIndex}`} className="mr-2 inline-block">
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: letterIndex * LETTER_DELAY,
                                    duration: 0,
                                }}
                                key={`${exampleIndex}-${wordIndex}-${letterIndex}`}
                                className="relative z-50"
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [1, 0] }}
                                    transition={{
                                        delay: FADE_DELAY + letterIndex * LETTER_DELAY,
                                        duration: MAIN_FADE_DURATION,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        delay: letterIndex * LETTER_DELAY,
                                        times: [0, 0.5, 1],
                                        duration: BOX_FADE_DURATION,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
                                />
                            </motion.span>
                        ))}
                    </span>
                ))}
            </span>
        </p>
    );
};
