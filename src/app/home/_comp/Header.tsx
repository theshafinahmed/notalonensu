"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

function Header() {
    const [hangoutInfo] = useState({
        state: false,
    });

    return (
        <header className="w-full h-16 flex items-center justify-between px-4">
            <h1 className="text-2xl font-bold text-primary">Shafin</h1>
            <div className="flex items-center gap-2">
                <button className="btn btn-ghost">
                    <Icon
                        icon="heroicons:signal"
                        className={`size-6 ${
                            hangoutInfo.state ? "text-secondary" : ""
                        }`}
                    />
                </button>
                <button className="btn btn-neutral btn-square">
                    <Icon icon="tabler:menu-deep" className="size-4" />
                </button>
            </div>
        </header>
    );
}

export default Header;
