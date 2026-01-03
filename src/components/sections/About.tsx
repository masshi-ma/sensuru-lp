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

                    <div className="flex justify-start">
                        <button className="group relative flex items-center justify-center h-12 w-12 rounded-full border border-gray-400 bg-white transition-all duration-500 ease-out hover:w-[220px] hover:border-[#66FF99] hover:bg-[#66FF99] overflow-hidden">
                            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:relative group-hover:mr-2 text-gray-700 font-bold tracking-widest text-sm whitespace-nowrap transition-all duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                                私たちについて
                            </span>
                            <ArrowRight className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700" size={20} />
                        </button>
                    </div>
                </div>

                {/* Right: Slider (Scroll Snap) */}
                <div className="w-full md:w-7/12 overflow-hidden">
                    {/* Slider Container */}
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar">
                        {steps.map((step) => (
                            <div key={step.id} className="snap-start shrink-0 w-[280px] md:w-[300px] bg-white p-6 shadow-sm flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
                                <div className="z-10">
                                    <span className="text-4xl font-light text-gray-200">{step.num}</span>
                                    <h3 className="text-xl font-serif text-gray-800 mt-2">{step.title}</h3>
                                </div>

                                {/* Image Area - Increased size by 200% (approx) */}
                                <div className="relative w-full h-[240px] my-4">
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
