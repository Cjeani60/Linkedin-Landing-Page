import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navigation() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-transparent">
      <Link href="/" className="group flex items-center gap-3 no-underline cursor-pointer">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 3 L49 13 L49 30 C49 41 38 49 27 52 C16 49 5 41 5 30 L5 13 Z" fill="#b8922a" opacity="0.15"/>
            <path d="M27 5 L47 14 L47 30 C47 40.5 37 48 27 51 C17 48 7 40.5 7 30 L7 14 Z" fill="none" stroke="#b8922a" strokeWidth="1.5"/>
            <text x="27" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="bold" fill="#b8922a">RDS</text>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-serif-display font-bold text-lg leading-tight text-espresso tracking-wide">
            Ready Desk Services
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">LLC</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-espresso/70 hover:text-gold transition-colors">
          About
        </a>
        <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-espresso/70 hover:text-gold transition-colors">
          Services
        </a>
        <button onClick={scrollToContact} className="text-xs font-bold tracking-[0.15em] uppercase text-gold border border-gold px-6 py-2 rounded-sm hover:bg-gold hover:text-white transition-all">
          Contact
        </button>
      </div>
    </nav>
  );
}
