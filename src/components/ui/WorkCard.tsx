"use client";

import Image from "next/image";
import { WorkItem } from "@/data/works";

interface WorkCardProps {
    item: WorkItem;
    large?: boolean;
    showDateAndTag?: boolean; // For the list page design
}

export default function WorkCard({ item, large, showDateAndTag = false }: WorkCardProps) {
    return (
        <div className="group cursor-pointer flex flex-col gap-3">
            <div className={`relative overflow-hidden bg-gray-100 ${large ? "aspect-[3/4]" : "aspect-square"}`}>
                <div className="absolute inset-0 bg-gray-200" />
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col items-start gap-1">
                {showDateAndTag ? (
                    // Layout for the list page
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-500 font-sans">{item.date}</span>
                            <span className="px-2 py-[2px] bg-gray-200 text-[10px] text-gray-600 rounded-full">
                                {item.tag || "Web site"}
                            </span>
                        </div>
                        <h3 className="text-sm font-sans text-gray-800">
                            {item.title}
                        </h3>
                    </div>
                ) : (
                    // Layout for the homepage (simple)
                    <>
                        <span className="px-2 py-1 bg-gray-100 text-[10px] text-gray-500 uppercase tracking-wider rounded-sm">
                            {item.category}
                        </span>
                        <h3 className="text-sm md:text-base font-serif text-gray-800 group-hover:text-gray-500 transition-colors">
                            {item.title}
                        </h3>
                    </>
                )}
            </div>
        </div>
    );
}
