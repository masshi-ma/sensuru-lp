"use client";

import Link from "next/link";
import { worksData, WorkItem } from "@/data/works";
import WorkCard from "@/components/ui/WorkCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function WorksPage() {
    // For the purpose of the design, we'll repeat the data to fill the grid as shown in the screenshot
    // The screenshot shows 3 rows of 3 items (9 items total) + pagination
    const allWorks: WorkItem[] = [
        ...worksData,
        ...worksData.map(w => ({ ...w, id: w.id + 10 })), // Duplicate for visual
        ...worksData.map(w => ({ ...w, id: w.id + 20 }))
    ].slice(0, 9); // Take first 9

    return (
        <div className="w-full bg-white relative">
            <Header />
            <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-wide">Works</h1>
                    <p className="text-gray-500 mt-2 text-sm tracking-widest">制作実績</p>
                    {/* Breadcrumb-ish */}
                    <div className="mt-4 text-xs text-gray-400 font-sans tracking-wide">
                        <Link href="/" className="hover:text-gray-600 transition-colors">HOME</Link>
                        <span className="mx-2">/</span>
                        <span>Works</span>
                    </div>
                </div>

                {/* Filter / Sort (Optional placeholder if needed, not in design explicitly but good practice? Design just shows grid) 
                 Actually design shows "HOME / Works" breadcrumb.
                */}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
                    {allWorks.map((item, index) => (
                        <div key={`${item.id}-${index}`}>
                            <WorkCard item={item} showDateAndTag />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2">
                    {/* Active Page */}
                    <button className="w-8 h-8 rounded-full bg-[#66FF99] text-white flex items-center justify-center text-sm font-sans">
                        1
                    </button>
                    {/* Inactive Page */}
                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-sans">
                        2
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-sans">
                        3
                    </button>

                    <span className="text-gray-300 text-sm mx-1">...</span>

                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-sans">
                        30
                    </button>

                    {/* Next Button */}
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#66FF99] transition-colors">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            <Contact />
            <Footer />
        </div>
    );
}
