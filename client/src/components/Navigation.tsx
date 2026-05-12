import { motion } from "framer-motion";
import logoImg from "@assets/Logo_website_2026.png";

const SITE = "https://readydeskservices.com";
const BOOKING = "https://calendly.com/cj-readydeskservices/30min";

const navLinks = [
  { label: "Home", href: `${SITE}/` },
  { label: "Why Ready Desk", href: `${SITE}/why-ready-desk` },
  { label: "About", href: `${SITE}/about` },
  { label: "Services", href: `${SITE}/services` },
  { label: "Contact", href: `${SITE}/contact` },
];

const HEADER_GRADIENT =
  "linear-gradient(90deg, #4d3a2b 0%, #57433b 12%, #65503f 22%, #7a6351 33%, #937d67 45%, #ab967e 55%, #beac98 65%, #d0c3b2 75%, #a59787 85%, #6c5b4b 100%)";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-6 md:px-12 lg:px-20"
      style={{
        height: "140px",
        background: HEADER_GRADIENT,
      }}
      data-testid="navigation"
    >
      <motion.a
        href={SITE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center no-underline cursor-pointer"
        data-testid="link-home"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        whileHover={{ scale: 1.04 }}
      >
        <motion.img
          src={logoImg}
          alt="Ready Desk Services, LLC"
          className="h-[110px] w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
          data-testid="img-logo"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>

      <div className="hidden lg:flex items-center gap-9">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-libre text-[13px] font-normal tracking-[0.22em] uppercase text-white/95 hover:text-white transition-colors whitespace-nowrap"
            data-testid={`button-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </a>
        ))}
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          className="font-libre text-[13px] font-normal tracking-[0.22em] uppercase text-white/95 hover:text-white transition-colors whitespace-nowrap border border-white/40 px-5 py-2 rounded-sm"
          data-testid="button-nav-booking"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
