"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function CompanyPage() {
    return (
        <div className="w-full bg-white text-gray-800">
            <Header />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide">Company</h1>
                    <p className="text-gray-500 mt-2 text-sm tracking-widest">会社概要</p>
                    <div className="mt-4 text-xs text-gray-400 font-sans tracking-wide">
                        <Link href="/" className="hover:text-gray-600 transition-colors">HOME</Link>
                        <span className="mx-2">/</span>
                        <span>Company</span>
                    </div>
                </div>

                {/* Main Visual */}
                <div className="w-full h-[300px] md:h-[400px] relative mb-16 bg-gray-100 overflow-hidden">
                    {/* Placeholder for the cityscape image */}
                    {/* In a real scenario, we would use the actual image asset. */}
                    <Image
                        src="/images/company_header.jpg"
                        alt="Company Hero"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Company Info Table */}
                <div className="max-w-4xl mx-auto mb-20">
                    <dl className="border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">所在地</dt>
                            <dd className="text-sm leading-7">
                                〒060-0051 札幌市中央区南1条東2-1<br />
                                ベンチャースクエア 202
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">TEL</dt>
                            <dd className="text-sm">011-522-5010</dd>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">FAX</dt>
                            <dd className="text-sm">011-522-5047</dd>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">設立</dt>
                            <dd className="text-sm">2010年11月1日</dd>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">資本金</dt>
                            <dd className="text-sm">10,000,000</dd>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">事業内容</dt>
                            <dd className="text-sm leading-7">
                                グラフィック企画・制作<br />
                                商品開発・パッケージデザイン<br />
                                WEB企画・制作
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-6 border-b border-gray-200">
                            <dt className="font-bold text-sm text-gray-600 mb-2 md:mb-0">関連会社</dt>
                            <dd className="text-sm leading-7">
                                株式会社アローズ<br />
                                〒060-0051 札幌市中央区南1条東2-1 ベンチャースクエア 202
                            </dd>
                        </div>
                    </dl>
                </div>

                {/* Google Map */}
                <div className="max-w-4xl mx-auto mb-20 w-full aspect-video md:aspect-[21/9] bg-gray-100 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.158782977533!2d141.3582!3d43.0618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2974d6c7018d%3A0x6a0a0f0f0f0f0f0f!2z44CSMDYwLTAwNTEg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65Y2X77yR5p2h5p2x77yS5LiB55uu77yRIOODmeODs-ODgeODo-ODvOOCueOCr-OCqOOCog!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="grayscale"
                    ></iframe>
                </div>
            </div>

            <Contact />
            <Footer />
        </div>
    );
}
