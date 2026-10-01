import type { SkillGroup } from '../types/portfolio';

export const skillsData: SkillGroup[] = [
  {
    id: 'prog-languages',
    number: 1,
    name: 'Programming and Query Languages',
    skills: [
      'Python 3.10 / 3.11 / 3.12',
      'C# / .NET 8 / ASP.NET Core',
      'SQL / T-SQL / Microsoft SQL Server',
      'JavaScript ES6+ / Vanilla JS',
      'HTML5',
      'CSS3'
    ]
  },
  {
    id: 'agentic-ai',
    number: 2,
    name: 'Agentic AI and Multi-Agent Systems',
    skills: [
      'LangGraph StateGraph, conditional routing, cyclic graphs, nodes and edges',
      'LangChain LCEL, message management, PromptTemplates, and Runnables',
      'Supervisor-worker architecture',
      'Agent orchestration and context handoffs',
      'Persistent state, cross-session hydration, resumption, and state recovery'
    ]
  },
  {
    id: 'genai-llms',
    number: 3,
    name: 'Generative AI and LLMs',
    skills: [
      'Local quantized models including Qwen2.5:3B with GGUF / Ollama',
      'System prompts, few-shot prompting, guardrailed instructions',
      'Pydantic-enforced structured JSON',
      'Function calling and tool execution',
      'Context windows and multi-turn history',
      'PII masking and guardrails'
    ]
  },
  {
    id: 'vector-rag',
    number: 4,
    name: 'Vector Databases and RAG',
    skills: [
      'Milvus Standalone',
      'Collection schemas, dimensions, indexing, and vector search',
      'PyMilvus and PyMilvus Model',
      'Cosine and L2 / Euclidean distance',
      'etcd and MinIO',
      'Chunking, embeddings, and similarity retrieval'
    ]
  },
  {
    id: 'machine-learning',
    number: 5,
    name: 'Machine Learning',
    skills: [
      'Isolation Forest',
      'Naive Bayes',
      'Random Forest',
      'Scikit-learn training and pipelines',
      'Train-test split',
      'Feature engineering and velocity features',
      'StandardScaler and MinMaxScaler',
      'Precision, recall, F1, confusion matrix, and ROC-AUC',
      'joblib and pickle'
    ]
  },
  {
    id: 'deep-learning',
    number: 6,
    name: 'Deep Learning',
    skills: [
      'TensorFlow 2.15+',
      'Keras',
      'PyTorch',
      'Deep autoencoder encoder-decoder bottlenecks for anomaly detection',
      'Dense layers, dropout, loss functions, Adam, EarlyStopping, and learning-rate optimization'
    ]
  },
  {
    id: 'nlp',
    number: 7,
    name: 'Natural Language Processing (NLP)',
    skills: [
      'SentenceTransformers and Hugging Face dense embeddings, including all-MiniLM-L6-v2',
      'TF-IDF',
      'CountVectorizer / bag of words',
      'Tokenization',
      'Preprocessing',
      'Lemmatization',
      'Stemming',
      'Stopwords',
      'Text normalization',
      'RegEx',
      'NLTK'
    ]
  },
  {
    id: 'computer-vision-ocr',
    number: 8,
    name: 'Computer Vision, OCR, and Document Processing',
    skills: [
      'PaddleOCR',
      'EasyOCR',
      'PyTesseract',
      'OpenCV grayscaling, thresholding, contours, and noise cleanup',
      'PyMuPDF / fitz',
      'pdfplumber',
      'Pillow / PIL'
    ]
  },
  {
    id: 'speech-voice-ai',
    number: 9,
    name: 'Speech and Voice AI',
    skills: [
      'SpeechRecognition',
      'pyttsx3'
    ]
  },
  {
    id: 'mlops-serving',
    number: 10,
    name: 'MLOps and Model Serving',
    skills: [
      'Automated retraining',
      'Model versioning / registry',
      'Scheduled pipelines',
      'Database model storage / rollback',
      'Ollama',
      'LitServe'
    ]
  },
  {
    id: 'backend-api',
    number: 11,
    name: 'Backend and API Engineering',
    skills: [
      'FastAPI',
      'Uvicorn',
      'Pydantic',
      'ASP.NET Core Web API / .NET 8',
      'Entity Framework Core',
      'SlowAPI',
      'PyJWT',
      'HTTPX',
      'Requests'
    ]
  },
  {
    id: 'databases-caching',
    number: 12,
    name: 'Databases, Caching, and Storage',
    skills: [
      'Redis sessions, caching, and TTL',
      'SQL Server',
      'SQLAlchemy',
      'PyMSSQL'
    ]
  },
  {
    id: 'devops-infra',
    number: 13,
    name: 'DevOps and Infrastructure',
    skills: [
      'Docker',
      'Docker Compose',
      'Volumes',
      'Networking / bridge networks / aliases',
      'Bitbucket Pipelines / CI-CD',
      'Git',
      'GitHub'
    ]
  },
  {
    id: 'testing-qa',
    number: 14,
    name: 'Testing, QA, and Workflow Automation',
    skills: [
      'Apache JMeter',
      'Pytest',
      'Pytest-Asyncio',
      'Postman',
      'Streamlit',
      'n8n'
    ]
  }
];
