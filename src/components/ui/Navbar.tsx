import { useState, useEffect } from 'react';
import { useAnimation } from '../../context/AnimationContext';
import { Play, Pause, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { animationsPaused, toggleAnimations } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b0d11]/90 backdrop-blur-md border-b border-[#1c222e] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="MrJupyter - Muhammad Taha Hussain, AI/ML Engineer Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141821] border border-[#232a36] flex items-center justify-center group-hover:border-[#38bdf8]/40 transition-colors">
              <div className="w-4 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-semibold text-sm tracking-tight text-[#f3f4f6] group-hover:text-[#38bdf8] transition-colors">
                MrJupyter
              </span>
              <span className="text-[10px] text-slate-400 font-mono -mt-0.5">
                AI/ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono text-slate-400 hover:text-[#f3f4f6] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Visible Pause-Animations Control */}
            <button
              onClick={toggleAnimations}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141821] hover:bg-[#1a202c] border border-[#232a36] hover:border-[#38bdf8]/40 text-slate-300 hover:text-[#f3f4f6] text-[11px] font-mono transition-all"
              aria-label={animationsPaused ? 'Resume page animations' : 'Pause page animations'}
              title={animationsPaused ? 'Resume animations' : 'Pause animations'}
            >
              {animationsPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#38bdf8]" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-slate-400" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleAnimations}
              className="p-1.5 rounded-md bg-[#141821] border border-[#232a36] text-slate-300"
              aria-label={animationsPaused ? 'Resume animations' : 'Pause animations'}
            >
              {animationsPaused ? <Play className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden mt-3 p-4 bg-[#101319] border border-[#1c222e] rounded-xl flex flex-col gap-3 font-mono text-xs"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-300 hover:text-[#38bdf8] border-b border-[#1c222e] last:border-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
};
