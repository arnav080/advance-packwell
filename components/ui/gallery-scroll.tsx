"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
];

export function GalleryScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const objectPosition = useTransform(scrollYProgress, [0, 1], ["100% 50%", "0% 50%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-[100dvh] flex-col items-center justify-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-4 md:gap-8 p-4"
                >
                    {images.map((src, i) => (
                        <Link href="/gallery" key={i} className="shrink-0">
                            <motion.img
                                src={src}
                                alt={`Gallery Image ${i + 1}`}
                                draggable="false"
                                style={{
                                    objectPosition,
                                }}
                                className="h-[55vh] w-[80vw] md:h-[56vmin] md:w-[40vmin] rounded-xl bg-neutral-800 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            />
                        </Link>
                    ))}
                </motion.div>

                {/* Gallery CTA - Fixed in the center bottom of the sticky view */}
                <div className="absolute bottom-12 flex items-center justify-center gap-4 text-zinc-400">
                    <div className="flex size-8 items-center justify-center border border-white">
                        <ArrowUpRight className="size-5 text-white" />
                    </div>
                    <p className="text-xl font-light">
                        See more in our{" "}
                        <Link
                            href="/gallery"
                            className="text-white underline decoration-[#2F6B4F] decoration-2 underline-offset-8 transition-colors hover:text-secondary"
                        >
                            Gallery
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
