export default function Footer() {
  return (
    <footer className="bg-nw-offwhite py-12 border-t border-nw-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-[0.2em] text-nw-charcoal/50 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-serif font-bold text-nw-ink tracking-[0.3em] text-xs">
            NGUOWAY
          </span>
          <span className="hidden md:inline-block text-nw-charcoal/20">|</span>
          <p>&copy; 2026 Nguoway. All rights reserved.</p>
        </div>

        <div className="flex space-x-8">
          <a
            href="#privacy"
            className="hover:text-nw-gold uppercase"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-nw-gold uppercase"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="hover:text-nw-gold uppercase"
            style={{ transition: 'color 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}