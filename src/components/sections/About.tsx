"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
    { id: 1, title: "Consulting", desc: "ヒアリング・現状分析", num: "01", image: "/images/about_step2.png" }, // Balloon
    { id: 2, title: "Planning", desc: "戦略策定・プランニング", num: "02", image: "/images/about_step1.png" }, // Blueprint
    { id: 3, title: "Design", desc: "デザイン・制作", num: "03", image: "/images/about_step3.png" }, // Target
    { id: 4, title: "Development", desc: "実装・システム構築", num: "04", image: "/images/about_step1.png" }, // Reusing Blueprint as placeholder/similar
];

export default function About() {
    return (
        <section className="w-full py-20 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                {/* Left: Text Content */}
                <div className="w-full md:w-5/12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-wide mb-2">
                        About us
                    </h2>
                    <p className="text-gray-500 text-sm tracking-widest mb-8">私たちについて</p>

                    <p className="text-gray-600 leading-loose text-sm md:text-base mb-8">
                        私たちは、デザインとテクノロジーの融合により<br />
                        新たな価値を創造するクリエイティブチームです。<br />
                        クライアントの想いを形にし、<br />
                        ユーザーの心に響く体験を提供します。<br />
                        <br />
                    </p>

                    <button className="flex items-center gap-2 text-sm tracking-widest text-gray-800 border-b border-gray-800 pb-1 hover:opacity-70 transition-opacity">
                        VIEW MORE <ArrowRight size={16} />
                    </button>
                </div>

                {/* Right: Slider (Scroll Snap) */}
                <div className="w-full md:w-7/12 overflow-hidden">
                    {/* Slider Container */}
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar">
                        {steps.map((step) => (
                            <div key={step.id} className="snap-start shrink-0 w-[280px] md:w-[300px] bg-white p-6 shadow-sm flex flex-col justify-between aspect-[3/4] md:aspect-[4/3] relative overflow-hidden group">
                                <div className="z-10">
                                    <span className="text-4xl font-light text-gray-200">{step.num}</span>
                                    <h3 className="text-xl font-serif text-gray-800 mt-2">{step.title}</h3>
                                </div>

                                {/* Image Area */}
                                <div className="relative w-full h-[120px] my-4">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="z-10">
                                    <div className="w-8 h-[1px] bg-gray-300 mb-3"></div>
                                    <p className="text-sm text-gray-500">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Dots (Visual Only for now) */}
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
