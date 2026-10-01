import { useState } from 'react';
import { skillsData } from '../../data/skills';
import { ChevronDown, CheckCircle2, ChevronRight } from 'lucide-react';

export const Expertise = () => {
  // Default open the first two categories
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    'agentic-ai': true,
    'genai-llms': true,
  });

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    skillsData.forEach((s) => {
      allOpen[s.id] = true;
    });
    setOpenGroups(allOpen);
  };

  const collapseAll = () => {
    setOpenGroups({});
  };

  return (
    <section id="expertise" className="py-24 bg-[#0e1117] border-y border-[#1c222e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] block mb-2">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              14 specialized technical domains organized in expandable groups for streamlined exploration.
            </p>
          </div>

          {/* Quick Expand / Collapse Controls */}
          <div className="flex items-center gap-3 mt-4 md:mt-0 font-mono text-xs">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-[#141821] hover:bg-[#1b212d] border border-[#232a36] text-slate-300 hover:text-white transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-[#141821] hover:bg-[#1b212d] border border-[#232a36] text-slate-300 hover:text-white transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* 14 Accessible Expandable Groups */}
        <div className="space-y-3">
          {skillsData.map((group) => {
            const isOpen = !!openGroups[group.id];
            return (
              <div
                key={group.id}
                className="rounded-xl bg-[#12161f] border border-[#1e2532] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${group.id}`}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#161a25] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#38bdf8] bg-[#1a2332] px-2 py-0.5 rounded border border-[#273549]">
                      0{group.number}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#f3f4f6]">
                      {group.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      {group.skills.length} skills
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-[#38bdf8]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`panel-${group.id}`}
                    className="px-5 pb-5 pt-2 border-t border-[#1c222e] bg-[#0f131a]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                      {group.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#141822] border border-[#1f2633] text-xs text-slate-300 font-mono"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
