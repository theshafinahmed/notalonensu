"use client";

import { HTMLMotionProps, motion } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button">;

function Button({ children, className, ...props }: ButtonProps) {
    return (
        <motion.button
            whileTap={{
                scale: 0.9,
                transition: {
                    type: "spring",
                    bounce: 0.6,
                    duration: 0.2,
                },
            }}
            className={`btn ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}

export default Button;
