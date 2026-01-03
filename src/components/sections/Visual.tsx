import Image from "next/image";

export default function Visual() {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <Image
                src="/images/visual_city.jpg"
                alt="Cityscape Visual"
                fill
                className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        </section>
    );
}
