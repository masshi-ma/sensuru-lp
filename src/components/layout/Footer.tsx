import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#2d2d2d] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start">

                {/* Top Area: Logo & Nav */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
                    {/* Logo */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">Sensuru</h2>
                        <p className="text-[10px] text-gray-400 mt-2 tracking-widest">Select your best life.</p>
                    </div>

                    {/* Nav */}
                    <nav className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm tracking-widest text-center md:text-left text-gray-300">
                        <Link href="#" className="hover:text-white transition-colors">Works</Link>
                        <Link href="#" className="hover:text-white transition-colors">About</Link>
                        <Link href="#" className="hover:text-white transition-colors">News</Link>
                        <Link href="#" className="hover:text-white transition-colors">Company</Link>
                        <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                    </nav>
                </div>

                {/* Bottom Area: Copyright */}
                <div className="w-full text-center md:text-left border-t border-gray-700 pt-8" >
                    <p className="text-[10px] text-gray-500 tracking-widest">
                        &copy; 2024 SENSURU Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
