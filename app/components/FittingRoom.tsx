/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';

type Garment = {
id: string;
name: string;
category: 'sweater' | 'tshirt' | 'trousers' | 'shoes' | 'accessories';
price: string;
colorCode: string;
};

// Catalogs updated to match boutique identities
const CREATOR_CATALOG: Record<string, Garment[]> = {
juana: [
{ id: 'knit', name: 'Forest Cable Knit Sweater', category: 'sweater', price: '$45.00', colorCode: '#3D5240' },
{ id: 'preppy', name: 'Preppy Oversized Vest', category: 'sweater', price: '$38.00', colorCode: '#965F26' },
{ id: 'white-skirt', name: 'Pleated White Skirt', category: 'trousers', price: '$32.00', colorCode: '#FCFCFC' },
{ id: 'fuzzy', name: 'Fur Winter Boots', category: 'shoes', price: '$48.00', colorCode: '#E1CFA6' },
{ id: 'beanie', name: 'Fisherman Beanie', category: 'accessories', price: '$12.00', colorCode: '#1C1A1B' },
],
dembe: [
{ id: 'duster', name: 'Dembe Duster Coat', category: 'sweater', price: '$85.00', colorCode: '#2D2D2D' },
{ id: 'flares', name: 'Culture Flare Trousers', category: 'trousers', price: '$55.00', colorCode: '#FAF9F6' },
{ id: 'loafers', name: 'Polished Black Loafers', category: 'shoes', price: '$60.00', colorCode: '#1C1A1B' },
{ id: 'glasses', name: 'Cyber Shield Glasses', category: 'accessories', price: '$15.00', colorCode: '#BCA374' },
],
sean: [
{ id: 'star', name: 'Vintage Graphic Tee', category: 'tshirt', price: '$20.00', colorCode: '#D5D6DA' },
{ id: 'camo', name: 'Camo Cargo Pants', category: 'trousers', price: '$55.00', colorCode: '#69666D' },
{ id: 'baggy', name: 'Washed Baggy Denim', category: 'trousers', price: '$65.00', colorCode: '#4A4E5A' },
{ id: 'sneaks', name: 'Blue Court Sneakers', category: 'shoes', price: '$52.00', colorCode: '#3A6073' },
]
};

interface FittingRoomProps {
activeCreatorId: string;
}

