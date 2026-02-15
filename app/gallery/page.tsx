"use client";

import { motion } from "framer-motion";
import { GlobalNavbar } from "@/components/global-navbar";
import { FooterSection } from "@/components/footer-section";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
    const images = [
        { src: "/bg-img-two.jpeg", className: "md:col-span-2 md:row-span-2" },
        { src: "/generated/ply-boards.png", className: "col-span-1" },
        { src: "/cooperation/contract.png", className: "col-span-1" },
        { src: "/cooperation/private-label.png", className: "md:col-span-1 md:row-span-2" },
        { src: "/cooperation/odm.png", className: "col-span-1" },
        { src: "/cooperation/oem.png", className: "col-span-1" },
        { src: "/generated/trays_placeholder.png", className: "md:col-span-2" },
        { src: "/generated/hsc_placeholder.png", className: "col-span-1" },
        { src: "/generated/partitions_placeholder.png", className: "col-span-1" },
        // Repeating images for more density
        { src: "/bg-img-two.jpeg", className: "col-span-1" },
        { src: "/generated/ply-boards.png", className: "md:col-span-1 md:row-span-2" },
        { src: "/cooperation/contract.png", className: "col-span-1" },
        { src: "/cooperation/private-label.png", className: "md:col-span-2" },
        { src: "/cooperation/odm.png", className: "col-span-1" },
        { src: "/cooperation/oem.png", className: "col-span-1" },
        { src: "/generated/trays_placeholder.png", className: "col-span-1" },
        { src: "/generated/hsc_placeholder.png", className: "md:col-span-1 md:row-span-2" },
        { src: "/generated/partitions_placeholder.png", className: "col-span-1" },
    ];

    return (
        <main className="relative min-h-screen w-full bg-background text-white">
            <GlobalNavbar />

            <div className="relative z-20 bg-background pb-16">
                {/* Header */}
                <header className="px-6 pt-24 pb-12 md:px-20 lg:px-48">
                    <div className="flex flex-col gap-3 relative">

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-helvetica text-3xl font-light tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                                Visual <span className="text-[#2F6B4F]">Excellence</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-lg text-base font-light text-zinc-500 leading-relaxed"
                        >
                            A showcase of precision engineering and high-scale manufacturing
                            that powers global supply chains.
                        </motion.p>
                    </div>
                </header>

                {/* Gallery Grid */}
                <section className="px-6 md:px-20 lg:px-48">
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-flow-row-dense lg:gap-4">
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.04 }}
                                className={cn(
                                    "group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-[#2F6B4F]/30",
                                    // Adjusting spans for a 4-column grid
                                    img.className.includes("md:col-span-2") ? "md:col-span-2 md:row-span-2" : "col-span-1"
                                )}
                            >
                                <div className="aspect-square h-full w-full">
                                    <img
                                        src={img.src}
                                        alt={`Gallery image ${idx + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                                    />
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-4">
                                    <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0 text-left">
                                        <p className="text-[10px] font-medium text-white/50 uppercase tracking-widest">Advance</p>
                                        <p className="text-sm font-light text-white">Packaging Detail</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer Section */}
            <div className="relative z-10 overflow-hidden bg-black border-t border-white/5">
                {/* Fallback CSS Gradient + Image Layer */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2F6B4F]/20 via-[#0a0a0a] to-[#0a0a0a] scale-110" />

                    <img
                        src="/gradient.png"
                        alt="Gradient Background"
                        className="w-full h-full object-cover opacity-60 scale-110"
                    />
                </div>

                <div className="relative z-20">
                    <FooterSection />
                </div>
            </div>
        </main>
    );
}
