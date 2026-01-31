import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
    return (
        <div className="relative w-full overflow-hidden bg-transparent">
            <div className="flex w-full flex-col justify-between px-6 py-24 md:px-20 lg:px-32">

                {/* Brand Display Text */}
                <div className="mb-24 w-full flex justify-center">
                    <h1 className="whitespace-nowrap font-helvetica text-[9.2vw] font-bold leading-none tracking-tighter text-white/90 uppercase scale-y-[1.4] origin-bottom">
                        Advance Packwell
                    </h1>
                </div>

                {/* Main Footer Content */}
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

                    {/* Brand and Catchphrase */}
                    <div className="flex flex-col gap-8 max-w-md">
                        <h2 className="font-helvetica text-4xl font-light leading-tight text-zinc-500 md:text-5xl">
                            Ready to <br />
                            <span className="text-white">upgrade your packaging</span>?
                        </h2>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-wrap gap-12 md:gap-24">
                        <div className="flex flex-col gap-6">
                            <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Company</span>
                            <Link href="/about" className="text-zinc-300 hover:text-white transition-colors">About Us</Link>
                            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">Contact</Link>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Products</span>
                            <Link href="/products" className="text-zinc-300 hover:text-white transition-colors">Corrugated Boxes</Link>
                            <Link href="/custom" className="text-zinc-300 hover:text-white transition-colors">Custom Packaging</Link>
                            <Link href="/bulk" className="text-zinc-300 hover:text-white transition-colors">Bulk Orders</Link>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Legal</span>
                            <Link href="/privacy" className="text-zinc-300 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-zinc-300 hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/returns" className="text-zinc-300 hover:text-white transition-colors">Return Policy</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="mt-24 flex flex-col-reverse items-start justify-between gap-8 pt-12 border-t border-white/10 md:flex-row md:items-center">
                    <span className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Advance Packwell. All rights reserved.
                    </span>

                    <div className="flex gap-6">
                        <Link href="https://twitter.com" className="text-zinc-400 hover:text-white transition-colors">
                            <Twitter className="size-5" />
                        </Link>
                        <Link href="https://linkedin.com" className="text-zinc-400 hover:text-white transition-colors">
                            <Linkedin className="size-5" />
                        </Link>
                        <Link href="https://instagram.com" className="text-zinc-400 hover:text-white transition-colors">
                            <Instagram className="size-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
