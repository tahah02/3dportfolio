import React, { useState } from 'react';
import { Bot, GitBranch, ArrowDown, Cpu, Terminal, ChevronRight } from 'lucide-react';

interface AgentNode {
  id: string;
  name: string;
  role: string;
  engine: string;
  input: string;
  output: string;
  guardrails: string;
}

export const AgentVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('supervisor');

  const workerAgents: AgentNode[] = [
    {
      id: 'onboarding-agent',
      name: 'Onboarding Flow Agent',
      role: 'Manages dynamic 29-screen UI transitions & client state machines',
      engine: 'LangGraph StateGraph + SQL Master.OnboardingScreenFields',
      input: 'Client stage events, Screen 1-29 payload',
      output: 'Validated screen state, dynamic input fields',
      guardrails: 'Strict field typing, session validation'
    },
    {
      id: 'ocr-doc-agent',
      name: 'OCR & IDP Agent',
      role: 'Extracts structured salary, payslip & KYC credentials from scans',
      engine: 'PaddleOCR + EasyOCR + OpenCV adaptive deskewing',
      input: 'Noisy PDF / high-res scan image',
      output: 'Pydantic verified key-value JSON schema',
      guardrails: 'Confidence thresholding >92%, anti-tampering checks'
    },
    {
      id: 'address-normalizer',
      name: 'Address & Geo Verification Agent',
      role: 'Cleans, standardizes and validates international residency data',
      engine: 'NLTK tokenization + RegEx cleansing + Postal Schemas',
      input: 'Unstructured multi-lingual address string',
      output: 'Standardized ISO-compliant postal object',
      guardrails: 'Sanctioned jurisdiction blocking'
    },
    {
      id: 'wealth-profiler',
      name: 'Wealth & FATCA Profiler Agent',
      role: 'Evaluates foreign account tax compliance & tax residency status',
      engine: 'LangChain LCEL + Pydantic Strict Validator',
      input: 'Tax residency declarations, citizenship records',
      output: 'FATCA classification & reporting status',
      guardrails: 'Zero ambiguity policy, human-in-the-loop escalation'
    },
    {
      id: 'sow-evaluator',
      name: 'Source of Wealth (SOW) Agent',
      role: 'Analyzes legitimacy and historical accumulation of UHNW wealth',
      engine: 'Milvus Vector Search + LangGraph Context Handoff',
      input: 'Declared wealth origins, corporate audit records',
      output: 'SOW Risk Index, Source consistency score',
      guardrails: 'Strict AML compliance and red-flag heuristics'
    },
    {
      id: 'review-auditor',
      name: 'Compliance & Audit Reviewer',
      role: 'Synthesizes final risk assessment package for Tier-1 sign-off',
      engine: 'Quantized LLM (qwen2.5:3b) + Immutable Ledger Bridge',
      input: 'Aggregated output payloads from all 5 domain workers',
      output: 'Comprehensive Onboarding Audit Packet',
      guardrails: 'Cryptographic hash signing, PII masking verification'
    }
  ];

  const selectedAgent = workerAgents.find(a => a.id === activeNode);

  return (
    <section id="architecture" className="py-24 relative bg-[#070b16] cyber-grid-dense border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE ARCHITECTURAL BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Autonomous <span className="gradient-text-cyan">Supervisor-Worker</span> Topology
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-light">
            An interactive live view of the multi-agent orchestration architecture powering zero-data-loss banking onboarding and high-throughput decision systems.
          </p>
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Diagram / Node Layout */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Central Supervisor Node */}
            <div
              onClick={() => setActiveNode('supervisor')}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                activeNode === 'supervisor'
                  ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.25)]'
                  : 'bg-slate-900/60 border-slate-700/80 hover:border-cyan-500/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                      LangGraph Central Supervisor
                      <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded font-mono">PRIMARY</span>
                    </h3>
                    <p className="text-xs text-slate-400">Cyclic StateGraph Dispatcher & Conditional Router</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  ORCHESTRATING
                </div>
              </div>

              {/* State hydration badges */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-xs font-mono">
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Session Store</span>
                  <span className="text-emerald-400 font-semibold">Redis Hydration</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Gateway</span>
                  <span className="text-cyan-400 font-semibold">.NET 8 Core Bus</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Security</span>
                  <span className="text-purple-400 font-semibold">PII Masker Sanitized</span>
                </div>
              </div>
            </div>

            {/* Downward routing animation banner */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 py-1">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span>DISPATCHING STATE VIA CONDITIONAL EDGES</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>

            {/* Worker Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {workerAgents.map((agent) => {
                const isSelected = activeNode === agent.id;
                return (
                  <div
                    key={agent.id}
                    onClick={() => setActiveNode(agent.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.2)] scale-[1.01]'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Bot className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <h4 className="text-sm font-semibold text-white font-mono">{agent.name}</h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400 rotate-90' : 'text-slate-500'} transition-transform`} />
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {agent.role}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Inspector Panel */}
          <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-cyan-500/30 p-6 backdrop-blur-xl shadow-xl sticky top-24">
            
            {activeNode === 'supervisor' ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Supervisor Node Telemetry</span>
                </div>
                <h3 className="text-xl font-bold text-white font-mono mb-4">
                  LangGraph Master Orchestrator
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  Serves as the high-availability central brain for the digital onboarding lifecycle. Maintains cross-session state hydration, evaluates dynamic conditional transitions between Screen 1 through 29, and triggers asynchronous worker execution.
                </p>

                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">STATE RECOVERY PARADIGM</div>
                    <div className="text-emerald-400 font-semibold">Zero-Data-Loss Redis Checkpoint Hydration</div>
                    <p className="text-[11px] text-slate-400 mt-1">If the customer disconnects, the exact screen, form inputs, and verification tokens re-hydrate on reconnection.</p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">CORE INTEGRATION</div>
                    <div className="text-cyan-300 font-semibold">C# (.NET 8 Core Banking API Gateway)</div>
                    <p className="text-[11px] text-slate-400 mt-1">Synchronizes data with sovereign core banking ledgers using cryptographic payload signing.</p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">DYNAMIC SCHEMA INGESTION</div>
                    <div className="text-purple-300 font-semibold">SQL Server Master.OnboardingScreenFields</div>
                    <p className="text-[11px] text-slate-400 mt-1">Fields are never hardcoded; the engine reads dynamic UI specifications in real time.</p>
                  </div>
                </div>
              </div>
            ) : selectedAgent ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Worker Agent Spec</span>
                </div>
                <h3 className="text-xl font-bold text-white font-mono mb-2">
                  {selectedAgent.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {selectedAgent.role}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[10px]">UNDERLYING ENGINE & LIBRARIES</div>
                    <div className="text-cyan-300 font-semibold mt-0.5">{selectedAgent.engine}</div>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[10px]">INBOUND DATA PAYLOAD</div>
                    <div className="text-slate-200 mt-0.5">{selectedAgent.input}</div>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[10px]">OUTBOUND STRUCTURED CONTRACT</div>
                    <div className="text-emerald-400 mt-0.5">{selectedAgent.output}</div>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[10px]">ENTERPRISE GUARDRAILS</div>
                    <div className="text-purple-300 mt-0.5">{selectedAgent.guardrails}</div>
                  </div>
                </div>
              </div>
            ) : null}

          </div>

        </div>

      </div>
    </section>
  );
};
