import ShopCard from "./ShopCard";

interface ShopGridProps {
onSelectCreator: (creatorId: string) => void;
activeCreatorId: string;
}

const CREATORS = [
{
id: "juana",
name: "Vick's",
tagline: "CORNER",
style: "Edgy Shirt wear",
badge: "Uni-sex",
cardType: "vicks" as const,
},
{
id: "dembe",
name: "Boutique",
tagline: "EGO's",
style: "For Fashionista",
badge: "to silence rooms",
cardType: "egos" as const,
},
{
id: "sean",
name: "Jan's",
tagline: "SHOP",
style: "Family wear",
badge: "",
cardType: "jans" as const,
}
];

export default function ShopGrid({ onSelectCreator, activeCreatorId }: ShopGridProps) {
return (
<section id="studios" className="py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
    
    {/* Title block matching your mockup design */}
    <div className="text-center mb-16">
    <h2 className="font-serif text-3xl md:text-5xl tracking-[0.25em] font-light text-[#BCA374] uppercase">
        CHECK IT OUT
    </h2>
    <p className="font-mono text-xs md:text-sm text-neutral-500 max-w-2xl mx-auto mt-3 font-light leading-relaxed">
        Virtual Fashion experience open to all make & find a style
    </p>
    </div>

    {/* Brand Logotype Directories */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-stretch">
    {CREATORS.map((creator) => (
        <ShopCard
        key={creator.id}
        name={creator.name}
        tagline={creator.tagline}
        style={creator.style}
        badge={creator.badge}
        cardType={creator.cardType}
        isActive={activeCreatorId === creator.id}
        onSelect={() => onSelectCreator(creator.id)}
        />
    ))}
    </div>
</section>
);
}