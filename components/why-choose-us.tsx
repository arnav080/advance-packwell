import { ShieldCheck, Clock, Layers, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
    const features = [
        {
            icon: Layers,
            title: "High-Strength Corrugated Material",
            description: "Exceptional durability with 3, 5, and 7-ply options for maximum protection.",
        },
        {
            icon: ShieldCheck,
            title: "Consistent Quality Control",
            description: "Rigorously tested to ensure every box meets industry standards.",
        },
        {
            icon: Clock,
            title: "Fast Turnaround Time",
            description: "Efficient production cycles to keep your supply chain moving without delays.",
        },
        {
            icon: Truck,
            title: "Reliable Bulk Supply",
            description: "Capable of handling high-volume orders with consistent delivery schedules.",
        },
    ];

    return (
        <section className="relative z-10 px-6 py-16 md:px-20 lg:px-32 bg-background">
            <div className="mb-12 flex flex-col items-center text-center">
                <h2 className="font-helvetica text-3xl font-light tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl">
                    Why Businesses Choose <span className="text-zinc-600 whitespace-nowrap">Advance Packwell</span>
                </h2>
                <p className="mt-6 text-zinc-400 max-w-xl text-base font-light">
                    Delivering high-strength durability, manufacturing precision, and consistent supply for global brands.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-8">
                {/* Left Column: Feature Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-start gap-4 rounded-[24px] bg-white/[0.03] border border-white/10 p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-[#2F6B4F]/30"
                        >
                            <div className="w-full flex justify-between items-start">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#2F6B4F]/10 text-[#2F6B4F] group-hover:bg-[#2F6B4F] group-hover:text-white transition-all duration-500">
                                    <feature.icon className="size-5" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-light text-white leading-snug group-hover:text-[#2F6B4F] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Large Image Container */}
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-[32px] border border-white/10 group">
                    <img
                        src="/generated/factory-placeholder.png"
                        alt="Advanced Manufacturing Facility"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
            </div>
        </section>
    );
}
