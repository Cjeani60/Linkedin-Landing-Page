<<<<<<< HEAD
import { motion } from "framer-motion";
import rdsLetters from "@assets/rds-letters_1778618606398.png";
import rdsArch from "@assets/rds-arch_1778618616865.png";

const BOOKING = "https://calendly.com/cj-readydeskservices/30min";

const HEADER_GRADIENT =
  "linear-gradient(90deg, #4d3a2b 0%, #57433b 12%, #65503f 22%, #7a6351 33%, #937d67 45%, #ab967e 55%, #beac98 65%, #d0c3b2 75%, #a59787 85%, #6c5b4b 100%)";
=======
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Logo_1771363129441.png";
>>>>>>> 84564cf3c94b6b4e3aef8e882e02993022948ef6

export default function Navigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
<<<<<<< HEAD
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-6 md:px-12 lg:px-20"
      style={{
        height: "140px",
        background: HEADER_GRADIENT,
      }}
      data-testid="navigation"
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="relative h-full block"
        style={{ width: "260px" }}
        data-testid="link-nav-logo"
        aria-label="Ready Desk Services, LLC"
      >
        <motion.img
          src={rdsArch}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "260px", top: "0px", left: "0" }}
          animate={{ y: [0, -3, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src={rdsLetters}
          alt="Ready Desk Services, LLC"
          className="absolute pointer-events-none select-none"
          style={{ width: "260px", top: "60px", left: "0" }}
        />
      </a>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="hidden md:flex items-center gap-9 flex-wrap"
      >
        <button
          onClick={() => scrollTo("showcase")}
          className="font-libre text-[13px] font-normal tracking-[0.22em] uppercase text-white/95 hover:text-white transition-colors whitespace-nowrap"
          data-testid="button-nav-webdesign"
        >
          What We Do
        </button>
        <button
          onClick={() => scrollTo("process")}
          className="font-libre text-[13px] font-normal tracking-[0.22em] uppercase text-white/95 hover:text-white transition-colors whitespace-nowrap"
          data-testid="button-nav-process"
        >
          Process
        </button>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          className="font-libre text-[13px] font-normal tracking-[0.22em] uppercase text-white/95 hover:text-white transition-colors whitespace-nowrap border border-white/40 px-5 py-2 rounded-sm"
          data-testid="button-nav-booking"
        >
          Let's Talk
        </a>
      </motion.div>
=======
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] px-6 py-3 md:px-12 flex justify-between items-center gap-4 bg-[#3b2318]/95 backdrop-blur-md border-b border-[#c27a4a]/10" data-testid="navigation">
      <Link href="/" className="group flex items-center gap-3.5 no-underline cursor-pointer" data-testid="link-home">
        <img src={logoImg} alt="RDS Logo" className="w-[80px] h-[80px] object-contain" data-testid="img-logo" />
        <span className="font-serif-display font-semibold text-[26px] leading-tight text-white whitespace-nowrap">
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
        <Button variant="outline" size="sm" onClick={() => scrollTo('contact')} className="text-xs font-bold tracking-[0.15em] uppercase text-[#c27a4a] border-[#c27a4a]/40" data-testid="button-nav-contact">
          Let's Talk
        </Button>
      </div>
>>>>>>> 84564cf3c94b6b4e3aef8e882e02993022948ef6
    </nav>
  );
}
