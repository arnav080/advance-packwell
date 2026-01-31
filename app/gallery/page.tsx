import { GlobalNavbar } from "@/components/global-navbar";
import { GalleryScroll } from "@/components/ui/gallery-scroll";

export default function GalleryPage() {
    return (
        <main className="relative min-h-screen w-full bg-background text-white">
            <GlobalNavbar />

            <div className="flex h-screen items-center justify-center">
                <h1 className="font-helvetica text-6xl font-light">
                    Our <span className="text-[#2F6B4F]">Gallery</span>
                </h1>
            </div>

            <GalleryScroll />

            <section className="flex h-screen items-center justify-center bg-zinc-900">
                <p className="max-w-md text-center text-xl text-zinc-400">
                    More content continues here after the gallery scroll effect finishes.
                </p>
            </section>
        </main>
    );
}
