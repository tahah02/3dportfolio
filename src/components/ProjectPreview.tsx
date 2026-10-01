import React from "react";
import "./styles/ProjectPreview.css";

interface ProjectPreviewProps {
  projectId: string;
  title: string;
  category: string;
  onClick: () => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  projectId,
  title,
  category,
  onClick,
}) => {
  const renderVisual = () => {
    switch (projectId) {
      case "dobai":
        return (
          <div className="preview-canvas dobai-preview">
            <div className="preview-top-badge">
              <span className="live-dot green"></span> 10+ AGENTS SUPERVISOR WORKER
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              <defs>
                <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting lines */}
              <line x1="200" y1="120" x2="70" y2="50" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="200" y1="120" x2="200" y2="35" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="200" y1="120" x2="330" y2="50" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="200" y1="120" x2="80" y2="190" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="200" y1="120" x2="200" y2="205" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="200" y1="120" x2="320" y2="190" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />

              {/* Center Supervisor Node */}
              <circle cx="200" cy="120" r="32" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" filter="url(#glow)" />
              <text x="200" y="117" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="sans-serif">LANGGRAPH</text>
              <text x="200" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">SUPERVISOR</text>

              {/* Worker Nodes */}
              <g className="worker-node">
                <circle cx="70" cy="50" r="22" fill="#090e17" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="70" y="53" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">KYC</text>
              </g>

              <g className="worker-node">
                <circle cx="200" cy="35" r="22" fill="#090e17" stroke="#22d3ee" strokeWidth="1.5" />
                <text x="200" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">BIOMETRICS</text>
              </g>

              <g className="worker-node">
                <circle cx="330" cy="50" r="22" fill="#090e17" stroke="#818cf8" strokeWidth="1.5" />
                <text x="330" y="53" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">WEALTH</text>
              </g>

              <g className="worker-node">
                <circle cx="80" cy="190" r="22" fill="#090e17" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="80" y="193" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">REDIS</text>
              </g>

              <g className="worker-node">
                <circle cx="200" cy="205" r="22" fill="#090e17" stroke="#34d399" strokeWidth="1.5" />
                <text x="200" y="208" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="600">MILVUS</text>
              </g>

              <g className="worker-node">
                <circle cx="320" cy="190" r="22" fill="#090e17" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="320" y="193" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600">REVIEW</text>
              </g>
            </svg>
            <div className="preview-footer-label">Screen 1 → 29 Resumption & Session Hydration</div>
          </div>
        );

      case "conversational-banking":
        return (
          <div className="preview-canvas rag-preview">
            <div className="preview-top-badge">
              <span className="live-dot cyan"></span> VECTOR POLICY RAG · SUB-SECOND
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              {/* Document to Milvus pipeline */}
              <rect x="30" y="80" width="70" height="85" rx="8" fill="#0b1329" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="65" y="115" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="600">BANKING</text>
              <text x="65" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9">POLICIES</text>
              <line x1="45" y1="145" x2="85" y2="145" stroke="#475569" strokeWidth="2" />

              <path d="M 105 120 L 150 120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="155" y="70" width="90" height="105" rx="10" fill="#0a192f" stroke="#22d3ee" strokeWidth="2" />
              <text x="200" y="105" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="700">MILVUS</text>
              <text x="200" y="122" textAnchor="middle" fill="#94a3b8" fontSize="9">VECTOR DB</text>
              <text x="200" y="140" textAnchor="middle" fill="#64748b" fontSize="8">all-MiniLM-L6</text>
              <text x="200" y="155" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="600">384-DIM</text>

              <path d="M 250 120 L 295 120" stroke="#22d3ee" strokeWidth="2" />

              <rect x="300" y="80" width="75" height="85" rx="8" fill="#18202f" stroke="#a855f7" strokeWidth="1.5" />
              <text x="337" y="115" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="600">AGENT</text>
              <text x="337" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9">SYNTHESIS</text>
              <text x="337" y="148" textAnchor="middle" fill="#34d399" fontSize="8">PyJWT + RateLimit</text>
            </svg>
            <div className="preview-footer-label">Multi-Tenant Banking Conversational Service</div>
          </div>
        );

      case "fds":
        return (
          <div className="preview-canvas fds-preview">
            <div className="preview-top-badge">
              <span className="live-dot orange"></span> AUTOENCODER + ISOLATION FOREST
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              {/* Bottleneck autoencoder architecture */}
              <polygon points="40,50 90,85 90,155 40,190" fill="#171923" stroke="#fb923c" strokeWidth="1.5" />
              <text x="65" y="125" textAnchor="middle" fill="#fed7aa" fontSize="9" fontWeight="600">ENCODER</text>

              <rect x="110" y="95" width="40" height="50" rx="4" fill="#2d150b" stroke="#f97316" strokeWidth="2" />
              <text x="130" y="122" textAnchor="middle" fill="#fdba74" fontSize="8" fontWeight="700">LATENT</text>

              <polygon points="170,85 220,50 220,190 170,155" fill="#171923" stroke="#fb923c" strokeWidth="1.5" />
              <text x="195" y="125" textAnchor="middle" fill="#fed7aa" fontSize="9" fontWeight="600">DECODER</text>

              <path d="M 230 120 L 265 120" stroke="#fb923c" strokeWidth="2" />

              <rect x="270" y="65" width="105" height="110" rx="8" fill="#111827" stroke="#ef4444" strokeWidth="1.5" />
              <text x="322" y="95" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="700">RECONSTRUCTION</text>
              <text x="322" y="112" textAnchor="middle" fill="#fca5a5" fontSize="9">ERROR THRESHOLD</text>
              <line x1="285" y1="130" x2="360" y2="130" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="322" y="150" textAnchor="middle" fill="#34d399" fontSize="9">Velocity & Z-Score</text>
            </svg>
            <div className="preview-footer-label">Real-Time Risk Scoring & MLOps Pipeline</div>
          </div>
        );

      case "ocr-poc":
        return (
          <div className="preview-canvas ocr-preview">
            <div className="preview-top-badge">
              <span className="live-dot teal"></span> MULTI-ENGINE OCR (PADDLE + EASYOCR)
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              {/* Document scan preview with bounding boxes */}
              <rect x="70" y="30" width="260" height="180" rx="8" fill="#0b1920" stroke="#14b8a6" strokeWidth="1.5" />
              
              {/* Header block */}
              <rect x="95" y="48" width="120" height="18" rx="3" fill="rgba(20, 184, 166, 0.2)" stroke="#2dd4bf" strokeWidth="1" />
              <text x="105" y="61" fill="#2dd4bf" fontSize="9" fontWeight="600">SALARY CERTIFICATE</text>

              <rect x="250" y="48" width="60" height="18" rx="3" fill="rgba(34, 197, 94, 0.15)" stroke="#4ade80" strokeWidth="1" />
              <text x="257" y="61" fill="#4ade80" fontSize="8">VERIFIED 99.4%</text>

              {/* Extracted table cells */}
              <rect x="95" y="80" width="100" height="26" rx="4" fill="#061f24" stroke="#0d9488" strokeWidth="1" />
              <text x="103" y="93" fill="#94a3b8" fontSize="8">Gross Earnings</text>
              <text x="103" y="103" fill="#ffffff" fontSize="9" fontWeight="700">AED 45,000</text>

              <rect x="210" y="80" width="100" height="26" rx="4" fill="#061f24" stroke="#0d9488" strokeWidth="1" />
              <text x="218" y="93" fill="#94a3b8" fontSize="8">Net Remittance</text>
              <text x="218" y="103" fill="#38bdf8" fontSize="9" fontWeight="700">AED 41,800</text>

              <rect x="95" y="118" width="215" height="32" rx="4" fill="#061f24" stroke="#0d9488" strokeWidth="1" />
              <text x="103" y="132" fill="#94a3b8" fontSize="8">IBAN / Account Number</text>
              <text x="103" y="145" fill="#f59e0b" fontSize="9" fontFamily="monospace">QA82••••••••••••0194</text>

              {/* JSON preview line */}
              <text x="200" y="185" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontFamily="monospace">&#123; "structured_json": true, "deskewed": true &#125;</text>
            </svg>
            <div className="preview-footer-label">Adaptive Deskewing & Table Extraction Pipeline</div>
          </div>
        );

      case "smartrules":
        return (
          <div className="preview-canvas rules-preview">
            <div className="preview-top-badge">
              <span className="live-dot purple"></span> .NET 8 / C# RULE EVALUATION ENGINE
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              <rect x="50" y="65" width="80" height="110" rx="8" fill="#181126" stroke="#c084fc" strokeWidth="1.5" />
              <text x="90" y="105" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="700">CORE</text>
              <text x="90" y="120" textAnchor="middle" fill="#e9d5ff" fontSize="9">BANKING</text>
              <text x="90" y="140" textAnchor="middle" fill="#94a3b8" fontSize="8">PAYLOAD</text>

              <path d="M 135 120 L 175 120" stroke="#c084fc" strokeWidth="2" />

              <rect x="180" y="50" width="130" height="140" rx="10" fill="#100b1d" stroke="#a855f7" strokeWidth="2" />
              <text x="245" y="80" textAnchor="middle" fill="#f3e8ff" fontSize="11" fontWeight="700">RULE MATRIX</text>
              <line x1="195" y1="92" x2="295" y2="92" stroke="#4c1d95" strokeWidth="1.5" />
              
              <rect x="195" y="102" width="100" height="20" rx="3" fill="#2e1065" />
              <text x="205" y="116" fill="#38bdf8" fontSize="8">✓ Credit Score &gt; 650</text>

              <rect x="195" y="128" width="100" height="20" rx="3" fill="#2e1065" />
              <text x="205" y="142" fill="#34d399" fontSize="8">✓ FATCA Validation</text>

              <rect x="195" y="154" width="100" height="20" rx="3" fill="#2e1065" />
              <text x="205" y="168" fill="#f43f5e" fontSize="8">✓ Velocity Limits</text>

              <path d="M 315 120 L 350 120" stroke="#c084fc" strokeWidth="2" />
              <circle cx="365" cy="120" r="14" fill="#065f46" stroke="#34d399" strokeWidth="2" />
              <text x="365" y="124" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">✓</text>
            </svg>
            <div className="preview-footer-label">Hierarchical Rules & Runtime Payload Scoring</div>
          </div>
        );

      case "nlp-spam":
        return (
          <div className="preview-canvas nlp-preview">
            <div className="preview-top-badge">
              <span className="live-dot yellow"></span> NLTK · TF-IDF · SUPERVISED CLASSIFIER
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              <rect x="40" y="70" width="85" height="100" rx="8" fill="#1f180d" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="82" y="105" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="600">RAW TEXT</text>
              <text x="82" y="122" textAnchor="middle" fill="#94a3b8" fontSize="8">Tokenize / Lemma</text>
              <text x="82" y="137" textAnchor="middle" fill="#94a3b8" fontSize="8">RegEx Cleaning</text>

              <path d="M 130 120 L 165 120" stroke="#f59e0b" strokeWidth="2" />

              <rect x="170" y="60" width="110" height="120" rx="8" fill="#141109" stroke="#fbbf24" strokeWidth="2" />
              <text x="225" y="90" textAnchor="middle" fill="#fef3c7" fontSize="10" fontWeight="700">TF-IDF MATRIX</text>
              <line x1="185" y1="102" x2="265" y2="102" stroke="#78350f" strokeWidth="1.5" />
              <text x="225" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8">Sparse Vectors</text>
              <text x="225" y="138" textAnchor="middle" fill="#f59e0b" fontSize="8">N-Gram Extraction</text>
              <text x="225" y="156" textAnchor="middle" fill="#38bdf8" fontSize="8">CountVectorizer</text>

              <path d="M 285 120 L 320 120" stroke="#f59e0b" strokeWidth="2" />

              <rect x="325" y="75" width="50" height="40" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
              <text x="350" y="99" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontWeight="700">HAM</text>

              <rect x="325" y="125" width="50" height="40" rx="6" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="350" y="149" textAnchor="middle" fill="#fecaca" fontSize="9" fontWeight="700">SPAM</text>
            </svg>
            <div className="preview-footer-label">Naive Bayes & Random Forest Decisioning</div>
          </div>
        );

      case "jarvis":
        return (
          <div className="preview-canvas jarvis-preview">
            <div className="preview-top-badge">
              <span className="live-dot blue"></span> VOICE AI & OS AUTOMATION (PYAUTOGUI)
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              {/* Audio waveform */}
              <path
                d="M 40 120 Q 70 60 100 120 T 160 120 T 220 120 T 280 120 T 360 120"
                fill="none"
                stroke="rgba(56, 189, 248, 0.4)"
                strokeWidth="2"
              />
              <path
                d="M 60 120 Q 90 40 120 120 T 180 120 T 240 120 T 300 120 T 340 120"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                filter="url(#glow)"
              />

              <circle cx="200" cy="120" r="30" fill="#0c1929" stroke="#38bdf8" strokeWidth="2" />
              <text x="200" y="117" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">JARVIS</text>
              <text x="200" y="130" textAnchor="middle" fill="#94a3b8" fontSize="8">ENGINE</text>

              <rect x="60" y="165" width="120" height="28" rx="6" fill="#091420" stroke="#0284c7" strokeWidth="1" />
              <text x="120" y="182" textAnchor="middle" fill="#7dd3fc" fontSize="9">🎤 SpeechRecognition</text>

              <rect x="220" y="165" width="120" height="28" rx="6" fill="#091420" stroke="#0284c7" strokeWidth="1" />
              <text x="280" y="182" textAnchor="middle" fill="#7dd3fc" fontSize="9">🔊 pyttsx3 Offline TTS</text>
            </svg>
            <div className="preview-footer-label">Voice-Guided Operations & Autonomous Computer Control</div>
          </div>
        );

      case "litserve":
        return (
          <div className="preview-canvas litserve-preview">
            <div className="preview-top-badge">
              <span className="live-dot purple"></span> LITSERVE · BATCHED INFERENCE MICROSERVICE
            </div>
            <svg viewBox="0 0 400 240" className="preview-svg">
              <rect x="40" y="70" width="75" height="100" rx="8" fill="#140f26" stroke="#c084fc" strokeWidth="1.5" />
              <text x="77" y="105" textAnchor="middle" fill="#d8b4fe" fontSize="9" fontWeight="700">CONCURRENT</text>
              <text x="77" y="120" textAnchor="middle" fill="#d8b4fe" fontSize="9">REQUESTS</text>
              <text x="77" y="140" textAnchor="middle" fill="#94a3b8" fontSize="8">Queue Batching</text>

              <path d="M 120 120 L 160 120" stroke="#c084fc" strokeWidth="2" />

              <rect x="165" y="55" width="125" height="130" rx="10" fill="#100b21" stroke="#e879f9" strokeWidth="2" />
              <text x="227" y="88" textAnchor="middle" fill="#f5d0fe" fontSize="11" fontWeight="700">LIGHTNING AI</text>
              <text x="227" y="105" textAnchor="middle" fill="#c084fc" fontSize="9">PyTorch Engine</text>
              <line x1="180" y1="118" x2="275" y2="118" stroke="#4c1d95" strokeWidth="1.5" />
              <text x="227" y="136" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="600">4.2ms LATENCY</text>
              <text x="227" y="154" textAnchor="middle" fill="#94a3b8" fontSize="8">Async Encode/Decode</text>

              <path d="M 295 120 L 335 120" stroke="#c084fc" strokeWidth="2" />

              <rect x="340" y="85" width="40" height="70" rx="6" fill="#052e16" stroke="#22c55e" strokeWidth="1.5" />
              <text x="360" y="124" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="700">JSON</text>
            </svg>
            <div className="preview-footer-label">High-Throughput Deep Learning Model Serving</div>
          </div>
        );

      default:
        return (
          <div className="preview-canvas default-preview">
            <div className="preview-top-badge">
              <span className="live-dot cyan"></span> ARCHITECTURE BLUEPRINT
            </div>
            <div className="preview-default-title">{title}</div>
            <div className="preview-default-cat">{category}</div>
          </div>
        );
    }
  };

  return (
    <div className="project-preview-wrapper" onClick={onClick} data-cursor="disable">
      {renderVisual()}
      <div className="preview-hover-overlay">
        <span className="preview-hover-text">Inspect System Architecture ↗</span>
      </div>
    </div>
  );
};

export default ProjectPreview;
