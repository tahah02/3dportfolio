import { useEffect, useRef } from 'react';
import type { Project } from '../../types/portfolio';
import { X, CheckCircle2, Cpu, Layers } from 'lucide-react';

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDialog = ({ project, isOpen, onClose }: ProjectDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-2xl bg-[#11151d] border border-[#232a36] rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[88vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1c222e]">
          <div>
            <span className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider block mb-1">
              {project.categoryLabel} / {project.domain}
            </span>
            <h3 id="dialog-title" className="text-xl sm:text-2xl font-bold text-[#f3f4f6] font-mono">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181d26] hover:bg-[#202734] text-slate-400 hover:text-white transition-colors"
            aria-label="Close project details dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-5 space-y-6 flex-1 pr-1">
          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Project Overview</span>
            </h4>
            <p id="dialog-description" className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Technical Highlights</span>
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Technologies & Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#161b24] border border-[#232a36] text-[11px] font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#1c222e] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#181d26] hover:bg-[#202734] border border-[#232a36] text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
