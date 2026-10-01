import { Cpu, ShieldCheck, Database } from 'lucide-react';

export const IntroFocus = () => {
  return (
    <section className="py-20 bg-[#0e1117] border-y border-[#1c222e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] block mb-2">
            Engineering Perspective
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] tracking-tight">
            Building reliable autonomous systems for production environments.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Most AI prototypes fail when transitioning from isolated prompts to mission-critical infrastructure. My work bridges this gap by applying rigorous software engineering principles to generative AI and machine learning.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-xl bg-[#131720] border border-[#202734]">
            <div className="w-10 h-10 rounded-lg bg-[#1a202c] border border-[#2d3748] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <h3 className="text-base font-semibold text-[#f3f4f6] font-mono mb-2">
              Supervisor-Worker Topologies
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Moving beyond fragile single-agent prompts. I implement LangGraph StateGraphs where a central supervisor coordinates specialized domain workers with strictly enforced Pydantic output schemas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#131720] border border-[#202734]">
            <div className="w-10 h-10 rounded-lg bg-[#1a202c] border border-[#2d3748] flex items-center justify-center mb-4">
              <Database className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <h3 className="text-base font-semibold text-[#f3f4f6] font-mono mb-2">
              Persistent State Recovery
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eliminating user drop-offs and data loss. Leveraging Redis-backed session stores to checkpoint complex multi-screen flows and re-hydrate state on refresh or disconnection.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#131720] border border-[#202734]">
            <div className="w-10 h-10 rounded-lg bg-[#1a202c] border border-[#2d3748] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <h3 className="text-base font-semibold text-[#f3f4f6] font-mono mb-2">
              Enterprise Security & Gateways
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging modern AI with core banking systems. Building high-throughput C#/.NET 8 gateways, local sovereign LLM inference, and automated PII masking pipelines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
