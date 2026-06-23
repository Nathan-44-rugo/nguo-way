interface ShopCardProps {
name: string;
tagline: string;
style: string;
badge: string;
cardType: 'vicks' | 'egos' | 'jans';
isActive: boolean;
onSelect: () => void;
}

export default function ShopCard({
name,
tagline,
style,
badge,
cardType,
isActive,
onSelect,
}: ShopCardProps) {
return (
<div 
    onClick={onSelect}
    className={`group flex flex-col justify-between items-center py-12 px-6 border cursor-pointer transition-all duration-300 rounded-[2px] ${
    isActive 
        ? 'border-[#C9AA4B]/30 bg-neutral-50/50 shadow-[0_4px_24px_rgba(188,163,116,0.05)]' 
        : 'border-transparent hover:border-[#BCA374]/20'
    }`}
>
    {/* Dynamic Render block matching the unique logo of each boutique */}
    <div className="w-full flex flex-col items-center justify-center h-28 mb-10 select-none">
    
    {/* 1. Vick's Corner Logo */}
    {cardType === 'vicks' && (
        <div className="text-center flex flex-col items-center">
        {/* Elegant deep green cursive script */}
        <span className="font-serif italic text-5xl text-[#1E3B27] font-light leading-none pr-3">
            Vick&apos;s
        </span>
        {/* Wide caps serif */}
        <span className="font-serif text-3xl font-extrabold tracking-[0.22em] text-[#1E3B27] leading-none mt-2">
            CORNER
        </span>
        </div>
    )}

    {/* 2. EGO's Boutique Logo */}
    {cardType === 'egos' && (
        <div className="text-center flex flex-col items-center">
        {/* Vibrant green modern sans tag */}
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#22C55E] mb-2 leading-none">
            EGO&apos;s
        </span>
        {/* Delicate high-contrast cursive script */}
        <span className="font-serif italic text-4xl text-neutral-900 font-light pr-2">
            Boutique
        </span>
        </div>
    )}

    {/* 3. Jan's Shop Logo */}
    {cardType === 'jans' && (
        <div className="text-center flex flex-col items-center">
        {/* Casual brush style script */}
        <span className="font-serif italic text-3xl text-neutral-900 leading-none pl-1">
            Jan&apos;s
        </span>
        {/* Bold black brushed paint stroke look */}
        <span className="font-sans font-black text-5xl text-neutral-900 uppercase tracking-tight leading-none mt-1">
            SHOP
        </span>
        </div>
    )}

    </div>

    {/* Monospace Subtitles Centered underneath */}
    <div className="text-center flex flex-col items-center gap-1">
    <p className="font-mono text-[10px] tracking-wider text-neutral-400 font-light uppercase">
        {style}
    </p>
    {badge && (
        <p className="font-mono text-[10px] tracking-wider text-neutral-400 font-light uppercase">
        {badge}
        </p>
    )}
    </div>

</div>
);
}