import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#090b0e] border-t border-[#1c222e] font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#141822]">
          
          <div className="text-center md:text-left">
            <span className="font-bold text-[#f3f4f6] text-sm block">
              Muhammad Taha Hussain <span className="text-[#38bdf8]">[MrJupyter]</span>
            </span>
            <span className="text-[11px] text-slate-400">
              AI/ML Engineer • Karachi, Pakistan
            </span>
          </div>

          <div className="text-[11px] text-slate-400 max-w-md text-center md:text-right">
            Enterprise systems described adhere strictly to client confidentiality and data protection governance.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12161f] border border-[#1e2532] text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll back to top of the page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38bdf8]" />
          </button>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Muhammad Taha Hussain (MrJupyter). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/tahah02" target="_blank" rel="noreferrer" className="hover:text-slate-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-taha-hussain-6b354a27a" target="_blank" rel="noreferrer" className="hover:text-slate-300">
              LinkedIn
            </a>
            <a href="mailto:muhammadtahahussain020@gmail.com" className="hover:text-slate-300">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
