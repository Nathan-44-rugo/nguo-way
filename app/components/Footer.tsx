export default function Footer() {
return (
<footer className="bg-white py-10 border-t border-neutral-100">
    <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-wider text-neutral-400 gap-4">
    
    <div className="flex flex-col md:flex-row items-center gap-4">
        <span className="font-serif font-bold text-neutral-700 tracking-wider">NGUOWAY</span>
        <span className="hidden md:inline-block">|</span>
        <p>© 2026 Nguoway. All rights reserved.</p>
    </div>

    <div className="flex space-x-6">
        <a href="#privacy" className="hover:text-neutral-700 transition-colors">Privacy Policy</a>
        <a href="#terms" className="hover:text-neutral-700 transition-colors">Terms of Service</a>
        <a href="#contact" className="hover:text-neutral-700 transition-colors">Contact</a>
    </div>
    
    </div>
</footer>
);
}