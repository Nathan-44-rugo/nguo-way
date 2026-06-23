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
  },
];

export default function ShopGrid({
  onSelectCreator,
  activeCreatorId,
}: ShopGridProps) {
  return (
    <section id="studios" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-nw-gold mb-4">
          Boutique Directory
        </p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] font-light text-nw-ink">
          CHECK IT OUT
        </h2>
        <div className="w-16 h-[1px] bg-nw-gold/40 mx-auto mt-6" />
        <p className="font-mono text-[10px] md:text-xs text-nw-charcoal/50 max-w-lg mx-auto mt-4 leading-relaxed">
          Virtual Fashion experience open to all — make &amp; find a style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-stretch">
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