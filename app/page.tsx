import { Button } from "@/components/ui/button";
import { HeroButton } from "@/components/ui/hero-button";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { FancyCard } from "@/components/ui/fancy-card";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      {/* Hero Section with Rounded Bottom Transition */}
      <section id="home" className="relative h-[99vh] w-full overflow-hidden rounded-b-[48px] bg-primary">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background-main.avif')",
          }}
        >
          <div className="absolute inset-0 bg-background/50" />
        </div>

        {/* Bottom Left Content */}
        <div className="absolute bottom-16 left-6 z-10 flex max-w-4xl flex-col items-start gap-6 md:bottom-24 md:left-20">
          <h1 className="text-4xl font-light leading-tight text-white md:text-7xl lg:text-8xl font-helvetica tracking-tight">
            Reliable Packaging <br />
            for <span className="underline decoration-[#2F6B4F] decoration-[6px] underline-offset-[12px]">Global Brands.</span>
          </h1>
          <HeroButton />
        </div>
      </section>

      {/* Demo Text Section below Hero */}
      {/* Stats and Info Section */}
      <section id="about" className="px-6 py-24 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-helvetica text-4xl font-light leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
              Packaging for<br />
              brands that <br />
              <span className="text-zinc-600">ship at scale.</span>
            </h2>
            <div className="mt-10 max-w-lg space-y-6">
              <p className="text-lg leading-relaxed text-zinc-400">
                Advance Packwell is a leading cardboard box manufacturer delivering high-strength, sustainable, and precision-engineered packaging solutions for businesses across industries. With over two decades of manufacturing excellence, we specialize in corrugated boxes, custom packaging, bulk cartons, and export-grade shipping containers designed to protect what matters most.
              </p>
              <p className="text-lg leading-relaxed text-zinc-400">
                We partner with brands that value quality, speed, and long-term supply consistency. Whether you need high-volume production runs or tailored packaging designs, Advance Packwell provides end-to-end cardboard manufacturing solutions backed by modern machinery, skilled craftsmanship, and strict quality control.
              </p>
            </div>
          </div>

          {/* Right Column: Staggered Metrics */}
          <div className="flex flex-col justify-center gap-16 pt-10 lg:pt-0">
            {/* Metric 1 */}
            <div className="border-l border-zinc-800 pl-8">
              <span className="block font-helvetica text-6xl font-light text-secondary md:text-7xl">20+</span>
              <span className="mt-2 block text-sm text-zinc-500">years of experience</span>
            </div>

            {/* Metric 2 - Indented */}
            <div className="ml-0 border-l border-zinc-800 pl-8 md:ml-24 lg:ml-32">
              <span className="block font-helvetica text-6xl font-light text-secondary md:text-7xl">10L+</span>
              <span className="mt-2 block text-sm text-zinc-500">boxes manufactured </span>
            </div>

            {/* Metric 3 */}
            <div className="border-l border-zinc-800 pl-8">
              <span className="block font-helvetica text-6xl font-light text-secondary md:text-7xl">50+</span>
              <span className="mt-2 block text-sm text-zinc-500">industry awards<br />for excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Cases Section */}
      <Case />

      {/* Featured Products / Fancy Cards Section */}
      <section id="products" className="px-6 py-32 md:px-20 lg:px-32">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-helvetica text-4xl font-light leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
            Built for every <br />
            <span className="text-zinc-600">industry scale.</span>
          </h2>
          <p className="max-w-sm text-lg text-zinc-400">
            From single units to million-box production runs, our infrastructure adapts to your needs.
            From single units to million-box production runs, our infrastructure adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FancyCard
            title="Corrugated Boxes"
            subheading="Durable, high-strength corrugated boxes designed for secure shipping and storage. Customizable sizes to fit your needs."
            imageSrc="/cooperation/contract.png"
          />
          <FancyCard
            title="Custom Packaging"
            subheading="Tailored packaging solutions that reflect your brand identity. Precision-engineered for product protection and display."
            imageSrc="/cooperation/odm.png"
          />
          <FancyCard
            title="Bulk Cartons"
            subheading="Cost-effective bulk carton solutions for high-volume logistics. Optimized for stacking strength and transport efficiency."
            imageSrc="/cooperation/oem.png"
          />
        </div>

        {/* Contact CTA below cards */}
        <div className="mt-12 flex items-center justify-center gap-4 text-zinc-400">
          <div className="flex size-8 items-center justify-center border border-white">
            <ArrowUpRight className="size-5 text-white" />
          </div>
          <p className="text-xl font-light">
            Need packaging?{" "}
            <a
              href="#contact"
              className="text-white underline decoration-[#2F6B4F] decoration-2 underline-offset-8 transition-colors hover:text-secondary"
            >
              Contact us
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
