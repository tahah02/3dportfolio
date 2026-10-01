import React from 'react';
import { Briefcase, Building2, CheckCircle2, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2024 – PRESENT',
      role: 'Lead AI Engineer & Agentic Systems Architect',
      organizationType: 'Tier-1 Private Wealth Investment Bank (Confidential)',
      domain: 'Private Banking & Autonomous Multi-Agent Onboarding',
      description: 'Head architect for enterprise autonomous onboarding and sovereign AI systems. Engineered sovereign multi-agent pipelines compliant with strict financial data residency regulations.',
      accomplishments: [
        'Architected DOBAI: An autonomous multi-agent platform managing Screens 1 through 29 of UHNW client onboarding.',
        'Implemented Supervisor-Worker topology using LangGraph, coordinating 10+ specialized worker nodes with dynamic Pydantic schema validation.',
        'Eliminated onboarding drop-off by implementing Redis-backed zero-data-loss session checkpointing and hydration.',
        'Integrated sovereign local inference via Ollama (qwen2.5:3b) to ensure zero PII leaves sovereign bank VPC infrastructure.'
      ],
      tags: ['LangGraph', 'Multi-Agent', 'FastAPI', '.NET 8 Gateway', 'Redis', 'Milvus', 'SQL Server']
    },
    {
      period: '2023 – 2024',
      role: 'Conversational Banking AI & RAG Solutions Architect',
      organizationType: 'Leading Enterprise Retail Bank (GCC Region)',
      domain: 'Retail Banking & Conversational Intelligence',
      description: 'Spearheaded the design and deployment of high-throughput conversational AI services and semantic vector search engines for retail banking customers.',
      accomplishments: [
        'Constructed sub-second Milvus Vector Policy RAG engine indexing thousands of pages of banking guidelines and compliance manuals.',
        'Architected a 4-layer microservices structure (Agents, Handlers, Middleware, Services) ensuring high maintainability and testability.',
        'Hardened API endpoints with PyJWT authentication and SlowAPI rate-limiting, achieving zero security incidents under Apache JMeter load tests.'
      ],
      tags: ['Milvus', 'SentenceTransformers', 'LangChain', 'FastAPI', 'Apache JMeter', 'PyJWT']
    },
    {
      period: '2022 – 2023',
      role: 'Machine Learning & Fraud Analytics Specialist',
      organizationType: 'Financial Risk & Fraud Analytics Systems',
      domain: 'Financial Fraud Detection & Intelligent Document Processing (IDP)',
      description: 'Developed real-time anomaly detection engines and computer vision document extraction pipelines for financial auditing.',
      accomplishments: [
        'Built FDS: A hybrid fraud detection system combining Deep Autoencoder reconstruction errors with Unsupervised Isolation Forests.',
        'Engineered automated MLOps retraining pipelines (retraining_pipeline.py) with database-backed model registries and rollback support.',
        'Implemented multi-engine OCR (PaddleOCR, EasyOCR, OpenCV) parsing distorted payslips and identity documents into structured JSON.'
      ],
      tags: ['TensorFlow', 'Autoencoders', 'Isolation Forest', 'OpenCV', 'PaddleOCR', 'Streamlit']
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#05070f] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>FINTECH & ENTERPRISE TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Domain Impact & <span className="gradient-text-cyan">Architectural Track Record</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Proven track record of engineering sovereign, compliant, and highly available AI systems for private wealth institutions and enterprise banking clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-12`}
              >
                {/* Center Node Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
                    
                    {/* Period and Status */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        CONFIDENTIAL ENTERPRISE
                      </span>
                    </div>

                    {/* Role & Org */}
                    <h3 className="text-lg sm:text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 mt-1">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.organizationType}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                      {exp.description}
                    </p>

                    {/* Accomplishments */}
                    <div className="space-y-2 mb-5">
                      {exp.accomplishments.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
