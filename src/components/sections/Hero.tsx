import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] bg-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/hero_main.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                {/* White Overlay */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
            </div>

            {/* Header Elements (Overlay) */}
            <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-20">
                <h1 className="text-xl md:text-2xl tracking-[0.2em] font-bold text-gray-800 uppercase">
                    Sensuru
                </h1>
                {/* SP Only Hamburger */}
                <button className="md:hidden text-gray-700">
                    <Menu size={28} strokeWidth={1.5} />
                </button>
            </header>

            {/* Main Copy */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* Container for centering, but text aligns somewhat left as per design */}
                <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    {/* Vertical Text */}
                    <div className="absolute left-[10%] md:left-[20%] top-1/2 -translate-y-1/2 z-10">
                        <Image
                            src="/images/hero_text.png"
                            alt="Sensuru Copy"
                            width={300}
                            height={600}
                            className="w-[240px] md:w-[400px] h-auto object-contain select-none"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-20 animate-bounce">
                <span className="text-[10px] tracking-widest uppercase mb-1">Scroll</span>
                <div className="w-[1px] h-12 bg-gray-300"></div>
            </div>
        </section>
    );
}
