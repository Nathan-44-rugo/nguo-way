import Link from 'next/link';

type ShopItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
};

interface ShopPageProps {
  brandName: string;
  brandTagline: string;
  brandStyle: 'vicks' | 'egos' | 'jans';
  items: ShopItem[];
}

export default function ShopPage({ brandName, brandTagline, brandStyle, items }: ShopPageProps) {
  return (
    <div className="min-h-screen bg-nw-offwhite text-nw-ink font-serif">
      {/* Navigation bar — taller tap targets on mobile, transparent/glassmorphic */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nw-offwhite/90 backdrop-blur-md border-b border-nw-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-3.5 sm:py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nw-charcoal/60 hover:text-nw-gold flex items-center gap-1.5 sm:gap-2 py-1.5"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            ← Back
          </Link>
          <Link href="/" className="font-serif font-bold text-nw-ink tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm">
            NGUOWAY
          </Link>
          <div className="w-12 sm:w-24" />
        </div>
      </nav>

      {/* Shop Banner — elegant Slate Gray (#D1DAD9) textured background with scaled typography */}
      <header className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 bg-nw-slate/30 border-b border-nw-charcoal/10">
        <div className="max-w-7xl mx-auto text-center">
          {brandStyle === 'vicks' && (
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-5xl sm:text-6xl md:text-8xl text-[#1E3B27] font-light leading-none">
                Vick&apos;s
              </span>
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] text-[#1E3B27] leading-none mt-2 sm:mt-3">
                CORNER
              </span>
            </div>
          )}
          {brandStyle === 'egos' && (
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-nw-gold mb-2 sm:mb-3">
                EGO&apos;s
              </span>
              <span className="font-serif italic text-4xl sm:text-5xl md:text-7xl text-nw-ink font-light leading-none">
                Boutique
              </span>
            </div>
          )}
          {brandStyle === 'jans' && (
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-3xl sm:text-4xl text-nw-ink leading-none">
                Jan&apos;s
              </span>
              <span
                className="text-5xl sm:text-6xl md:text-8xl text-nw-ink uppercase leading-none mt-1 sm:mt-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
              >
                SHOP
              </span>
            </div>
          )}
          <div className="w-12 sm:w-16 h-[1px] bg-nw-gold/40 mx-auto mt-6 sm:mt-8" />
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-nw-charcoal/50 mt-3 sm:mt-4">
            {brandTagline}
          </p>
        </div>
      </header>

      {/* Product Gallery — 2 cols on mobile, 3 on lg. Styled to match shop-card-inspo.png */}
      <main className="bg-nw-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-20 md:py-28">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-12 sm:gap-y-20 md:gap-x-16 md:gap-y-24">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Floating product image (transparent background) */}
                <div className="w-full aspect-square flex items-center justify-center mb-4 sm:mb-6 overflow-hidden bg-transparent">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[85%] max-h-[85%] sm:max-w-[80%] sm:max-h-[80%] object-contain select-none group-hover:scale-105 group-hover:-translate-y-1"
                    style={{ transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>

                {/* Name + Price centered beneath in lightweight monospace typewriter style (based on shop-card-inspo.png) */}
                <h3 className="font-mono text-[10px] sm:text-xs tracking-[0.1em] text-nw-charcoal text-center leading-normal px-2">
                  {item.name.toLowerCase()}
                </h3>
                <p className="font-mono text-[9px] sm:text-[11px] text-nw-charcoal/60 mt-1 sm:mt-1.5 tracking-wider text-center">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-nw-offwhite py-10 border-t border-nw-charcoal/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col sm:flex-row justify-between items-center text-[9px] sm:text-[10px] font-mono tracking-[0.15em] sm:tracking-[0.2em] text-nw-charcoal/50 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-serif font-bold text-nw-ink tracking-[0.2em] sm:tracking-[0.3em] text-xs">NGUOWAY</span>
            <span className="text-nw-charcoal/20">|</span>
            <p>&copy; 2026 Nguoway.</p>
          </div>
          <Link
            href="/"
            className="hover:text-nw-gold uppercase transition-colors duration-300"
          >
            Return to Directory
          </Link>
        </div>
      </footer>
    </div>
  );
}
