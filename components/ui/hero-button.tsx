import React from "react";
import { ArrowUpRight } from "lucide-react";

interface HeroButtonProps {
    label?: string;
    onClick?: () => void;
    className?: string;
}

export function HeroButton({ label = "Get a quote", onClick, className }: HeroButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-0 group cursor-pointer border-none p-0 outline-none bg-transparent active:scale-95 transition-transform ${className}`}
        >
            <span className="rounded-full bg-[#2F6B4F]/70 px-8 py-4 text-xl text-white group-hover:bg-[#2F6B4F]/50 transition-all duration-300 h-16 flex items-center z-10 backdrop-blur-sm">
                {label}
            </span>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2F6B4F]/70 text-white group-hover:bg-[#2F6B4F]/50 transition-all duration-300 -ml-2 backdrop-blur-sm">
                <ArrowUpRight className="h-8 w-8 stroke-[2px]" />
            </span>
        </button>
    );
}
