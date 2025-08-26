"use client";

import Button from "@/lib/components/custom/Button";
import { motion } from "motion/react";

function FinishSetupCard() {
    return (
        <motion.div
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            className="w-full bg-secondary text-secondary-content p-4 rounded-xl flex flex-col"
        >
            <h1 className="text-2xl font-bold">Want to join hangouts?</h1>
            <p>A little more steps required to get started</p>
            <Button className="btn btn-neutral mt-4">
                Finish Required Steps
            </Button>
        </motion.div>
    );
}

export default FinishSetupCard;
