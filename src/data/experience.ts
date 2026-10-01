import type { ExperienceRecord } from '../types/portfolio';

export const aboutData = {
  name: 'Muhammad Taha Hussain',
  brandName: 'MrJupyter',
  role: 'AI/ML Engineer',
  location: 'Karachi, Pakistan',
  education: {
    degree: 'BS Computer Science',
    institution: 'Nazeer Hussain University',
    year: '2025'
  },
  contact: {
    email: 'muhammadtahahussain020@gmail.com',
    github: 'https://github.com/tahah02',
    linkedin: 'https://www.linkedin.com/in/muhammad-taha-hussain-6b354a27a'
  },
  narrative: `I am an AI/ML Engineer specializing in production-grade multi-agent architectures, enterprise generative AI, and resilient backend systems. My core engineering focus centers on orchestrating autonomous workflows that persist state reliably, recover seamlessly across network interruptions, and integrate with enterprise infrastructure without data loss. Through my work in complex banking workflows, fraud detection, and intelligent document processing, I build AI systems designed to operate deterministically and securely in the real world.`
};

export const experienceTimeline: ExperienceRecord[] = [
  {
    period: '2024 — Present',
    role: 'AI/ML Engineer',
    type: 'Multi-Agent Systems & Autonomous Onboarding',
    focus: 'Private Wealth Banking & Sovereign FinTech',
    bullets: [
      'Designed and deployed supervisor-worker agent architectures coordinating 10+ specialized domain agents with LangGraph.',
      'Engineered zero-data-loss session persistence utilizing Redis checkpointing to recover states across interruptions.',
      'Implemented C# / .NET 8 gateway integrations and dynamic schema hydration from SQL Server configurations.',
      'Enforced enterprise security guardrails, automated PII masking, and sovereign local LLM deployments with Ollama.'
    ]
  },
  {
    period: '2023 — 2024',
    role: 'Conversational AI & Systems Engineer',
    type: 'Vector Search & Microservices Architecture',
    focus: 'Retail Banking & Semantic Policy Retrieval',
    bullets: [
      'Constructed scalable multi-tenant conversational AI backends utilizing FastAPI, LangChain, and SentenceTransformers.',
      'Built Milvus vector retrieval pipelines for chunking, embedding, and querying complex banking policy documentation.',
      'Implemented enterprise security middleware including PyJWT token authentication and SlowAPI rate limiting, validating performance with Apache JMeter load tests.'
    ]
  },
  {
    period: '2022 — 2023',
    role: 'Machine Learning & Vision Engineer',
    type: 'Anomaly Detection & Intelligent Document Processing',
    focus: 'Risk Analytics & Computer Vision',
    bullets: [
      'Engineered hybrid anomaly detection models combining Deep Autoencoders and Isolation Forests for anomalous transaction analysis.',
      'Built multi-engine OCR pipelines (PaddleOCR, EasyOCR, PyTesseract, OpenCV) to extract structured JSON data from scanned financial documents.',
      'Developed automated MLOps retraining pipelines with version registries, database model storage, and scheduled execution.'
    ]
  }
];
