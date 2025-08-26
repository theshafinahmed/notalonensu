"use client";

import Button from "@/lib/components/custom/Button";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Header() {
    const [hangoutInfo] = useState({
        state: false,
    });

    return (
        <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4">
            <h1 className="text-2xl font-bold text-primary">Shafin</h1>
            <div className="flex items-center gap-2">
                <Button className="btn-ghost">
                    <Icon
                        icon="heroicons:signal"
                        className={`size-6 ${
                            hangoutInfo.state ? "text-secondary" : ""
                        }`}
                    />
                </Button>
                <Button className="btn-neutral btn-square">
                    <Icon icon="tabler:menu-deep" className="size-4" />
                </Button>
            </div>
        </header>
    );
}

export default Header;
