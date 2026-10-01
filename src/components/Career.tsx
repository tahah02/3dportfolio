import "./styles/Career.css";

const experiences = [
  {
    role: "Autonomous Multi-Agent Systems",
    domain: "Supervisor-Worker Architecture",
    tag: "AGENTIC AI",
    tagColor: "#38bdf8",
    description:
      "Architected DOBAI digital onboarding coordinating 10+ specialized domain agents with LangGraph, Redis persistent session recovery (0% data loss), and C#/.NET 8 core banking gateways.",
  },
  {
    role: "Conversational AI & Policy RAG",
    domain: "Multi-Tenant Banking Intelligence",
    tag: "ENTERPRISE RAG",
    tagColor: "#22d3ee",
    description:
      "Constructed scalable conversational AI backends, sub-second Milvus vector search with all-MiniLM-L6 embeddings, PyJWT authentication, and SlowAPI rate limiting.",
  },
  {
    role: "Financial Fraud & Anomaly Detection",
    domain: "Risk Analytics & Deep Learning",
    tag: "RISK ANALYTICS",
    tagColor: "#fb923c",
    description:
      "Engineered FDS hybrid decisioning combining Deep Autoencoder reconstruction errors with Isolation Forests, real-time transaction velocity, and automated MLOps retraining pipelines.",
  },
  {
    role: "Intelligent Document Processing (IDP)",
    domain: "Computer Vision & OCR Pipelines",
    tag: "COMPUTER VISION",
    tagColor: "#2dd4bf",
    description:
      "Architected OCR-POC multi-engine pipeline dynamic routing (PaddleOCR, EasyOCR, OpenCV deskewing) extracting complex scanned payslips, salary slips, and bank statements into structured JSON.",
  },
  {
    role: "NLP Spam & Text Classification",
    domain: "Natural Language Processing",
    tag: "NLP & ML",
    tagColor: "#f59e0b",
    description:
      "Built an end-to-end NLP preprocessing pipeline with custom tokenization, lemmatization, and TF-IDF feature vectorization powering Naive Bayes and Random Forest classifiers.",
  },
  {
    role: "Autonomous Desktop Voice Assistant",
    domain: "Speech AI & OS Automation",
    tag: "SPEECH AI",
    tagColor: "#60a5fa",
    description:
      "Developed Jarvis integrating live SpeechRecognition audio streams, pyttsx3 offline text-to-speech synthesis, automated desktop workflows, and PyAutoGUI OS actions.",
  },
  {
    role: "High-Performance Model Serving",
    domain: "Inference & Latency Optimization",
    tag: "MODEL SERVING",
    tagColor: "#e879f9",
    description:
      "Engineered LitServe (Lightning AI) microservice for batched deep learning model inference with ultra-low latency request encoding/decoding and PyTorch serving.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Engineering <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.domain}</h5>
                </div>
                <h3
                  className="career-tag"
                  style={{
                    color: exp.tagColor,
                    borderColor: `${exp.tagColor}40`,
                    backgroundColor: `${exp.tagColor}15`,
                    boxShadow: `0 0 16px ${exp.tagColor}20`,
                  }}
                >
                  {exp.tag}
                </h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
