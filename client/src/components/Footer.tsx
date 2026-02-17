import logoImg from "@assets/Logo_1771363129441.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f0c09] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="RDS Logo" className="w-12 h-12 object-contain" data-testid="img-footer-logo" />
            <span className="font-serif-display text-xl tracking-wide text-white/90 whitespace-nowrap">Ready Desk Services, LLC</span>
          </div>

          <div className="flex gap-8 flex-wrap">
            <a href="https://readydeskservices.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-[#c27a4a] transition-colors" data-testid="link-footer-website">
              ReadyDeskServices.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-white/30">&copy; {new Date().getFullYear()} Ready Desk Services, LLC. All Rights Reserved.</span>
          <span className="text-xs text-white/20">Web Design &middot; Paralegal &middot; Transcription</span>
        </div>
      </div>
    </footer>
  );
}
