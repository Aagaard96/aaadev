import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ShadowAnimation({
    className,
    color = "#22C55E80",
    blur = "300px",
    spread = "175px",
    scrollTargetRef
}) {
    const shadowRef = useRef(null);

    // If no external ref is passed, fall back to using local shadowRef
    const targetRef = scrollTargetRef || shadowRef;

    const { scrollYProgress: scrollYProgressShadow } = useScroll({
        target: targetRef,
        offset: ["start end", "center center"],
    });
    const opacity = useTransform(scrollYProgressShadow, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={targetRef}
            className={className}
            style={{
                opacity: opacity,
                boxShadow: `0 0 ${blur} ${spread} ${color}`,  // Using dynamic hex color and spread
            }}
        ></motion.div>
    );
}
