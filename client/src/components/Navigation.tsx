import { Button } from "@/components/ui/button";
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

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-[9999] px-6 py-4 md:px-12 flex justify-between items-center gap-4 bg-[#3b2318]/95 backdrop-blur-md border-b border-[#c27a4a]/10"
      data-testid="navigation"
    >
      <a
        href={SITE}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center no-underline cursor-pointer"
        data-testid="link-home"
      >
        <img
          src={logoImg}
          alt="Ready Desk Services, LLC"
          className="h-[64px] w-auto object-contain"
          data-testid="img-logo"
        />
      </a>

      <div className="hidden lg:flex items-center gap-8 flex-wrap">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-[0.18em] uppercase text-white/85 hover:text-white transition-colors"
            data-testid={`button-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </a>
        ))}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="text-xs font-bold tracking-[0.15em] uppercase text-[#c27a4a] border-[#c27a4a]/40"
          data-testid="button-nav-booking"
        >
          <a href={BOOKING} target="_blank" rel="noopener noreferrer">
            Let's Talk
          </a>
        </Button>
      </div>
    </nav>
  );
}
