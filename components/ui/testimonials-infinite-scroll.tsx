"use client";

import { useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import AutoScroll from "embla-carousel-auto-scroll";

export function TestimonialsInfiniteScroll() {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="py-20 px-6 md:px-20 lg:px-32 relative">
            <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    plugins={[
                        AutoScroll({
                            speed: 1, // Matches the case study speed
                            startDelay: 0,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                    }}
                >
                    <CarouselContent className="-ml-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <CarouselItem key={item} className="pl-8 md:basis-1/2 lg:basis-[28%]">
                                <TestimonialCard
                                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                                    name={`Client ${item}`}
                                    role={item === 1 ? "work work work work" : "CEO, Company"}
                                    imageSrc="/logo-ap.jpeg"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
