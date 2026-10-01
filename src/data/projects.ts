import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'dobai',
    title: 'DOBAI — Autonomous Digital Onboarding Multi-Agent System',
    domain: 'Private wealth banking and fintech',
    category: 'agents',
    categoryLabel: 'AI Agents',
    isFeatured: true,
    description: 'An end-to-end autonomous digital onboarding platform that manages screens 1–29, including KYC, biometrics, FATCA, source-of-wealth information, and account selection.',
    technologies: [
      'Python',
      'FastAPI',
      'LangGraph',
      'C# / .NET 8 Core Banking Gateway',
      'Ollama / Qwen2.5:3B',
      'Milvus Standalone',
      'Redis',
      'SQL Server',
      'Docker Compose'
    ],
    highlights: [
      'Supervisor-worker architecture with 10+ specialized domain agents',
      'Redis-backed session persistence and state recovery after refresh or disconnect',
      'Dynamic form fields from SQL Server screen-field configuration',
      'PII masking, token stores, and security guardrails'
    ]
  },
  {
    id: 'conversational-banking-agent',
    title: 'Conversational Banking Agent',
    domain: 'Conversational AI for retail banking',
    category: 'agents',
    categoryLabel: 'AI Agents',
    isFeatured: true,
    description: 'A scalable, multi-tenant conversational AI backend for product inquiries, compliance policies, and banking services.',
    technologies: [
      'FastAPI',
      'LangGraph',
      'LangChain',
      'SentenceTransformers / all-MiniLM-L6-v2',
      'Milvus',
      'Redis',
      'pdfplumber',
      'Apache JMeter',
      'PyJWT',
      'SlowAPI'
    ],
    highlights: [
      'Layered microservice architecture',
      'Policy-document chunking, embeddings, and semantic retrieval',
      'JWT security, rate limiting, and load testing'
    ]
  },
  {
    id: 'fds',
    title: 'FDS — Anomalous Transaction Detector',
    domain: 'Fraud detection and risk analytics',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning & Document AI',
    isFeatured: true,
    description: 'Detects abnormal transaction behavior and suspicious patterns in banking and financial records.',
    technologies: [
      'Python',
      'TensorFlow / Keras',
      'Scikit-learn',
      'Streamlit',
      'Pandas',
      'NumPy',
      'SQLAlchemy',
      'PyMSSQL'
    ],
    highlights: [
      'Isolation Forest and deep autoencoder anomaly detection',
      'Transaction velocity, sliding-window frequency, and deviation features',
      'Automated retraining, model versioning, database model storage/rollback, and scheduling'
    ]
  },
  {
    id: 'ocr-poc',
    title: 'OCR-POC — Financial Document Extractor',
    domain: 'Document processing and computer vision',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning & Document AI',
    isFeatured: false,
    description: 'Extracts structured fields from scanned payslips, salary certificates, statements, and identification documents.',
    technologies: [
      'PaddleOCR',
      'EasyOCR',
      'PyTesseract',
      'OpenCV',
      'PyMuPDF / fitz',
      'pdfplumber',
      'FastAPI',
      'Docker'
    ],
    highlights: [
      'Multiple OCR engines dynamically selected based on document layout',
      'Image cleanup including grayscaling, adaptive thresholding, deskewing, and contour detection',
      'Structured JSON output for downstream banking workflows'
    ]
  },
  {
    id: 'smartrules',
    title: 'SmartRules Engine — Enterprise Rule Evaluation Platform',
    domain: 'Enterprise rule evaluation and compliance management',
    category: 'engineering',
    categoryLabel: 'Engineering',
    isFeatured: false,
    description: 'Evaluates eligibility, credit, and transaction rules at runtime with high throughput.',
    technologies: [
      'C# / .NET 8',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'Bitbucket Pipelines'
    ],
    highlights: [
      'Dynamic and hierarchical rule sets',
      'JSON payload validation',
      'Multi-tenant integration'
    ]
  },
  {
    id: 'nlp-classification',
    title: 'NLP Spam & Text Classification Engine',
    domain: 'Natural language processing',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning & Document AI',
    isFeatured: false,
    description: 'Cleans, tokenizes, and classifies text payloads for message categorization and spam detection.',
    technologies: [
      'Python',
      'NLTK',
      'Scikit-learn',
      'RegEx',
      'Pandas'
    ],
    highlights: [
      'Text pipeline: tokenization, lemmatization, stopword removal, and regex cleaning',
      'Feature extraction with TF-IDF and CountVectorizer',
      'Supervised classifiers: Naive Bayes and Random Forest'
    ]
  },
  {
    id: 'jarvis',
    title: 'Jarvis — Autonomous Desktop Voice Assistant',
    domain: 'Speech AI and OS automation',
    category: 'agents',
    categoryLabel: 'AI Agents',
    isFeatured: false,
    description: 'Voice-controlled desktop assistant for system actions, web queries, and task automation.',
    technologies: [
      'Python',
      'SpeechRecognition',
      'pyttsx3',
      'PyAutoGUI'
    ],
    highlights: [
      'Speech recognition and voice input processing',
      'Offline text-to-speech synthesis via pyttsx3',
      'Automated desktop actions, app launching, and voice-driven tasks'
    ]
  },
  {
    id: 'litserve',
    title: 'LitServe High-Performance Model Serving Microservice',
    domain: 'Model inference and serving infrastructure',
    category: 'engineering',
    categoryLabel: 'Engineering',
    isFeatured: false,
    description: 'High-concurrency, lightweight inference microservice for deep learning models.',
    technologies: [
      'LitServe',
      'PyTorch',
      'Python'
    ],
    highlights: [
      'Proof of concept exploring batched inference',
      'Request decoding and encoding abstraction',
      'Lightweight model serving pipeline'
    ]
  }
];
