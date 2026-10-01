import { aboutData, experienceTimeline } from '../../data/experience';
import { GraduationCap, MapPin, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0b0d11]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] block mb-2">
            Background & Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] tracking-tight">
            About Muhammad Taha Hussain
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Engineering foundation, academic credentials, and production delivery timeline.
          </p>
        </div>

        {/* Profile Card & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Narrative */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-[#12161f] border border-[#1e2532]">
            <h3 className="text-lg font-bold text-[#f3f4f6] font-mono mb-4">
              Engineering Profile
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
              {aboutData.narrative}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1c222e]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#181f2b] border border-[#232f42] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Location</span>
                  <span className="text-xs font-mono text-slate-200">{aboutData.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#181f2b] border border-[#232f42] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Education</span>
                  <span className="text-xs font-mono text-slate-200">
                    {aboutData.education.degree} ({aboutData.education.year})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Spotlight Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-xl bg-[#12161f] border border-[#1e2532]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] block mb-2">
              Academic Degree
            </span>
            <h4 className="text-base font-bold text-[#f3f4f6] font-mono mb-1">
              BS Computer Science
            </h4>
            <p className="text-xs text-slate-300 font-mono mb-3">
              {aboutData.education.institution}
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#16202e] border border-[#27384e] text-[11px] font-mono text-[#38bdf8] mb-4">
              <Calendar className="w-3 h-3" />
              <span>Graduation: {aboutData.education.year}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rigorous curriculum spanning algorithms, distributed computing, database systems, and machine learning architectures.
            </p>
          </div>

        </div>

        {/* Professional Experience Timeline */}
        <div>
          <h3 className="text-xl font-bold text-[#f3f4f6] font-mono mb-8 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#38bdf8]" />
            <span>Professional Experience Timeline</span>
          </h3>

          <div className="space-y-6">
            {experienceTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#12161f] border border-[#1e2532]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#38bdf8] bg-[#16202e] px-2.5 py-1 rounded border border-[#27384e]">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-[#f3f4f6] font-mono">
                      {item.role}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {item.focus}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-mono mb-4">
                  Domain: {item.type} (Confidential Enterprise Work)
                </p>

                <ul className="space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
