import { Plus } from "lucide-react";

export default function Contact() {
    return (
        <section className="w-full py-20 bg-[var(--accent)] text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-4">
                        Contact
                    </h2>
                    <p className="text-sm md:text-base opacity-90 tracking-widest mb-6">
                        お問い合わせ
                    </p>
                    <p className="text-sm opacity-80 leading-relaxed md:w-2/3">
                        ご制作・ご依頼に関するご相談など、<br className="md:hidden" />お気軽にお問い合わせください。<br />
                        確認後、担当者よりご連絡させていただきます。
                    </p>
                </div>

                <a href="#contact" className="group relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-[var(--accent)] transition-all duration-300">
                    <Plus size={32} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span className="sr-only">Contact form</span>
                </a>

            </div>
        </section>
    );
}
