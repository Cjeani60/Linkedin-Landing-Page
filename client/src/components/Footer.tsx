import logoImg from "@assets/Logo_1771363129441.png";

export default function Footer() {
  return (
    <footer className="bg-[#4a3328] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-[#c27a4a]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center gap-0">
            <img src={logoImg} alt="RDS Logo" className="w-[120px] h-[120px] object-contain" data-testid="img-footer-logo" />
            <span className="font-serif-display font-semibold text-[26px] leading-tight text-white whitespace-nowrap -ml-2">Ready Desk Services, LLC</span>
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
