import Link from 'next/link';

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
  const shopRoutes: Record<string, string> = {
    vicks: '/vicks-corner',
    egos: '/egos-boutique',
    jans: '/jans-shop',
  };

  return (
    <div
      className={`group relative flex flex-col justify-between items-center py-10 sm:py-14 px-5 sm:px-8 border cursor-pointer ${
        isActive
          ? 'border-nw-gold/40 bg-nw-offwhite shadow-[0_8px_40px_rgba(163,131,86,0.08)]'
          : 'border-nw-charcoal/10 hover:border-nw-gold/25 bg-transparent'
      }`}
      style={{ transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)' }}
      onClick={onSelect}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-nw-gold"
        style={{
          transition: 'width 800ms cubic-bezier(0.16, 1, 0.3, 1)',
          width: isActive ? '60%' : '0%',
        }}
      />

      <div className="w-full flex flex-col items-center justify-center h-24 sm:h-32 mb-6 sm:mb-10 select-none">
        {cardType === 'vicks' && (
          <div className="text-center flex flex-col items-center">
            <span className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#1E3B27] font-light leading-none">
              Vick&apos;s
            </span>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] text-[#1E3B27] leading-none mt-2 sm:mt-3">
              CORNER
            </span>
          </div>
        )}

        {cardType === 'egos' && (
          <div className="text-center flex flex-col items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-nw-gold mb-3 leading-none">
              EGO&apos;s
            </span>
            <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-nw-ink font-light leading-none">
              Boutique
            </span>
          </div>
        )}

        {cardType === 'jans' && (
          <div className="text-center flex flex-col items-center">
            <span className="font-serif italic text-3xl text-nw-ink leading-none">
              Jan&apos;s
            </span>
            <span
              className="text-4xl sm:text-5xl md:text-6xl text-nw-ink uppercase leading-none mt-1 select-none"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
              }}
            >
              SHOP
            </span>
          </div>
        )}
      </div>

      <div className="text-center flex flex-col items-center gap-2">
        <p className="font-mono text-[10px] tracking-[0.2em] text-nw-charcoal/60 uppercase">
          {style}
        </p>
        {badge && (
          <p className="font-mono text-[9px] tracking-[0.15em] text-nw-gold/70 uppercase">
            {badge}
          </p>
        )}
      </div>

      <Link 
        href={shopRoutes[cardType] || '#'}
        className="mt-8 font-mono text-[9px] tracking-[0.3em] uppercase text-nw-charcoal/40 group-hover:text-nw-gold border-b border-transparent group-hover:border-nw-gold/30 pb-0.5"
        style={{ transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        Visit Shop →
      </Link>
    </div>
  );
}