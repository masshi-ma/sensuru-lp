"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const worksData = [
    { id: 1, title: "Hokkaido Bread", category: "Food", image: "/images/work_bread.jpg", size: "large" },
    { id: 2, title: "Organic Stick", category: "Goods", image: "/images/work_tags_2.jpg", size: "small" },
    { id: 3, title: "Cosmetic Tube", category: "Product", image: "/images/work_tube.jpg", size: "small" },
    { id: 4, title: "Ceramic Plate", category: "Craft", image: "/images/work_graphic.jpg", size: "small" },
    { id: 5, title: "Wood Diffuser", category: "Aroma", image: "/images/work_fish.jpg", size: "small" },
];

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
                    <button className="group relative flex items-center justify-center h-12 w-12 rounded-full border border-gray-400 bg-white transition-all duration-500 ease-out hover:w-[220px] hover:border-[#66FF99] hover:bg-[#66FF99] overflow-hidden">
                        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:relative group-hover:mr-2 text-gray-700 font-bold tracking-widest text-sm whitespace-nowrap transition-all duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                            制作実績一覧
                        </span>
                        <ArrowRight className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700" size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function WorkCard({ item, large }: { item: any; large?: boolean }) {
    return (
        <div className="group cursor-pointer">
            <div className={`relative overflow-hidden bg-gray-100 mb-4 ${large ? "aspect-[3/4]" : "aspect-square"}`}>
                {/* Placeholder Color if image fails, or use next/image */}
                <div className="absolute inset-0 bg-gray-200" />
                {/* Use a placeholder service or the hero image for now to prevent broken image */}
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col items-start gap-1">
                <span className="px-2 py-1 bg-gray-100 text-[10px] text-gray-500 uppercase tracking-wider rounded-sm">
                    {item.category}
                </span>
                <h3 className="text-sm md:text-base font-serif text-gray-800 group-hover:text-gray-500 transition-colors">
                    {item.title}
                </h3>
            </div>
        </div>
    );
}
