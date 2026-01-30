"use client";

import React, { useState } from "react";
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

export function GlobalNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Products", link: "#products" },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <Navbar className="fixed top-2">
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
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
                                className="text-lg font-medium text-black dark:text-white"
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
