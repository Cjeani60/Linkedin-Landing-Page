export default function Footer() {
  return (
    <footer className="bg-espresso text-white py-12 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif-display text-xl tracking-wide text-white/90">Ready Desk Services, LLC</span>
          <span className="text-xs text-white/40 mt-1">© {new Date().getFullYear()} All Rights Reserved.</span>
        </div>
        
        <div className="flex gap-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-gold hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-gold hover:text-white transition-colors">
            ReadyDesk.com
          </a>
        </div>
      </div>
    </footer>
  );
}
