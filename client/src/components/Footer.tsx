import logoImg from "@assets/Logo_1771363129441.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f0c09] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="RDS Logo" className="w-12 h-12 object-contain" data-testid="img-footer-logo" />
            <div>
              <span className="font-serif-display text-xl tracking-wide text-white/90 block">Ready Desk Services, LLC</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60">Paralegal &middot; Transcription &middot; Web Design</span>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-gold hover:text-white transition-colors" data-testid="link-footer-website">
              ReadyDesk.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-white/30">&copy; {new Date().getFullYear()} Ready Desk Services, LLC. All Rights Reserved.</span>
          <span className="text-xs text-white/20">Precision. Partnership. Peace of mind.</span>
        </div>
      </div>
    </footer>
  );
}
