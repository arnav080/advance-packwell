import { cn } from "@/lib/utils";

interface FancyCardProps {
    title: string;
    subheading: string;
    imageSrc: string;
    className?: string;
}

export function FancyCard({
    title,
    subheading,
    imageSrc,
    className,
}: FancyCardProps) {
    return (
        <div
            style={{
                clipPath:
                    "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
            }}
            className={cn(
                "group relative flex h-full aspect-square w-full flex-col justify-between overflow-hidden rounded-none bg-[#2F6B4F]/20 p-8 backdrop-blur-md transition-all duration-300 hover:bg-[#2F6B4F]/30",
                className
            )}
        >
            <div className="relative z-10 flex flex-col gap-4">
                <h3 className="font-helvetica text-4xl font-light text-white md:text-5xl truncate">
                    {title}
                </h3>
                <p className="max-w-xs text-sm font-light leading-relaxed text-zinc-300 truncate">
                    {subheading}
                </p>
            </div>

            <div className="relative mt-8 flex flex-1 w-full items-end justify-center">
                <div className="relative h-64 w-full">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}
