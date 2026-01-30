"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";

function Case() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="w-full py-10 lg:py-20 px-6 md:px-20 lg:px-32">
      <div className="">
        <div className="flex flex-col gap-10">
          <h2 className="font-helvetica text-4xl font-light leading-none tracking-tight text-white md:text-6xl lg:text-7xl text-center lg:text-left lg:max-w-3xl">
            Trusted by hundreds of <br className="hidden lg:block" /> businesses worldwide
          </h2>
          <Carousel
            setApi={setApi}
            className="w-full"
            plugins={[
              AutoScroll({
                speed: 1,
                startDelay: 0,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    <span className="text-sm">Logo {index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export { Case };
