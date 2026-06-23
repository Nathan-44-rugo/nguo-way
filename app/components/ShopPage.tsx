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
    <div className="min-h-screen bg-nw-slate text-nw-ink font-serif">
      {/* Navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nw-slate/85 backdrop-blur-md border-b border-nw-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-nw-charcoal/50 hover:text-nw-gold flex items-center gap-2"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            ← Back to Directory
          </Link>
          <Link href="/" className="font-serif font-bold text-nw-ink tracking-[0.3em] text-sm">
            NGUOWAY
          </Link>
          <div className="w-24" />
        </div>
      </nav>

      {/* Shop Banner */}
      <header className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 bg-nw-slate border-b border-nw-charcoal/10">
        <div className="max-w-7xl mx-auto text-center">
          {brandStyle === 'vicks' && (
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-6xl md:text-8xl text-[#1E3B27] font-light leading-none">
                Vick&apos;s
              </span>
              <span className="font-serif text-3xl md:text-4xl font-extrabold tracking-[0.3em] text-[#1E3B27] leading-none mt-3">
                CORNER
              </span>
            </div>
          )}
          {brandStyle === 'egos' && (
            <div className="flex flex-col items-center">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-nw-gold mb-3">
                EGO&apos;s
              </span>
              <span className="font-serif italic text-5xl md:text-7xl text-nw-ink font-light leading-none">
                Boutique
              </span>
            </div>
          )}
          {brandStyle === 'jans' && (
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-4xl text-nw-ink leading-none">
                Jan&apos;s
              </span>
              <span
                className="text-6xl md:text-8xl text-nw-ink uppercase leading-none mt-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
              >
                SHOP
              </span>
            </div>
          )}
          <div className="w-16 h-[1px] bg-nw-gold/40 mx-auto mt-8" />
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-nw-charcoal/50 mt-4">
            {brandTagline}
          </p>
        </div>
      </header>

      {/* Product Gallery — gallery-style floating cards */}
      <main className="bg-nw-slate">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-12 md:gap-y-20">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Floating product image */}
                <div
                  className="w-full aspect-square flex items-center justify-center mb-5 overflow-hidden"
                  style={{ transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[75%] max-h-[75%] object-contain select-none group-hover:scale-105"
                    style={{ transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>

                {/* Name + Price centered beneath */}
                <h3 className="font-serif text-base md:text-lg tracking-wide text-nw-ink text-center leading-snug">
                  {item.name}
                </h3>
                <p className="font-mono text-[12px] text-nw-charcoal/60 mt-1.5 tracking-wider">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-nw-slate py-12 border-t border-nw-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-[0.2em] text-nw-charcoal/50 gap-6">
          <div className="flex items-center gap-4">
            <span className="font-serif font-bold text-nw-ink tracking-[0.3em] text-xs">NGUOWAY</span>
            <span className="text-nw-charcoal/20">|</span>
            <p>&copy; 2026 Nguoway. All rights reserved.</p>
          </div>
          <Link
            href="/"
            className="hover:text-nw-gold uppercase"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Return to Directory
          </Link>
        </div>
      </footer>
    </div>
  );
}
