"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newsItems = [
    { id: 1, date: "2024.11.20", category: "News", title: "年末年始の営業について", image: "/images/work_tube.jpg" },
    { id: 2, date: "2024.11.15", category: "Blog", title: "新作コレクションの先行予約を開始しました", image: "/images/work_fish.jpg" },
    { id: 3, date: "2024.11.10", category: "News", title: "メディア掲載情報：雑誌『Example』12月号", image: "/images/work_graphic.jpg" },
    { id: 4, date: "2024.11.05", category: "Blog", title: "冬の乾燥対策におすすめのアイテム", image: "/images/hero_main.jpg" },
];

export default function News() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? newsItems
        : newsItems.filter(item => item.category === filter);

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
                {/* Left: Title & Filter */}
                <div className="w-full md:w-1/4">
                    <h2 className="text-4xl font-serif font-bold text-gray-800 tracking-wide mb-2">
                        News / Blog
                    </h2>
                    <p className="text-gray-500 text-sm tracking-widest mb-8">お知らせ</p>

                    {/* Filter Buttons */}
                    <div className="flex flex-row md:flex-col gap-4">
                        {["All", "News", "Blog"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-left text-sm tracking-widest py-2 px-4 md:px-0 md:border-l-2 md:pl-4 transition-all duration-300
                            ${filter === cat
                                        ? "text-gray-900 border-gray-900 font-medium"
                                        : "text-gray-400 border-transparent hover:text-gray-600"
                                    }
                        `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: List */}
                <div className="w-full md:w-3/4">
                    <div className="flex flex-col gap-8">
                        {filteredItems.map((item) => (
                            <article key={item.id} className="group flex gap-6 items-center border-b border-gray-100 pb-8 cursor-pointer">
                                <div className="relative w-24 h-24 md:w-32 md:h-24 bg-gray-100 shrink-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-4 items-center">
                                        <time className="text-xs text-gray-400 tracking-wider">{item.date}</time>
                                        <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 uppercase tracking-widest">{item.category}</span>
                                    </div>
                                    <h3 className="text-sm md:text-lg text-gray-800 group-hover:text-gray-500 transition-colors line-clamp-2 md:line-clamp-1">
                                        {item.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-end md:justify-center">
                        <button className="group relative flex items-center justify-center h-12 w-12 rounded-full border border-gray-400 bg-white transition-all duration-500 ease-out hover:w-[220px] hover:border-[#66FF99] hover:bg-[#66FF99] overflow-hidden">
                            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:relative group-hover:mr-2 text-gray-700 font-bold tracking-widest text-sm whitespace-nowrap transition-all duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                                お知らせ一覧
                            </span>
                            <ArrowRight className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
