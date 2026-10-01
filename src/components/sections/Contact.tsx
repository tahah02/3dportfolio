import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'muhammadtahahussain020@gmail.com';
  const githubUrl = 'https://github.com/tahah02';
  const linkedinUrl = 'https://www.linkedin.com/in/muhammad-taha-hussain-6b354a27a';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with formatted subject and body
    const subject = encodeURIComponent(`Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e1117] border-t border-[#1c222e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] block mb-2">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f4f6] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Available for AI/ML engineering roles, autonomous agent architecture discussions, and production AI initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-xl bg-[#12161f] border border-[#1e2532]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-2">
                <Mail className="w-4 h-4" />
                <span>Primary Email Address</span>
              </div>
              <p className="text-sm font-mono text-slate-200 mb-4 break-all">
                {emailAddress}
              </p>
              <div className="flex gap-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#0b0d11] text-xs font-mono font-semibold text-center transition-colors"
                >
                  Send Direct Email
                </a>
                <button
                  onClick={handleCopy}
                  className="py-2 px-3 rounded-lg bg-[#181d26] hover:bg-[#202734] border border-[#232a36] text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-[#12161f] border border-[#1e2532] hover:border-[#38bdf8]/40 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-slate-300 group-hover:fill-[#38bdf8] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <div>
                  <span className="text-xs font-mono font-semibold text-slate-200 block">GitHub Profile</span>
                  <span className="text-[11px] font-mono text-slate-400">github.com/tahah02</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#38bdf8] transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-[#12161f] border border-[#1e2532] hover:border-[#38bdf8]/40 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-slate-300 group-hover:fill-[#38bdf8] transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div>
                  <span className="text-xs font-mono font-semibold text-slate-200 block">LinkedIn Profile</span>
                  <span className="text-[11px] font-mono text-slate-400">Muhammad Taha Hussain</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#38bdf8] transition-colors" />
            </a>

          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#12161f] border border-[#1e2532]">
            <h3 className="text-base font-bold text-[#f3f4f6] font-mono mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out this message to launch your local email client directly pre-filled with your inquiry.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-slate-400 text-[11px] mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1117] border border-[#232a36] text-white focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className="block text-slate-400 text-[11px] mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1117] border border-[#232a36] text-white focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message-input" className="block text-slate-400 text-[11px] mb-1.5 uppercase">
                  Message / Project Scope
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your inquiry, role requirements, or autonomous agent initiatives..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1117] border border-[#232a36] text-white focus:outline-none focus:border-[#38bdf8]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#0b0d11] font-semibold text-xs transition-colors"
              >
                Send Message via Email
              </button>

              {submitted && (
                <p className="text-[11px] text-[#38bdf8] text-center pt-2">
                  Mail composer initiated. You can also email directly to {emailAddress}.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
