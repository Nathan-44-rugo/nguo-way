export default function Header() {
return (
<header className="w-full bg-[#D1DAD9]/40 border-b border-[#5C6665]/10 backdrop-blur-md">
    <div className="py-5 px-6 md:px-16 flex items-center justify-between">
    
    {/* Left Side Links */}
    <div className="flex space-x-8 text-[9px] tracking-[0.25em] font-mono uppercase text-[#5C6665]">
        <a href="#studios" className="hover:text-[#A38356] transition-colors">Creators</a>
        <a href="#sandbox" className="hover:text-[#A38356] transition-colors">Sandbox</a>
    </div>

    {/* Spaced Wordmark Branding */}
    <div className="text-center">
        <h1 className="font-serif text-xl md:text-2xl tracking-[0.4em] font-bold text-[#A38356] select-none leading-none">
        NGUOWAY
        </h1>
    </div>

    {/* Right Side Links */}
    <div className="flex items-center space-x-8 text-[9px] tracking-[0.25em] font-mono uppercase text-[#5C6665]">
        <a href="#about" className="hover:text-[#A38356] transition-colors">About</a>
        <button className="hover:text-[#A38356] flex items-center" aria-label="Cart">
        <svg className="w-4 h-4 text-[#5C6665]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        </button>
    </div>

    </div>
</header>
);
}