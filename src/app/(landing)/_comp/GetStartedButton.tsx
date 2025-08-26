"use client";

import Button from "@/lib/components/custom/Button";
import { useRouter } from "next/navigation";

function GetStartedButton() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/home");
    };

    return (
        <div className="my-4">
            <Button onClick={handleGetStarted} className="btn-primary btn-lg ">
                Get Started
            </Button>
        </div>
    );
}

export default GetStartedButton;
