"use client";

import React, { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";

const MAP_CENTER: [number, number] = [30.8140288, 76.0064289];
const ADDRESS = "Advance Packwell, G.T. Road Village Rajgarh, Doraha, Ludhiana, Punjab 141421";

export function LocationMap() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMarkerClick = () => {
        const encodedAddress = encodeURIComponent(ADDRESS);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
    };

    if (!mounted) {
        return <div className="h-full w-full bg-zinc-900/50 animate-pulse rounded-[32px]" />;
    }

    return (
        <div className="h-full w-full transition-all cursor-pointer">
            <Map
                defaultCenter={MAP_CENTER}
                defaultZoom={15}
                metaWheelZoom={true}
            >
                <Marker
                    width={50}
                    anchor={MAP_CENTER}
                    color="#56af32"
                    onClick={handleMarkerClick}
                />
            </Map>

            {/* Overlay to ensure clicks on the map also trigger redirect if desired, 
          but usually we want users to be able to pan. 
          Let's just make the pin very clear. */}
            <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-4 py-2 backdrop-blur-md border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-secondary font-medium">Click pin to open in Google Maps</p>
            </div>
        </div>
    );
}
