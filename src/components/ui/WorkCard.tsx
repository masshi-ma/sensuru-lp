"use client";

import Link from "next/link";
import Image from "next/image";
import { WorkItem } from "@/data/works";

interface WorkCardProps {
    item: WorkItem;
    large?: boolean;
    showDateAndTag?: boolean;
}

export default function WorkCard({ item, large, showDateAndTag }: WorkCardProps) {
    return (
        <Link href={`/works/${item.id}`} className="block group w-full h-full">
            <div className="w-full h-full flex flex-col gap-4">
                {/* Image Container with Hover Effect */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Category Label Overlay or beside? Usually overlay or simple text below. 
                        Based on previous context, let's keep it clean. 
                    */}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-sans text-gray-400 uppercase tracking-widest">
                            {item.category}
                        </span>
                        {showDateAndTag && item.date && (
                            <span className="text-xs font-sans text-gray-400">
                                {item.date}
                            </span>
                        )}
                    </div>

                    <h3 className="text-lg md:text-xl font-serif font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                        {item.title}
                    </h3>

                    {showDateAndTag && item.tag && (
                        <span className="text-xs text-gray-500 mt-1">
                            {item.tag}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
