import logoImg from "@assets/Logo_website_2026.png";

const SITE = "https://readydeskservices.com";

export default function Footer() {
  return (
    <footer className="bg-[#3b2318] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-[#c27a4a]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-10">
          <a href={SITE} target="_blank" rel="noopener noreferrer">
            <img
              src={logoImg}
              alt="Ready Desk Services, LLC"
              className="h-[110px] w-auto object-contain"
              data-testid="img-footer-logo"
            />
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a
              href={`${SITE}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors"
              data-testid="link-footer-home"
            >
              Home
            </a>
            <a
              href={`${SITE}/about`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors"
              data-testid="link-footer-about"
            >
              About
            </a>
            <a
              href={`${SITE}/services`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors"
              data-testid="link-footer-services"
            >
              Services
            </a>
            <a
              href={`${SITE}/contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.18em] uppercase text-[#c27a4a] hover:text-[#e8a76e] transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="mailto:cj@readydeskservices.com" className="hover:text-white transition-colors" data-testid="link-footer-email">
              cj@readydeskservices.com
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+12136165780" className="hover:text-white transition-colors" data-testid="link-footer-phone">
              (213) 616-5780
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Ready Desk Services, LLC. All Rights Reserved.
          </span>
          <span className="text-xs text-white/30">
            Web Design &middot; Paralegal &middot; Transcription
          </span>
        </div>
      </div>
    </footer>
  );
}
