"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50">
            <h1>
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Sensuru"
                        width={200}
                        height={60}
                        className="w-[120px] md:w-[160px] h-auto object-contain cursor-pointer"
                        priority
                    />
                </Link>
            </h1>
            {/* SP Only Hamburger */}
            <button className="md:hidden text-gray-700">
                <Menu size={28} strokeWidth={1.5} />
            </button>
        </header>
    );
}
