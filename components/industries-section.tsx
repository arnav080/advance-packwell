"use client";

import { ShoppingBasket, ShoppingCart, Car, Shirt, Cpu, Bike, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
    const industries = [
        {
            name: "FMCG",
            icon: ShoppingBasket,
            description: "Fast-moving consumer goods packaging designed for retail readiness."
        },
        {
            name: "E-commerce",
            icon: ShoppingCart,
            description: "Secure, shipping-grade corrugated boxes for global logistics."
        },
        {
            name: "Automotive",
            icon: Car,
            description: "Heavy-duty solutions for industrial and mechanical part transport."
        },
        {
            name: "Textiles",
            icon: Shirt,
            description: "Bulk cartons tailored for garment preservation and large-scale transit."
        },
        {
            name: "Electronics",
            icon: Cpu,
            description: "Precision-engineered protection for sensitive high-tech hardware."
        },
        {
            name: "Bicycle Industry",
            icon: Bike,
            description: "Specialized large-format packaging for complete bicycle shipments."
        },
    ];

    const [activeHover, setActiveHover] = useState<number | null>(null);

    return (
        <section className="relative z-10 px-6 py-16 md:px-20 lg:px-32 bg-background">
            <div className="mb-12 flex flex-col items-center text-center">
                <h2 className="font-helvetica text-3xl font-light tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl">
                    Why Businesses Choose <span className="text-zinc-600 whitespace-nowrap">Advance Packwell</span>
                </h2>
            </div>

            <div className="flex flex-col border-t border-white/10">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveHover(index)}
                        onMouseLeave={() => setActiveHover(null)}
                        className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/10 transition-all duration-500 hover:px-4 cursor-default"
                    >
                        {/* Background Reveal on Hover */}
                        <div className="absolute inset-0 bg-[#2F6B4F]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex items-center gap-6 md:gap-8 w-full md:w-auto">
                            <span className="font-helvetica text-xs text-zinc-500 tracking-widest transition-colors duration-500 group-hover:text-[#2F6B4F]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-helvetica text-2xl md:text-3xl lg:text-4xl font-light text-white transition-all duration-500 group-hover:translate-x-2">
                                {industry.name}
                            </h3>
                        </div>

                        <div className="relative z-10 mt-2 md:mt-0 flex items-center md:items-end gap-6 overflow-hidden transition-all duration-500">
                            <p className={cn(
                                "max-w-xs text-xs text-zinc-400 leading-relaxed transition-all duration-500 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0",
                                // On mobile always show, on tablet+ show on hover
                                "opacity-100 translate-y-0"
                            )}>
                                {industry.description}
                            </p>
                            <div className="hidden md:flex size-12 items-center justify-center rounded-full border border-white/10 text-white group-hover:bg-[#2F6B4F] group-hover:border-[#2F6B4F] transition-all duration-500 shadow-xl">
                                <industry.icon className="size-5 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>

                        {/* Animated Bottom Line */}
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#2F6B4F] transition-all duration-700 group-hover:w-full" />
                    </div>
                ))}
            </div>
        </section>
    );
}
