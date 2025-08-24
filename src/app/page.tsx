"use client";

import { useRouter } from "next/navigation";

function Landing() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/home");
    };

    return (
        <main className="flex flex-col gap-2 items-center justify-center w-rscreen h-rscreen">
            <h1 className="text-4xl font-bold text-primary">NotAloneNSU</h1>
            <p className="text-2xl text-center">
                A platform for NSU students to connect with each other
            </p>
            <div className="my-4">
                <button
                    onClick={handleGetStarted}
                    className="btn btn-primary btn-lg rounded-md duration-100"
                >
                    Get Started
                </button>
            </div>
        </main>
    );
}

export default Landing;
