import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Logo_website_2026.png";

export default function Navigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] px-6 py-3 md:px-12 flex justify-between items-center gap-4 bg-[#3b2318]/95 backdrop-blur-md border-b border-[#c27a4a]/10" data-testid="navigation">
      <Link href="/" className="group flex items-center no-underline cursor-pointer" data-testid="link-home">
        <img src={logoImg} alt="Ready Desk Services, LLC" className="h-[60px] w-auto object-contain" data-testid="img-logo" />
      </Link>

      <div className="hidden md:flex items-center gap-8 flex-wrap">
        <button onClick={() => scrollTo('showcase')} className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 transition-colors" data-testid="button-nav-webdesign">
          What We Do
        </button>
        <button onClick={() => scrollTo('process')} className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 transition-colors" data-testid="button-nav-process">
          Process
        </button>
        <Button variant="outline" size="sm" onClick={() => scrollTo('contact')} className="text-xs font-bold tracking-[0.15em] uppercase text-[#c27a4a] border-[#c27a4a]/40" data-testid="button-nav-contact">
          Let's Talk
        </Button>
      </div>
    </nav>
  );
}
