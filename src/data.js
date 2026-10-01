export const projects = [
  {
    id: "dobai",
    number: "01",
    title: "DOBAI",
    subtitle: "Autonomous Digital Onboarding Multi-Agent System",
    domain: "Private Wealth Banking & FinTech",
    category: "Autonomous Multi-Agent Onboarding",
    tools: "Python (FastAPI), LangGraph, C# (.NET 8), Ollama, Milvus, Redis, SQL Server, Docker Compose",
    description: "An end-to-end autonomous digital onboarding platform for private banking clients managing Screen 1 to 29 (KYC, biometric verification, FATCA, source of wealth, account selection).",
    stack: [
      "Python (FastAPI)",
      "LangGraph",
      "C# (.NET 8 Gateway)",
      "Ollama (qwen2.5:3b)",
      "Milvus Standalone",
      "Redis",
      "SQL Server",
      "Docker Compose"
    ],
    highlights: [
      "Supervisor-Worker Architecture: 10+ specialized domain agents (Onboarding, Document/OCR, Address, Wealth, SOW, Review).",
      "Zero Data Loss Resumption: Redis-backed persistent session store hydrating exact step state upon disconnects or refreshes.",
      "Dynamic Schema Sync: Real-time dynamic form field rendering from SQL Server Master.OnboardingScreenFields.",
      "Banking Security: Strict PII masking (pii_masker.py), token stores, and production enterprise guardrails."
    ],
    tags: ["LANGGRAPH", "SUPERVISOR-WORKER", "REDIS HYDRATION", "MILVUS", "PII MASKING"],
    featured: true
  },
  {
    id: "conversational-banking",
    number: "02",
    title: "Conversational Banking AI Engine",
    subtitle: "Layered Enterprise Conversational Engine",
    domain: "Retail Banking & Conversational AI",
    category: "Retail Banking & Policy RAG",
    tools: "FastAPI, LangGraph, LangChain, SentenceTransformers, Milvus, Redis, pdfplumber, JMeter",
    description: "Scalable, multi-tenant conversational AI backend for retail banking customers handling product inquiries, compliance policies, and banking services via natural language.",
    stack: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "SentenceTransformers (all-MiniLM-L6-v2)",
      "Milvus Vector DB",
      "Redis",
      "pdfplumber",
      "Apache JMeter",
      "PyJWT",
      "SlowAPI"
    ],
    highlights: [
      "Layered enterprise microservice architecture cleanly decoupling Agents, Handlers, Middleware, and Services.",
      "Vector Policy RAG: Banking policy PDFs chunked and embedded for sub-second semantic similarity retrieval.",
      "Enterprise Security & Performance: PyJWT authentication, SlowAPI rate limiting, and JMeter high-concurrency load testing."
    ],
    tags: ["VECTOR RAG", "LANGGRAPH", "MILVUS", "FASTAPI", "JMETER"],
    featured: true
  },
  {
    id: "fds",
    number: "03",
    title: "FDS",
    subtitle: "Anomalous Transaction Detector & Fraud Detection System",
    domain: "Financial Fraud Detection & Risk Analytics",
    category: "Anomalous Transaction Detector",
    tools: "Python, TensorFlow/Keras, Scikit-learn, Streamlit, Pandas, NumPy, SQLAlchemy, PyMSSQL",
    description: "AI-driven fraud detection platform identifying abnormal patterns, suspicious money flows, and credit risk across real-time banking transactions.",
    stack: [
      "Python",
      "TensorFlow / Keras",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "NumPy",
      "SQLAlchemy",
      "PyMSSQL"
    ],
    highlights: [
      "Hybrid AI Decisioning: Deep Autoencoders (Reconstruction Error) ensemble with Unsupervised Isolation Forest for rare fraud anomalies.",
      "Velocity & Feature Engineering: Real-time sliding-window frequency, transaction velocity, and z-score deviation metrics.",
      "End-to-End MLOps: Automated retraining pipeline (retraining_pipeline.py), model registry, DB model storage with rollback, and background scheduler."
    ],
    tags: ["AUTOENCODERS", "ISOLATION FOREST", "MLOPS PIPELINES", "TENSORFLOW"],
    featured: true
  },
  {
    id: "ocr-poc",
    number: "04",
    title: "OCR-POC",
    subtitle: "Automated Payslips & Financial Document Extractor",
    domain: "Intelligent Document Processing (IDP) & Computer Vision",
    category: "Financial Document Extractor",
    tools: "PaddleOCR, EasyOCR, PyTesseract, OpenCV, PyMuPDF, pdfplumber, FastAPI, Docker",
    description: "Vision extraction system converting complex, unstructured, and scanned documents (salary slips, bank statements, identification cards) into structured tabular data.",
    stack: [
      "PaddleOCR",
      "EasyOCR",
      "PyTesseract",
      "OpenCV (cv2)",
      "PyMuPDF (fitz)",
      "pdfplumber",
      "FastAPI",
      "Docker"
    ],
    highlights: [
      "Multi-Engine OCR Pipeline: Dynamic routing between PaddleOCR and EasyOCR based on scan layout and degradation.",
      "Advanced CV Preprocessing: Grayscaling, adaptive thresholding, deskewing, and contour detection for noisy scans.",
      "Structured Extraction: Form field parsing and tabular extraction into clean, validated JSON schemas."
    ],
    tags: ["PADDLEOCR", "OPENCV", "IDP PIPELINE", "PYMUPDF"],
    featured: false
  },
  {
    id: "smartrules",
    number: "05",
    title: "SmartRules Engine",
    subtitle: "Enterprise Rule Evaluation Platform",
    domain: "Enterprise Business Rules & Compliance Management",
    category: "Enterprise Rule Evaluation Platform",
    tools: "C# (.NET 8), ASP.NET Core Web API, Entity Framework Core, SQL Server, Bitbucket Pipelines",
    description: "Dynamic business rule engine evaluating customer eligibility, credit scoring, and transactional validation rules in runtime across core banking channels.",
    stack: [
      "C# (.NET 8)",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "Bitbucket Pipelines"
    ],
    highlights: [
      "Dynamic rule formulation, hierarchical rule sets, and JSON-based payload validation.",
      "High-throughput multi-tenant banking integration with ultra-low latency response times."
    ],
    tags: [".NET 8", "ASP.NET CORE", "RULE ENGINE", "SQL SERVER"],
    featured: false
  },
  {
    id: "nlp-spam",
    number: "06",
    title: "NLP Spam & Classification",
    subtitle: "NLP Spam & Text Classification Engine",
    domain: "Natural Language Processing (NLP)",
    category: "Text Classification Engine",
    tools: "Python, NLTK, Scikit-learn, RegEx, Pandas",
    description: "High-accuracy text processing and classification engine designed to clean, tokenize, vectorize, and categorize unstructured textual messages.",
    stack: [
      "Python",
      "NLTK",
      "Scikit-learn",
      "RegEx",
      "Pandas"
    ],
    highlights: [
      "Comprehensive NLP preprocessing pipeline (Tokenization, Lemmatization, Stopwords removal, RegEx cleaning).",
      "Feature extraction using TF-IDF Vectorizer and CountVectorizer.",
      "Supervised machine learning classifiers (Naive Bayes, Random Forest) for robust categorization."
    ],
    tags: ["NLTK", "TF-IDF", "NAIVE BAYES", "RANDOM FOREST"],
    featured: false
  },
  {
    id: "jarvis",
    number: "07",
    title: "Jarvis",
    subtitle: "Autonomous Desktop Voice Assistant",
    domain: "Speech AI & OS Automation",
    category: "Autonomous Desktop Voice Assistant",
    tools: "Python, SpeechRecognition, pyttsx3, PyAutoGUI",
    description: "Voice-driven desktop assistant performing speech-to-text, offline TTS synthesis, automated OS commands, app launches, and desktop task automation.",
    stack: [
      "Python",
      "SpeechRecognition",
      "pyttsx3",
      "PyAutoGUI"
    ],
    highlights: [
      "Offline TTS synthesis and live microphone audio stream recognition.",
      "Automated desktop workflows, custom app launching, and voice-guided operations."
    ],
    tags: ["SPEECH RECOGNITION", "PYTTSX3", "PYAUTOGUI", "DESKTOP AUTOMATION"],
    featured: false
  },
  {
    id: "litserve",
    number: "08",
    title: "LitServe Microservice",
    subtitle: "High-Performance Model Serving Microservice",
    domain: "Model Inference & Serving Infrastructure",
    category: "High-Performance Model Serving",
    tools: "LitServe (Lightning AI), PyTorch, Python",
    description: "Proof-of-concept inference service engineered to serve deep learning models with high concurrency, batched requests, and ultra-low latency.",
    stack: [
      "LitServe (Lightning AI)",
      "PyTorch",
      "Python"
    ],
    highlights: [
      "Batched inference engine optimizing throughput on concurrent requests.",
      "Request decoding/encoding abstractions for seamless model serving and lightweight deployment."
    ],
    tags: ["LITSERVE", "LIGHTNING AI", "PYTORCH", "LOW LATENCY"],
    featured: false
  }
];

