
export const proyectos = [
  {
    titulo: "Transcripción de Voz a Texto con IA (STT)",
    descripcion:
      "Sistema de transcripción automatizada de reuniones de larga duración (+12h) con privacidad garantizada.",
    details: [
      "Desarrollo de Demo para ayuntamiento enfocada en la privacidad.",
      "Capacidad para transcribir reuniones de más de 12 horas de duración.",
      "Implementación de sistema STT (Speech to Text) para procesar audio y video.",
      "Conversión automática de archivos multimedia a ficheros de texto.",
    ],
    imagen: "/projects/pasar-audio-a-word.jpg",
    tecnologias: ["Python", "OpenAI API", "STT", "Speech to Text"],
    demo: "#",
    categoria: "ia",
  },
  {
    titulo: "Plataforma Conversacional estilo ChatGPT con Agentes IA",
    descripcion:
      "Arquitectura y planificación end-to-end de plataforma conversacional.",
    details: [
      "Arquitectura y planificación end-to-end de plataforma conversacional.",
      "Diseño de agentes IA para tareas específicas.",
      "Desarrollo de backend y frontend.",
      "Integración de LLMs locales y servicios cloud.",
    ],
    imagen: "/projects/rag-image.jpg",
    tecnologias: ["LangChain", "FastAPI", "Chainlit", "LLMs", "Microservicios", "Docker", "OpenAI API"],
    demo: "#",
    categoria: "ia",
  },
  {
    titulo: "Infraestructura Despliegue LLMs en Local",
    descripcion:
      "Diseño teórico de infraestructura para LLMs locales con vLLM y NVIDIA H200 (HGX).",
    details: [
      "Diseño teórico basándose en experiencia, estudios académicos, documentación de HuggingFace y documentación del fabricante.",
      "Definición de Agentes y herramientas a implementar.",
      "Selección de LLMs según tareas y objetivos marcados.",
      "Cálculo de infraestructura necesaria para despliegue local y concurrencia de sesiones.",
      "Definición de servidor basado en GPUs NVIDIA H200 en placa base HGX.",
      "Configuración y pruebas para despliegue con vLLM.",
    ],
    imagen: "/projects/servidor-ia-local.png",
    tecnologias: ["NVIDIA H200", "vLLM", "Linux", "HuggingFace"],
    demo: "#",
    categoria: "mlops",
  },
  {
    titulo: "Auditoría de Seguridad Chatbot IA",
    descripcion:
      "Auditoría de seguridad para un chatbot de atención al cliente, detectando vulnerabilidades críticas antes de su automatización total.",
    details: [
      "Auditoría de seguridad a un chatbot de IA de una empresa conocida.",
      "Verificación de seguridad para habilitar acciones totalmente automáticas.",
      "Detección de vulnerabilidades explotables por usuarios sin permisos.",
      "Realización de pruebas de seguridad (Pentesting) al asistente.",
    ],
    imagen: "/projects/auditoria_seguridad.jpg",
    tecnologias: ["AI Security", "Pentesting", "LLM Security", "Cybersecurity"],
    demo: "#",
    categoria: "ia",
  },
  {
    titulo: "Clasificación reentrenando (Fine-Tuning) Transformers y SLMs",
    descripcion:
      "Competición CodaLab basada en la clasificación de perfiles de Twitter usando Transformers.",
    details: [
      "Competición CodaLab basada en la clasificación de perfiles de Twitter.",
      "Uso de Transformers y técnicas de NLP.",
      "Desplegando modelos en Local",
      "Reentrenamiento (Fine-Tuning) de modelos SLMs y Transformers.",
      "Diseño de modelos deep learning para la mejora de clasificación usando técnicas de Ensemblers",
      "Consiguiendo la 4º mejor puntuación en la competición.",
    ],
    imagen: "/projects/NLP_competition.jpg",
    tecnologias: ["Python", "Transformers", "NLP", "HuggingFace", "Deep Learning", "Keras", "IA en Local"],
    demo: "https://codalab.lisn.upsaclay.fr/",
    categoria: "ia",
  },
  {
    titulo: "Plataforma Web Hidráulica",
    descripcion:
      "Desarrollo de aplicación web empresarial para cálculos hidráulicos.",
    details: [
      "Desarrollo software integrando Inteligencia Computacional existente.",
      "Plataforma web empresarial cómoda e intuitiva para cálculos y mediciones.",
      "Diseño completo de la aplicación web y base de datos.",
      "Gestión de usuarios y seguridad avanzada para protección de datos.",
      "Integración completa con Google Maps.",
    ],
    imagen: "/projects/web_turbinas.png",
    tecnologias: ["JavaScript", "HTML5", "Java", "SQL", "Google Maps"],
    demo: "#",
    categoria: "software",
  },
  {
    titulo: "Benchmarking de Modelos NLP para Kaggle",
    descripcion:
      "Comparativa de eficiencia y rendimiento de modelos pequeños de NLP para competiciones de clasificación.",
    details: [
      "Comparación de diferentes modelos pequeños de NLP (SLMs).",
      "Análisis de métricas comparativas para eficiencia en entrenamiento.",
      "Evaluación de estrategias para competiciones de clasificación en Kaggle.",
      "Optimización de pipelines de procesamiento de texto.",
    ],
    imagen: "/projects/comparación_slms.png",
    tecnologias: ["Python", "Kaggle", "NLP", "Pandas", "HuggingFace"],
    demo: "#",
    categoria: "ds",
  },
  {
    titulo: "Simulador de Contagios COVID-19",
    descripcion:
      "Simulador basado en agentes para predecir la evolución de contagios en escenarios de pandemia.",
    details: [
      "Desarrollo de simulador con NetLogo basado en estudios epidemiológicos.",
      "Modelado de comportamiento en supermercados como foco principal de contagio.",
      "Configuración de variables: uso de mascarillas, probabilidades de contagio, distanciamiento.",
      "Resultados validados con datos reales, replicando el comportamiento por olas.",
    ],
    imagen: "/projects/simulador_covid.png",
    tecnologias: ["NetLogo", "Agent-Based Modeling", "Simulation", "Data Analysis"],
    demo: "#",
    categoria: "ds",
  },
];
