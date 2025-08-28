"use client";

import AppConstant from "@/utils/constants";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Setup() {
    // TODO: Get to know from the database that if the user really completed the setup or not;
    const [isSetupCompleted] = useState(false);
    const router = useRouter();

    const [semester, setSemester] = useState<string>("");
    const [gender, setGender] = useState<string>();
    const [topicsOfInterest, setTopicsOfInterest] = useState<string[]>([]);

    useEffect(() => {
        if (isSetupCompleted) {
            router.replace("/");
        }
    }, [isSetupCompleted, router]);

    return (
        <main className="w-rscreen min-h-rscreen flex flex-col p-4 gap-4">
            <div>
                <h1 className="text-2xl font-bold text-primary">Setup Page</h1>
                <p className="text-neutral/50 my-4 text-justify text-sm">
                    Welcome to Notalonensu! We need to set up your account before you can start
                    using the app.
                </p>
            </div>

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                        type: "spring",
                        stiffness: 1000,
                        damping: 10,
                        mass: 1,
                    }}
                    className="flex flex-col gap-2 bg-base-300 p-4 rounded-3xl shadow-xl"
                >
                    <p className="text-sm font-bold opacity-50">Step 1</p>
                    <label className="text-lg">Which semester you are currently in?</label>
                    <input
                        type="number"
                        value={semester}
                        onChange={(e) => {
                            setSemester(e.target.value);
                        }}
                        className="input w-full h-12 text-lg focus:outline-none rounded-full!"
                        placeholder="e.g. 3"
                    />
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                {semester && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 10,
                            mass: 1,
                        }}
                        className="flex flex-col gap-2 bg-base-300 p-4 rounded-3xl shadow-xl"
                    >
                        <p className="text-sm font-bold opacity-50">Step 2</p>
                        <label className="text-lg">You are: </label>
                        <div className="flex flex-row gap-4">
                            <label className="label cursor-pointer">
                                <span className="label-text">Male</span>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={gender === "male"}
                                    name="gender"
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                    }}
                                    className="radio radio-primary"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Female</span>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={gender === "female"}
                                    name="gender"
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                    }}
                                    className="radio radio-primary"
                                />
                            </label>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {gender && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 10,
                            mass: 1,
                        }}
                        className="flex flex-col gap-2 bg-base-300 p-4 rounded-3xl shadow-xl"
                    >
                        <p className="text-sm font-bold opacity-50">Step 3</p>
                        <label className="text-lg">Select your topics of interest: </label>
                        <div className="flex flex-wrap gap-4">
                            {AppConstant.topicsOfInterest.map((topic) => (
                                <label key={topic} className="label cursor-pointer">
                                    <span className="label-text">{topic}</span>
                                    <input
                                        type="checkbox"
                                        value={topic}
                                        checked={topicsOfInterest.includes(topic)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setTopicsOfInterest([...topicsOfInterest, topic]);
                                            } else {
                                                setTopicsOfInterest(
                                                    topicsOfInterest.filter((t) => t !== topic)
                                                );
                                            }
                                        }}
                                        name="topicsOfInterest"
                                        className="checkbox checkbox-primary"
                                    />
                                </label>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Setup;
