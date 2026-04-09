export const projects = [
  {
    id: "campus-ai",
    title: "CampusAI Hub – AI-Powered Smart Campus System",
    shortDescription: "AI-powered campus platform with hybrid chatbot and role-based system.",
    problem: "Managing institutional data and queries efficiently without hallucinations and with role-based access control.",
    approach: "Hybrid AI system combining structured database queries for facts with LLM fallback for conversational queries.",
    features: [
      "Role-based JWT authentication",
      "Admin dashboard with analytics",
      "AI chatbot with intent detection",
      "Student management system",
      "Dockerized full-stack deployment"
    ],
    techStack: ["React", "FastAPI", "MySQL", "Groq LLM", "Docker", "Nginx"],
    impact: "Reduced hallucinations and improved institutional responses accuracy. Ready for production-grade use.",
    github: "https://github.com/srilakshmi-734/Campus-AI-Hub-Frontend",
    isAI: true
  },
  {
    id: "esg-dashboard",
    title: "ESG & Sustainability Dashboard",
    shortDescription: "Interactive dashboard analyzing environmental, social, and governance performance.",
    problem: "Understanding complex corporate sustainability data and highlighting key ESG metrics.",
    approach: "Data cleaning and DAX modeling combined with interactive visualization techniques.",
    features: [
      "KPI cards for immediate overview",
      "Comprehensive filters and drilldowns",
      "Year-over-year ESG performance comparisons"
    ],
    techStack: ["Power BI", "DAX"],
    impact: "Improved data storytelling and sustainability insights for better decision-making.",
    github: "https://github.com/srilakshmi-734"
  },
  {
    id: "aqi-prediction",
    title: "AQI Prediction Using ML",
    shortDescription: "Machine learning-based AQI prediction using ensemble models for higher accuracy.",
    problem: "Unreliable air quality forecasting using simple models in complex environmental conditions.",
    approach: "Compared XGBoost, Random Forest, and custom ensemble models to find the most robust solution.",
    features: [
      "Comparative analysis of diverse ML models",
      "Ensemble model logic for consistency",
      "Feature engineering for environmental variables"
    ],
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    impact: "Achieved R² = 0.9937 with Random Forest; Ensemble models significantly improved forecasting consistency.",
    github: "https://github.com/srilakshmi-734/AQI-Prediction-Using-ML----March-2024"
  },
  {
    id: "interior-ai",
    title: "Interior AI",
    shortDescription: "AI platform for interior design recommendations using computer vision and layout analysis.",
    problem: "Difficulty in visualizing and planning interior layouts based on specific user requirements and budget.",
    approach: "Integrated computer vision for layout detection with generative AI for design recommendations.",
    features: [
      "Computer vision for automated layout analysis",
      "NLP for understanding user requirements",
      "Cost & timeline prediction engine",
      "Generative AI for design inspiration"
    ],
    techStack: ["Python", "OpenCV", "TensorFlow", "Generative AI"],
    impact: "Streamlines the interior design phase with automated layout and design generation.",
    github: "https://github.com/Sujilin09/Interior-AI"
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    shortDescription: "Fraud detection system handling imbalanced data challenges in financial transactions.",
    problem: "Standard ML models failing to detect rare fraud events due to extreme class imbalance.",
    approach: "Explored advanced imbalance handling techniques and compared precision/recall metrics.",
    features: [
      "Imbalanced data strategy implementation",
      "Detailed precision-recall evaluation",
      "Transaction anomaly detection"
    ],
    techStack: ["Python", "Scikit-learn", "SMOTE", "Matplotlib"],
    impact: "Highlighted critical need for recall-focused metrics in financial security systems.",
    github: "https://github.com/srilakshmi-734/Credit-Card-Fraud-Detection---2024-April"
  },
  {
    id: "legalogic",
    title: "LEGALOGIC – Financial Compliance Assistant",
    shortDescription: "AI-based compliance assistant for SMEs to simplify legal documentation and tasks.",
    problem: "SMEs struggle with complex legal compliance and task management without dedicated departments.",
    approach: "Applied NLP-based document processing and summarization to automate compliance tasks.",
    features: [
      "NLP-based legal document processing",
      "Automated task extraction and summarization",
      "Interactive dashboard with compliance alerts"
    ],
    techStack: ["Python", "NLP", "React", "FastAPI"],
    impact: "Significantly simplifies legal compliance for small and medium-sized enterprises.",
    github: "https://github.com/DishaDebAmin/4MDS_Project"
  }
];
