export default function Newsletter() {
return (
<section className="bg-white py-20 border-t border-neutral-100">
    <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left hand details */}
    <div>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-neutral-900 font-light mb-3">
        The Digital <span className="italic">Registry</span>
        </h2>
        <p className="text-neutral-500 font-light text-xs md:text-sm leading-relaxed max-w-md">
        Sign up to receive early developer access, avatar mint coordinates, and whitelists for limited-edition garment drops.
        </p>
    </div>

    {/* Right hand input */}
    <form className="w-full flex items-center justify-between border-b border-neutral-300 py-3 focus-within:border-[#965F26] transition-colors duration-300">
        <input 
        type="email" 
        placeholder="YOUR EMAIL" 
        className="bg-transparent border-none text-xs md:text-sm tracking-widest font-mono uppercase text-neutral-800 placeholder-neutral-400 focus:outline-none w-full"
        required
        />
        <button 
        type="submit" 
        className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-[#965F26] hover:text-[#C9AA4B] transition-colors ml-4 font-bold"
        >
        JOIN
        </button>
    </form>

    </div>
</section>
);
}