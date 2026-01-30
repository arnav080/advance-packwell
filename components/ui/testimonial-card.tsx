import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    imageSrc: string;
    className?: string;
}

export function TestimonialCard({
    quote,
    name,
    role,
    imageSrc,
    className,
}: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "flex w-full flex-col justify-between rounded-[32px] bg-[#525252] px-8 py-5 text-white shadow-xl",
                className
            )}
        >
            <div className="flex flex-col gap-4">
                <Quote className="size-8 rotate-180 border-none fill-secondary text-secondary" style={{ transform: "scaleX(-1)" }} />
                <p className="text-center text-sm leading-snug font-medium">
                    {quote}
                </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
                <img
                    src={imageSrc}
                    alt={name}
                    className="size-10 rounded-full object-cover border-2 border-white/10"
                />
                <div className="flex flex-col text-left">
                    <span className="text-base font-bold leading-tight">{name}</span>
                    <span className="text-xs text-zinc-300 opacity-80">{role}</span>
                </div>
            </div>
        </div>
    );
}
