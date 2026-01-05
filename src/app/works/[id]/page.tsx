"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { worksData, WorkItem } from "@/data/works";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use() or await in async component (Next.js 15+)
    // Since this is a client component, we need to handle the promise or just use standard props if unwrapped by parent.
    // Actually in Next.js 15, params is a Promise.
    // However, to keep it simple and safe, let's use the 'use' hook if available or handle state.

    // NOTE: For client component, params is a promise.
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
    const [work, setWork] = useState<WorkItem | null>(null);

    // Resolving params and finding work logic
    useEffect(() => {
        params.then((p) => {
            setResolvedParams(p);
            const id = parseInt(p.id, 10);
            const foundWork = worksData.find((w) => w.id === id);
            if (foundWork) {
                setWork(foundWork);
            } else {
                // If not found, we could redirect or show error, but layout might differ.
                // For now, just leave logic to render null or loading
            }
        });
    }, [params]);

    if (!resolvedParams) return <div className="min-h-screen bg-white" />; // Loading state
    if (!work) return notFound();

    return (
        <div className="w-full bg-white relative">
            <Header />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
                {/* Header / Title Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-wide">Works</h1>
                    <p className="text-gray-500 mt-2 text-sm tracking-widest">制作実績</p>

                    {/* Breadcrumbs */}
                    <div className="mt-4 text-xs text-gray-400 font-sans tracking-wide">
                        <Link href="/" className="hover:text-gray-600 transition-colors">HOME</Link>
                        <span className="mx-2">/</span>
                        <Link href="/works" className="hover:text-gray-600 transition-colors">Works</Link>
                        <span className="mx-2">/</span>
                        <span>{work.title}</span>
                    </div>
                </div>

                {/* Main Visual */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-gray-100 mb-16 overflow-hidden">
                    <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto">
                    {/* Tags and Title */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-gray-200 pb-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-gray-200 text-xs text-gray-600 rounded-full">
                                    {work.tag || "Web site"}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-sans">
                                {work.description ? work.description.split("\n")[0] : work.title}
                                {/* Using first line of description as japanese title if available, else standard title */}
                            </h2>
                            <p className="text-sm text-gray-500 font-sans mt-1">
                                {work.title}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 font-sans">{work.date}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-16 text-gray-700 leading-loose font-sans whitespace-pre-line">
                        {work.description}
                    </div>

                    {/* Gallery / Extra Images */}
                    <div className="flex flex-col gap-12 mb-20">
                        {work.imagesGallery?.map((img, idx) => (
                            <div key={idx} className="relative w-full aspect-[3/4] md:aspect-[2/3] max-w-[500px] mx-auto bg-gray-100">
                                <Image
                                    src={img}
                                    alt={`Detail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Project Info Table/Footer */}
                    <div className="flex justify-center gap-12 border-t border-gray-200 pt-12 mb-20">
                        {/* Simple info layout based on design ("Client", "Role" etc. shown in small text at bottom potentially?) 
                             Design image shows some small text at bottom, assuming it's credits.
                         */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-gray-400 uppercase tracking-widest">Client</span>
                            <span className="text-sm text-gray-700">{work.client || "Client Name"}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-gray-400 uppercase tracking-widest">Role</span>
                            <span className="text-sm text-gray-700">{work.role || "Role Name"}</span>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="flex justify-center">
                    <Link href="/works" className="px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors uppercase tracking-widest">
                        Back to List
                    </Link>
                </div>

            </div>

            <Contact />
            <Footer />
        </div>
    );
}