export default function FittingRoom({ activeCreatorId }: FittingRoomProps) {
const [catalog, setCatalog] = useState<Garment[]>(CREATOR_CATALOG[activeCreatorId]);
const [equipped, setEquipped] = useState<Record<string, Garment | null>>({});

useEffect(() => {
const newCatalog = CREATOR_CATALOG[activeCreatorId] || CREATOR_CATALOG.juana;
setCatalog(newCatalog);

setEquipped({
    sweater: newCatalog.find(i => i.category === 'sweater') || null,
    tshirt: newCatalog.find(i => i.category === 'tshirt') || null,
    trousers: newCatalog.find(i => i.category === 'trousers') || null,
    shoes: newCatalog.find(i => i.category === 'shoes') || null,
    accessories: newCatalog.find(i => i.category === 'accessories') || null,
});
}, [activeCreatorId]);

const toggleItem = (item: Garment) => {
setEquipped((prev) => ({
    ...prev,
    [item.category]: prev[item.category]?.id === item.id ? null : item,
}));
};

const calculateTotal = () => {
return Object.values(equipped)
    .filter((i): i is Garment => i !== null)
    .reduce((sum, i) => sum + parseFloat(i.price.replace('$', '')), 0)
    .toFixed(2);
};

return (
<section id="sandbox" className="bg-[#FAF9F6] py-16 md:py-24 border-t border-b border-neutral-100">
    <div className="max-w-6xl mx-auto px-6 md:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Avatar Viewport (Left) */}
        <div className="lg:col-span-6 bg-[#FCFCFC] border border-neutral-200/60 h-[480px] flex flex-col justify-between relative rounded-sm p-6 overflow-hidden shadow-sm">
        <div className="font-mono text-[8px] tracking-widest text-[#965F26] uppercase flex justify-between">
            <span>Viewport // Obsidian Render</span>
            <span className="text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> active
            </span>
        </div>
        
        <div className="w-full h-full max-w-[260px] mx-auto flex items-center justify-center relative">
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="obsidian-shine" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#4A4E54" />
                <stop offset="35%" stopColor="#1A1C1E" />
                <stop offset="100%" stopColor="#050505" />
                </radialGradient>
                <linearGradient id="gloss-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
            </defs>

            <circle cx="100" cy="100" r="82" fill="#FAF9F6" stroke="#eaeaea" strokeWidth="1" />
            
            {/* Glossy Obsidian structure */}
            <path d="M100 45 C112 45, 112 65, 100 65 C88 65, 88 45, 100 45 Z" fill="url(#obsidian-shine)" />
            <path d="M92 48 C95 44, 105 44, 108 48 C102 46, 98 46, 92 48 Z" fill="url(#gloss-highlight)" />
            
            <rect x="96" y="65" width="8" height="15" rx="3" fill="url(#obsidian-shine)" />
            <path d="M85 80 C85 75, 115 75, 115 80 L112 145 C112 150, 88 150, 88 145 Z" fill="url(#obsidian-shine)" />
            
            <path d="M85 80 C55 70, 50 82, 40 85 L38 90 C38 92, 50 86, 85 85 Z" fill="url(#obsidian-shine)" />
            <path d="M115 80 C145 70, 150 82, 160 85 L162 90 C162 92, 150 86, 115 85 Z" fill="url(#obsidian-shine)" />

            <rect x="88" y="145" width="10" height="42" rx="4" fill="url(#obsidian-shine)" />
            <rect x="102" y="145" width="10" height="42" rx="4" fill="url(#obsidian-shine)" />

            {/* Overlaid garments */}
            {equipped.trousers && (
                <g className="animate-fade-in">
                <path d="M85 138 C80 138, 120 138, 115 138 L113 182 H101 L100 150 L99 182 H87 Z" fill={equipped.trousers.colorCode} />
                </g>
            )}

            {equipped.tshirt && (
                <g className="animate-fade-in">
                <path d="M84 80 H116 L114 115 H86 Z" fill={equipped.tshirt.colorCode} />
                </g>
            )}

            {equipped.sweater && (
                <g className="animate-fade-in">
                <path d="M80 80 H120 L117 122 C115 125, 85 125, 83 122 Z" fill={equipped.sweater.colorCode} />
                <path d="M92 80 L100 90 L108 80 Z" fill="#E1CFA6" />
                </g>
            )}

            {equipped.shoes && (
                <g className="animate-fade-in">
                <rect x="84" y="178" width="13" height="8" rx="2" fill={equipped.shoes.colorCode} />
                <rect x="103" y="178" width="13" height="8" rx="2" fill={equipped.shoes.colorCode} />
                </g>
            )}

            {equipped.accessories && equipped.accessories.id === 'beanie' && (
                <g className="animate-fade-in">
                <path d="M89 48 C90 35, 110 35, 111 48 Z" fill="#1C1A1B" />
                <rect x="88" y="46" width="24" height="4" rx="1" fill="#69666D" />
                </g>
            )}

            {equipped.accessories && equipped.accessories.id === 'glasses' && (
                <g className="animate-fade-in">
                <rect x="90" y="52" width="20" height="3" fill="#BCA374" />
                </g>
            )}
            </svg>
        </div>

        <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-neutral-400">
            <span>DESIGNER ATELIER</span>
            <span>VER: 1.0</span>
        </div>
        </div>

        {/* Active Catalog Configuration (Right) */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[420px]">
        <div>
            <div className="border-b border-neutral-200 pb-4 mb-6">
            <span className="font-mono text-[9px] tracking-widest text-[#965F26] uppercase">Active Atelier Catalog</span>
            <h3 className="font-serif text-2xl tracking-tight text-neutral-900 mt-1 uppercase">
                {activeCreatorId}&apos;s Designs
            </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-1">
            {catalog.map((item) => {
                const isActive = equipped[item.category]?.id === item.id;
                return (
                <button
                    key={item.id}
                    onClick={() => toggleItem(item)}
                    className={`flex flex-col p-4 border rounded-sm text-left transition-all duration-200 ${
                    isActive 
                        ? 'border-[#965F26] bg-[#FAF9F6]' 
                        : 'border-neutral-200 bg-white hover:border-[#BCA374]'
                    }`}
                >
                    <div className="flex justify-between w-full items-start">
                    <span className="font-mono text-[8px] tracking-wider uppercase text-neutral-400">
                        {item.category}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full border border-neutral-200" style={{ backgroundColor: item.colorCode }} />
                    </div>
                    <h4 className="font-serif text-sm tracking-wide text-neutral-900 mt-3 leading-tight">{item.name}</h4>
                    <span className="font-mono text-[10px] text-neutral-500 block mt-1">{item.price}</span>
                </button>
                );
            })}
            </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-6">
            <div className="flex justify-between items-center mb-5">
            <span className="font-serif text-sm text-neutral-500">Virtual Cart Value:</span>
            <span className="font-mono text-base font-semibold text-neutral-900">${calculateTotal()}</span>
            </div>
            <button className="w-full py-3.5 bg-neutral-950 hover:bg-[#BCA374] text-white font-mono text-[10px] tracking-widest uppercase transition-colors rounded-sm">
            Acquire Selected Garments
            </button>
        </div>
        </div>

    </div>
    </div>
</section>
);
}