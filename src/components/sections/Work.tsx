import { useState } from 'react';
import { projectsData } from '../../data/projects';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface WorkProps {
  onOpenDialog: (project: Project) => void;
}

export const Work = ({ onOpenDialog }: WorkProps) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ProjectCategory>('all');

  const filters: { id: 'all' | ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects (8)' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'ml-vision', label: 'Machine Learning & Document AI' },
    { id: 'engineering', label: 'Engineering' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="work" className="py-24 bg-[#0b0d11]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] block mb-2">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] tracking-tight">
              Production Systems & Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              End-to-end multi-agent platforms, intelligent document processors, and enterprise decision engines.
            </p>
          </div>

          {/* Working Category Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0" role="tablist" aria-label="Project Categories">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={selectedFilter === f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === f.id
                    ? 'bg-[#1a2332] text-[#38bdf8] border border-[#38bdf8]/40'
                    : 'bg-[#131720] text-slate-400 border border-[#202734] hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenDialog(project)}
              className="p-6 sm:p-7 rounded-xl bg-[#12161f] border border-[#1e2532] hover:border-[#38bdf8]/40 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenDialog(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div>
                {/* Domain & Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-[#38bdf8] bg-[#16202e] px-2.5 py-0.5 rounded border border-[#23354c]">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.domain}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#f3f4f6] font-mono group-hover:text-[#38bdf8] transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Description snippet */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#181d27] border border-[#232a37] text-[10px] font-mono text-slate-300"
                    >
                      {tech.split('/')[0].trim()}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-[#141821] text-slate-400 text-[10px] font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action trigger */}
                <div className="pt-3 border-t border-[#1c222e] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#38bdf8] transition-colors">
                  <span>View Project Specifications</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