export const skillsCategories = [
  {
    id: "languages",
    number: "01",
    name: "Programming & Query Languages",
    summary: "Core programming languages and database query foundations",
    skills: [
      "Python (3.10 / 3.11 / 3.12)",
      "C# (.NET 8 / ASP.NET Core)",
      "SQL (T-SQL / Microsoft SQL Server)",
      "JavaScript (ES6+ / Vanilla JS)",
      "HTML5 & CSS3"
    ]
  },
  {
    id: "agentic-ai",
    number: "02",
    name: "Agentic AI & Multi-Agent Systems",
    summary: "Autonomous workflows, supervisor-worker topologies, and graph routing",
    skills: [
      "LangGraph (StateGraph, Conditional Routing, Cyclic Graphs, Nodes & Edges)",
      "LangChain (LCEL, Message Management, PromptTemplates, Runnables)",
      "Supervisor-Worker Architecture (Central Dispatcher & Specialized Worker Nodes)",
      "Multi-Agent Orchestration & Context Handoffs",
      "Persistent State & Memory Management (Cross-Session State Hydration)",
      "Resumption Flows & Dynamic State Recovery"
    ]
  },
  {
    id: "gen-ai",
    number: "03",
    name: "Generative AI & Large Language Models (LLMs)",
    summary: "Local quantized LLMs, Pydantic schemas, and enterprise guardrails",
    skills: [
      "Local Quantized Models (e.g., qwen2.5:3b in GGUF/Ollama)",
      "Prompt Engineering (System Prompts, Few-Shot, Guardrailed Instructions)",
      "Structured Outputs (Pydantic Schema Enforcement for Strict JSON)",
      "Function Calling & Autonomous Tool Execution",
      "Context Windowing & Multi-Turn History Management",
      "PII Masking (pii_masker.py) & AI Guardrails"
    ]
  },
  {
    id: "rag-vector",
    number: "04",
    name: "Vector Databases & RAG",
    summary: "High-speed semantic search, embeddings, and document retrieval",
    skills: [
      "Milvus Standalone (Collection Schemas, Dimensions, Indexing, Vector Search)",
      "PyMilvus & PyMilvus Model",
      "Vector Distance Metrics (Cosine Similarity, L2 / Euclidean)",
      "etcd & MinIO (Vector Store Backend Infrastructure)",
      "RAG Pipelines (Document Chunking, Embedding Generation, Similarity Retrieval)"
    ]
  },
  {
    id: "ml",
    number: "05",
    name: "Machine Learning (Supervised & Unsupervised)",
    summary: "Anomaly detection, classification algorithms, and feature velocity",
    skills: [
      "Isolation Forest (Unsupervised Anomaly Detection)",
      "Naive Bayes Classifier (Text Classification & Spam Detection)",
      "Random Forest Classifier",
      "Scikit-learn (Model Training, Pipelines, Train-Test Split)",
      "Feature Engineering & Velocity Calculation",
      "Feature Scaling & Normalization (StandardScaler, MinMaxScaler)",
      "Model Evaluation Metrics (Precision, Recall, F1-Score, Confusion Matrix, ROC-AUC)",
      "Model Persistence & Serialization (joblib, pickle)"
    ]
  },
  {
    id: "deep-learning",
    number: "06",
    name: "Deep Learning & Neural Networks",
    summary: "Autoencoders, loss optimization, and neural architecture design",
    skills: [
      "TensorFlow (2.15+)",
      "Keras",
      "Deep Autoencoders (Encoder-Decoder Bottleneck for Anomaly Detection)",
      "PyTorch",
      "Dense / Fully Connected Layers, Dropout, Loss Functions, Adam Optimizer",
      "EarlyStopping & Learning Rate Optimization"
    ]
  },
  {
    id: "nlp",
    number: "07",
    name: "Natural Language Processing (NLP)",
    summary: "Dense embedding models, text normalization, and semantic vectorization",
    skills: [
      "SentenceTransformers (Hugging Face Dense Embeddings, e.g., all-MiniLM-L6-v2)",
      "TF-IDF Vectorizer",
      "CountVectorizer (Bag of Words)",
      "Tokenization & Text Preprocessing",
      "Lemmatization & Stemming",
      "Stopwords Removal & Text Normalization",
      "Regular Expressions (RegEx Pattern Extraction)",
      "NLTK"
    ]
  },
  {
    id: "vision-ocr",
    number: "08",
    name: "Computer Vision, OCR & Document Processing",
    summary: "Intelligent document processing, contour detection, and multi-engine OCR",
    skills: [
      "PaddleOCR",
      "EasyOCR (PyTorch-based OCR Engine)",
      "PyTesseract (Tesseract OCR Engine)",
      "OpenCV (cv2 - Grayscaling, Thresholding, Contours, Noise Removal)",
      "PyMuPDF (fitz - PDF Document Parsing & Extraction)",
      "pdfplumber (Table & Form Extraction)",
      "Pillow (PIL Image Processing)"
    ]
  },
  {
    id: "speech",
    number: "09",
    name: "Speech & Voice AI",
    summary: "Speech recognition, local synthesis, and voice assistant loops",
    skills: [
      "SpeechRecognition (Audio / Voice Input to Text)",
      "pyttsx3 (Offline Text-to-Speech Synthesis)"
    ]
  },
  {
    id: "mlops",
    number: "10",
    name: "MLOps & Model Serving",
    summary: "Automated retraining, model registries, version rollback, and serving",
    skills: [
      "Automated Retraining Pipelines (retraining_pipeline.py)",
      "Model Versioning & Model Registry (model_versioning.py)",
      "Automated Pipeline Scheduling (scheduler.py)",
      "Database Model Storage & Version Rollback (migrate_models_to_db.py)",
      "Ollama Server (Local Containerized LLM Inference Engine)",
      "LitServe (Lightning AI - High-performance Model Serving)"
    ]
  },
  {
    id: "backend",
    number: "11",
    name: "Backend & API Engineering",
    summary: "Asynchronous APIs, ORM layers, rate limiting, and auth guardrails",
    skills: [
      "FastAPI (Asynchronous Web Framework)",
      "Uvicorn (ASGI Production Server)",
      "Pydantic (Data Validation & Serialization)",
      "ASP.NET Core Web API (.NET 8)",
      "Entity Framework Core (ORM)",
      "SlowAPI (Rate Limiting & Throttling)",
      "PyJWT (Token Generation & Verification)",
      "HTTPX & Requests (Asynchronous & Synchronous HTTP Clients)"
    ]
  },
  {
    id: "databases",
    number: "12",
    name: "Databases, Caching & Data Storage",
    summary: "Session caches, relational schemas, and persistent stores",
    skills: [
      "Redis (Session Store, Real-Time Caching, TTL Management)",
      "Microsoft SQL Server (MSSQL / Relational Database)",
      "SQLAlchemy (Python SQL Toolkit & ORM)",
      "PyMSSQL"
    ]
  },
  {
    id: "devops",
    number: "13",
    name: "DevOps, Containerization & Infrastructure",
    summary: "Multi-container microservices, bridge networking, and CI/CD automation",
    skills: [
      "Docker & Docker Compose (Multi-Container Microservices Architecture)",
      "Docker Volumes & Networking (Internal Bridge Networks, Aliases)",
      "Bitbucket Pipelines & CI/CD",
      "Git & GitHub"
    ]
  },
  {
    id: "testing",
    number: "14",
    name: "Testing, QA & Workflow Automation",
    summary: "High-concurrency load testing, integration test suites, and automation",
    skills: [
      "Apache JMeter (Load, Concurrency & Performance Stress Testing)",
      "Pytest & Pytest-Asyncio (Unit & Integration Testing)",
      "Postman (API Collections & Automated Testing)",
      "Streamlit (Internal Dashboards & Model UIs)",
      "n8n (Workflow & Automation Engine)"
    ]
  }
];

export const profile = {
  name: "Muhammad Taha Hussain",
  brand: "MrJupyter",
  email: "muhammadtahahussain020@gmail.com",
  github: "https://github.com/tahah02",
  linkedin: "https://www.linkedin.com/in/muhammad-taha-hussain-6b354a27a",
  location: "Karachi, Pakistan",
  education: "BS Computer Science — Nazeer Hussain University (2025)"
};
