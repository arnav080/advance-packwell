"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GlobalNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navItems = [
        { name: "Home", link: "/#home" },
        { name: "About", link: "/#about" },
        { name: "Products", link: "/#products" },
        { name: "Gallery", link: "/#gallery" },
        { name: "Contact", link: "/#contact" },
    ];

    const pathname = usePathname();

    React.useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const handleScroll = () => {
            const sections = ["home", "about", "products", "gallery", "contact"];
            let currentSection = "/#home";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        currentSection = `/#${section}`;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <Navbar className="fixed top-2">
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} activeSection={activeSection} />
                <div className="flex items-center">
                    <Button className="!cursor-pointer" style={{ cursor: "pointer" }} onClick={() => console.log("Contact Clicked")}>
                        Contact us
                    </Button>
                </div>
            </NavBody>

            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>
                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    <div className="flex flex-col gap-4 w-full">
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className={cn(
                                    "text-lg font-medium transition-colors",
                                    (activeSection === item.link || pathname === item.link)
                                        ? "!text-[#2F6B4F] border-b-2 border-[#2F6B4F]"
                                        : "!text-white"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex flex-col mt-4 gap-2 w-full">
                            <Button variant="outline" className="w-full justify-center !cursor-pointer" style={{ cursor: "pointer" }} onClick={() => console.log("Contact Clicked")}>
                                Contact us
                            </Button>
                        </div>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
