"use client";

import { useRouter } from "next/navigation";

function GetStartedButton() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/home");
    };

    return (
        <div className="my-4">
            <button
                onClick={handleGetStarted}
                className="btn btn-primary btn-lg duration-100"
            >
                Get Started
            </button>
        </div>
    );
}

export default GetStartedButton;
