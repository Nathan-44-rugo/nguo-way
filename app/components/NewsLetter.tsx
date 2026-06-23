export default function Newsletter() {
  return (
    <section className="bg-nw-offwhite py-24 border-t border-nw-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-nw-gold mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-nw-ink font-light mb-4">
            The Digital <span className="italic text-nw-gold">Registry</span>
          </h2>
          <p className="text-nw-charcoal/60 font-light text-xs md:text-sm leading-relaxed max-w-md">
            Sign up to receive early developer access, avatar mint coordinates,
            and whitelists for limited-edition garment drops.
          </p>
        </div>

        <form className="w-full flex items-center justify-between border-b border-nw-charcoal/20 py-4 focus-within:border-nw-gold" style={{ transition: 'border-color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="bg-transparent border-none text-xs md:text-sm tracking-[0.3em] font-mono uppercase text-nw-ink placeholder-nw-charcoal/30 focus:outline-none w-full"
            required
          />
          <button
            type="submit"
            className="font-mono text-xs tracking-[0.3em] uppercase text-nw-gold hover:text-nw-ink font-bold ml-4 whitespace-nowrap"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            JOIN
          </button>
        </form>
      </div>
    </section>
  );
}