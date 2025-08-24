import { fonts } from "@/utils/fonts";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NotAloneNSU",
};

export const viewport: Viewport = {
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fonts.baloo2.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
