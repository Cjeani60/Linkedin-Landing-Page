import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Logo_1771363129441.png";

export default function Navigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] px-6 py-3 md:px-12 flex justify-between items-center gap-4 bg-[#3b2318]/95 backdrop-blur-md border-b border-[#c27a4a]/10" data-testid="navigation">
      <Link href="/" className="group flex items-center gap-3 no-underline cursor-pointer" data-testid="link-home">
        <img src={logoImg} alt="RDS Logo" className="w-20 h-20 object-contain" data-testid="img-logo" />
        <span className="font-serif-display font-bold text-lg leading-tight text-white tracking-wide whitespace-nowrap">
          Ready Desk Services, LLC
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 flex-wrap">
        <button onClick={() => scrollTo('showcase')} className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 transition-colors" data-testid="button-nav-webdesign">
          What We Do
        </button>
        <button onClick={() => scrollTo('process')} className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 transition-colors" data-testid="button-nav-process">
          Process
        </button>
        <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 transition-colors" data-testid="link-nav-services">
          Our Services
        </a>
        <Button variant="outline" size="sm" onClick={() => scrollTo('contact')} className="text-xs font-bold tracking-[0.15em] uppercase text-[#c27a4a] border-[#c27a4a]/40" data-testid="button-nav-contact">
          Let's Talk
        </Button>
      </div>
    </nav>
  );
}
