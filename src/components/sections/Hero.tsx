import { useEffect, useRef } from 'react';
import { RobotMascot } from '../3d/RobotMascot';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { useAnimation } from '../../context/AnimationContext';
import gsap from 'gsap';

interface HeroProps {
  onSelectProject: (projectId: string) => void;
}

export const Hero = ({ onSelectProject }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const { animationsPaused } = useAnimation();

  useEffect(() => {
    if (animationsPaused) {
      gsap.set([headlineRef.current, sublineRef.current, introRef.current, buttonsRef.current, featuredRef.current], {
        opacity: 1,
        y: 0,
        clearProps: 'all'
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headlineRef.current, sublineRef.current, introRef.current, buttonsRef.current, featuredRef.current],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [animationsPaused]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0b0d11]"
      aria-label="Hero Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Featured Quick Links */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Engineer Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131720] border border-[#232a36] text-[11px] font-mono text-slate-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
              <span>Muhammad Taha Hussain</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">AI/ML Engineer</span>
              <span className="text-slate-600">/</span>
              <span className="text-[#38bdf8]">Karachi, PK</span>
            </div>

            {/* Exact Required Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f3f4f6] leading-[1.1] mb-4"
            >
              Engineering intelligence <br />
              <span className="text-[#38bdf8]">into action.</span>
            </h1>

            {/* Exact Required Supporting Line */}
            <p
              ref={sublineRef}
              className="text-lg sm:text-xl font-medium text-slate-300 font-mono tracking-tight mb-4"
            >
              Multi-agent systems. Enterprise AI. Built for the real world.
            </p>

            {/* Short Introduction */}
            <p
              ref={introRef}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-normal mb-8"
            >
              I architect autonomous multi-agent pipelines, resilient vector retrieval systems, and high-throughput core services engineered for zero data loss, rigorous data security, and verifiable production execution.
            </p>

            {/* Action Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#0b0d11] font-semibold text-xs font-mono transition-colors shadow-sm"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#141821] hover:bg-[#1a202c] text-slate-200 border border-[#232a36] hover:border-[#38bdf8]/40 text-xs font-mono transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Three Clickable Featured Project Links */}
            <div
              ref={featuredRef}
              className="w-full pt-6 border-t border-[#1c222e]"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Featured Systems
              </span>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => onSelectProject('dobai')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131720] hover:bg-[#181d28] border border-[#232a36] hover:border-[#38bdf8]/50 text-xs font-mono text-slate-300 hover:text-white transition-all text-left"
                >
                  <ArrowDownRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>DOBAI Multi-Agent</span>
                </button>

                <button
                  onClick={() => onSelectProject('conversational-banking-agent')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131720] hover:bg-[#181d28] border border-[#232a36] hover:border-[#38bdf8]/50 text-xs font-mono text-slate-300 hover:text-white transition-all text-left"
                >
                  <ArrowDownRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Conversational Banking Agent</span>
                </button>

                <button
                  onClick={() => onSelectProject('fds')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131720] hover:bg-[#181d28] border border-[#232a36] hover:border-[#38bdf8]/50 text-xs font-mono text-slate-300 hover:text-white transition-all text-left"
                >
                  <ArrowDownRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>FDS Fraud Detector</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Original Futuristic AI Robot Mascot */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <RobotMascot />
          </div>

        </div>
      </div>
    </section>
  );
};
