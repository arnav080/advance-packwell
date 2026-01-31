"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { LocationMap } from "./location-map";

export function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Cave-in effect: scale down slightly (or increase margins) as we scroll past
    // We want it to be full width initially, then "cave in" (shrink width) as it goes up.
    // Actually, usually "cave in" implies the bottom corners round/shrink.
    // Let's emulate the Supermemory effect where the card shrinks.

    // Progress 0: Entering viewport (bottom)
    // Progress 1: Leaving viewport (top)

    // We want the effect as it *leaves* the viewport to reveal the footer.
    // So trigger on the later part of the scroll.
    const scale = useTransform(scrollYProgress, [0.45, 1], [1, 0.85]);
    const borderRadius = useTransform(scrollYProgress, [0.45, 1], ["0px", "80px"]);

    return (
        <motion.div
            ref={containerRef}
            style={{ scale, borderRadius }}
            className="origin-bottom bg-background overflow-hidden"
        >
            <section id="contact" className="px-6 pb-24 pt-32 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column: Contact Info & Form Placeholder */}
                    <div className="flex flex-col justify-start">
                        <h2 className="font-helvetica text-4xl font-light leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
                            Get in <br />
                            <span className="text-secondary">touch.</span>
                        </h2>

                        <div className="mt-10 space-y-8">
                            <p className="text-lg text-zinc-400 max-w-md">
                                Have a project in mind or need a quote? We’d love to hear from you. Reach out to our team today.
                            </p>

                            <div className="bg-primary/60 backdrop-blur-xl rounded-[32px] p-8 space-y-7 border border-white/20 shadow-2xl">
                                <a
                                    href="mailto:info@advancepackwell.com"
                                    className="flex items-center gap-5 text-white group transition-all"
                                >
                                    <Mail className="size-6 text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                                    <span className="text-lg font-light tracking-tight leading-tight border-b border-transparent group-hover:border-white/30 truncate">
                                        info@advancepackwell.com
                                    </span>
                                </a>

                                <div className="flex items-center gap-5 text-white group transition-all">
                                    <Phone className="size-6 text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919915104301" className="text-lg font-light tracking-tight leading-tight border-b border-transparent hover:border-white/30 truncate">
                                            +91 99151 04301
                                        </a>
                                        <a href="tel:+919872624301" className="text-lg font-light tracking-tight leading-tight border-b border-transparent hover:border-white/30 truncate">
                                            +91 98726 24301
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Advance+Packwell+G.T.+Road+Village+Rajgarh+Doraha+Ludhiana+Punjab+141421"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-5 text-white group transition-all"
                                >
                                    <MapPin className="size-6 text-white stroke-[1.5] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-lg font-light tracking-tight leading-tight border-b border-transparent group-hover:border-white/30">
                                        Advance Packwell, G.T. Road Village Rajgarh, <br />
                                        Doraha, Ludhiana, Punjab 141421
                                    </span>
                                </a>
                            </div>

                            <div className="pt-4 flex flex-col items-center gap-4">
                                <a href="https://wa.me/919915104301" target="_blank" rel="noopener noreferrer">
                                    <Button className="h-12 px-8 text-base font-medium flex items-center gap-2 bg-primary/60 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-primary/80 transition-all">
                                        <MessageCircle className="size-5 fill-current" />
                                        Contact via whatsapp
                                    </Button>
                                </a>
                                <p className="text-sm text-zinc-500 font-light italic">
                                    ~ average response time 15mins
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Map */}
                    <div className="relative h-[400px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 lg:h-auto shadow-sm">
                        <LocationMap />
                    </div>
                </div>

                {/* Additional Content to Increase Height - FAQ Section */}
                <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-3 border-t border-white/10 pt-16">
                    <div>
                        <h3 className="font-helvetica text-2xl text-white">Frequently Asked Questions</h3>
                        <p className="mt-4 text-zinc-400">Common questions about our packaging services.</p>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-3">
                            <h4 className="text-lg font-medium text-white">What is your minimum order quantity?</h4>
                            <p className="text-zinc-400 leading-relaxed">We cater to both small businesses and large enterprises. For custom branding, our Box MOQ starts at 500 units, while standard bulk cartons have more flexible minimums. Contact us for a specific quote based on your needs.</p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-lg font-medium text-white">Do you offer sustainable packaging options?</h4>
                            <p className="text-zinc-400 leading-relaxed">Yes, sustainability is at our core. We offer 100% recyclable corrugated cardboard, soy-based inks for printing, and biodegradable filler options to help reduce environmental impact.</p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-lg font-medium text-white">What are your typical lead times?</h4>
                            <p className="text-zinc-400 leading-relaxed">Standard production lead times range from 7-14 business days after design approval. For rush orders or high-volume contracts, please discuss your timeline with our sales team.</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
