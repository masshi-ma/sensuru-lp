"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { worksData } from "@/data/works";
import WorkCard from "@/components/ui/WorkCard";

export default function Works() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-wide">Works</h2>
                    <p className="text-gray-500 mt-2 text-sm tracking-widest">制作実績</p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main (Left) - PC: 40-50% width */}
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                        {/* Large Item */}
                        {worksData.filter(d => d.size === "large").map(item => (
                            <WorkCard key={item.id} item={item} large />
                        ))}
                    </div>

                    {/* Sub (Right) - PC: Grid 2 cols */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 content-start">
                        {worksData.filter(d => d.size === "small").map(item => (
                            <WorkCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* More Button */}
                <div className="mt-16 flex justify-center">
                    <Link href="/works">
                        <button className="group relative flex items-center justify-center h-12 w-12 rounded-full border border-gray-400 bg-white transition-all duration-500 ease-out hover:w-[220px] hover:border-[#66FF99] hover:bg-[#66FF99] overflow-hidden">
                            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:relative group-hover:mr-2 text-gray-700 font-bold tracking-widest text-sm whitespace-nowrap transition-all duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                                制作実績一覧
                            </span>
                            <ArrowRight className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700" size={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

