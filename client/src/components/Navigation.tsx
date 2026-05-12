import { motion } from "framer-motion";
import rdsLetters from "@assets/rds-letters_1778618606398.png";
import rdsArch from "@assets/rds-arch_1778618616865.png";

const BOOKING = "https://calendly.com/cj-readydeskservices/30min";

const HEADER_GRADIENT =
  "linear-gradient(90deg, #4d3a2b 0%, #57433b 12%, #65503f 22%, #7a6351 33%, #937d67 45%, #ab967e 55%, #beac98 65%, #d0c3b2 75%, #a59787 85%, #6c5b4b 100%)";

export default function Navigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
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
          style={{ width: "260px", top: "30px", left: "0" }}
          animate={{ y: [0, -4, 0], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src={rdsLetters}
          alt="Ready Desk Services, LLC"
          className="absolute pointer-events-none select-none"
          style={{ width: "260px", top: "42px", left: "0" }}
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
    </nav>
  );
}
