"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/types/product";

export function useProducts() {
  const { language } = useLanguage();

  const products: Product[] = [
    // AI Innovation Products
    {
      icon: null,
      title: "AI Innovation",
      description: language === "es"
        ? "IPINNOVATECH permite a las empresas mejorar la eficiencia de procesos operativos, automatizando tareas y reduciendo costos, aplicando los diferentes modelos de Inteligencia Artificial, también podría crear nuevos productos y servicios de manera rápida y de calidad, haciendo mas competitivas a las empresas en la transformación digital a Empresas 4.0."
        : "IPINNOVATECH enables companies to improve operational process efficiency by automating tasks and reducing costs, applying different Artificial Intelligence models, it could also create new products and services quickly and with quality, making companies more competitive in the digital transformation to Industry 4.0.",
      image: "/Images/Productos/Ai_innovation_1.jpg",
      category: "AI",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example1",
      demoUrl: "https://demo.ipinnovatech.com/ai-innovation"
    },
    {
      icon: null,
      title: "AI CallConnect",
      description: language === "es"
        ? "Nuestros asistentes de IA pueden comunicarse a través de múltiples canales como voz, chat, y redes sociales, ofreciendo soporte en múltiples idiomas, realizando encuestas, integrándose con sistemas y atendiendo clientes, los cuales son entrenados para que se parezcan a los humanos en tareas básicas y complejas y se adapten como si fuera un ser humano."
        : "Our AI assistants can communicate through multiple channels such as voice, chat, and social networks, offering support in multiple languages, conducting surveys, integrating with systems and serving customers, which are trained to resemble humans in basic and complex tasks and adapt as if they were human.",
      image: "/Images/Productos/Ai_Call_Connect.jpg",
      category: "AI",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example2",
      demoUrl: "https://demo.ipinnovatech.com/ai-callconnect"
    },
    // AI Security Products
    {
      icon: null,
      title: "AI CyberSecurity",
      description: language === "es"
        ? "Detección automatizada de amenazas y verificación mediante firma digital, asegurando la integridad de datos y transacciones en la empresa. Las firmas digitales con IA, utilizan diferentes mecanismos de identificación inherentes al ser humano (Rostro, Voz, Escritura etc) lo que permite firmar cualquier tipo archivos de forma Binaria garantizando la propiedad del mismo."
        : "Automated threat detection and verification through digital signature, ensuring data integrity and transactions in the company. AI digital signatures use different identification mechanisms inherent to humans (Face, Voice, Writing, etc.) which allows signing any type of files in Binary form guaranteeing their ownership.",
      image: "/Images/Productos/Ai_Cybersecurity.jpg",
      category: "Security",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example3",
      demoUrl: "https://demo.ipinnovatech.com/ai-cybersecurity"
    },
    {
      icon: null,
      title: "AI FaceAuth",
      description: language === "es"
        ? "Nuestro sistema de Reconocimiento Facial con Liveness proporciona una verificación de identidades confiable, combinando precisión, velocidad y seguridad. Identifica rostros con alta exactitud y verifica en tiempo real si el usuario es una persona real, evitando suplantaciones."
        : "Our Facial Recognition system with Liveness provides reliable identity verification, combining accuracy, speed and security. It identifies faces with high accuracy and verifies in real time if the user is a real person, preventing impersonation.",
      image: "/Images/Productos/Ai_Face_Detection.jpg",
      category: "Security",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example4",
      demoUrl: "https://demo.ipinnovatech.com/face-auth"
    },
    // AI Training & Avatar Products
    {
      icon: null,
      title: "AI Trainer",
      description: language === "es"
        ? "Capacitaciones Especializadas: Formación avanzada para maximizar el uso de IA en procesos críticos de negocio. Capacitación Básica: Orientada a facilitar la adopción de tecnologías de IA en la empresa y preparar al personal para su uso efectivo."
        : "Specialized Training: Advanced training to maximize the use of AI in critical business processes. Basic Training: Oriented to facilitate the adoption of AI technologies in the company and prepare staff for their effective use.",
      image: "/Images/Productos/Ai_Mentor_Trainer.jpg",
      category: "Training",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example5",
      demoUrl: "https://demo.ipinnovatech.com/ai-trainer"
    },
    {
      icon: null,
      title: "AI AVATAR",
      description: language === "es"
        ? "Avatares interactivos y realistas que pueden asistir en soporte, ventas y capacitaciones virtuales, conectarse a los sistemas de información de su empresa etc... Tienen capacidad de enviar correos, SMS y de establecer Ilamadas si se requiere."
        : "Interactive and realistic avatars that can assist in support, sales and virtual training, connect to your company's information systems, etc... They have the ability to send emails, SMS and establish calls if required.",
      image: "/Images/Varios/Ai_Avatar.jpg",
      category: "Avatar",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example6",
      demoUrl: "https://demo.ipinnovatech.com/ai-avatar"
    },
    // AI Social & Analytics Products
    {
      icon: null,
      title: "AI INFLUENCER",
      description: language === "es"
        ? "Creación de personajes de IA que influyen en redes sociales, promoviendo marcas y productos y Servicios de manera estratégica y alcanzando grandes audiencias. Utilizando voz, video, imagen, tienen apariencia propia y voz propia con IA."
        : "Creation of AI characters that influence social networks, promoting brands, products, and services strategically and reaching large audiences. Using voice, video, image, they have their own appearance and voice with AI.",
      image: "/Images/Varios/Ai_Influencer.jpg",
      category: "Social",
      isMultiservice: true,
      isVarios: false,
      videoUrl: "https://www.youtube.com/watch?v=example7",
      demoUrl: "https://demo.ipinnovatech.com/ai-influencer"
    },
    {
      icon: null,
      title: "ANALITICA BIG DATA",
      description: language === "es"
        ? "Consultoria e implementación de modelos de análisis y manejo de grandes volúmenes de datos, contamos con modelos propios de predicción, clasificación, recomendados, utilizando practicas tradicionales matematicas probabilísticas y técnicas de Inteligencia artificial como Machine Learning y Deep Learning."
        : "Consulting and implementation of analytics models and handling of large volumes of data, we have our own prediction, classification, and recommendation models, using traditional mathematical probabilistic practices and Artificial Intelligence techniques such as Machine Learning and Deep Learning.",
      image: "/Images/Varios/Analitica_BigData.jpg",
      category: "Analytics",
      isMultiservice: false,
      isVarios: true,
      videoUrl: "https://www.youtube.com/watch?v=example8",
      demoUrl: "https://demo.ipinnovatech.com/analytics"
    },
    // Virtual Products
    {
      icon: null,
      title: "VIRTUAL SMART VIDEO",
      description: language === "es"
        ? "Plataforma de video, desarrollada para realizar entrevistas (videollamadas, videoentrevistas) y capacitaciones con almacenamiento de información para análisis. Incorpora inteligencia artificial para reconocimiento de emociones y perfil biofisico. Disponible las 24 horas, permite ahorrar costos."
        : "Video platform, developed to conduct interviews (video calls, video interviews) and training with information storage for analysis. Incorporates artificial intelligence for emotion recognition and biophysical profile. Available 24 hours, allows cost savings.",
      image: "/Images/Varios/Virtual_SmartVideo.jpg",
      category: "Video",
      isMultiservice: false,
      isVarios: true,
      videoUrl: "https://www.youtube.com/watch?v=example9",
      demoUrl: "https://demo.ipinnovatech.com/smart-video"
    },
    {
      icon: null,
      title: "VIRTUAL QUALITY FIELD",
      description: language === "es"
        ? "Plataforma web y móvil que realiza auditorías y supervisiones remotas en tiempo real, con toma de evidencia multimedia, garantizando calidad de los servicios e incrementando productividad, la satisfacción de los clientes y la rentabilidad de los negocios. Incluye elementos de video analítica e IA."
        : "Web and mobile platform that performs real-time remote audits and supervisions, with multimedia evidence collection, guaranteeing service quality and increasing productivity, customer satisfaction and business profitability. Includes video analytics and AI elements.",
      image: "/Images/Varios/Virtual_Quality.jpg",
      category: "Quality",
      isMultiservice: false,
      isVarios: true,
      videoUrl: "https://www.youtube.com/watch?v=example10",
      demoUrl: "https://demo.ipinnovatech.com/quality-field"
    },
    // Software Factory
    {
      icon: null,
      title: "FABRICA DE SOFTWARE",
      description: language === "es"
        ? "Servicio de desarrollo de Software a la medida, desarrollamos en PHP, Java, Nodejs, Python, Angular, .net, Android, IOS. Bases de Datos MySql, Oracle, SQLServer, AWS Aurora, MongoDB, Amazon DynamoDB. Realizamos consultoría e implementación de plataformas, para ello contamos con Ingenieros IT Arquetic para diseñar aplicaciones escalables con infraestructura en AWS."
        : "Custom software development service, we develop in PHP, Java, Nodejs, Python, Angular, .net, Android, IOS. Databases MySql, Oracle, SQLServer, AWS Aurora, MongoDB, Amazon DynamoDB. We provide consulting and platform implementation, for which we have IT Arquetic Engineers to design scalable applications with AWS infrastructure.",
      image: "/Images/Varios/FabricaSoftware.jpg",
      category: "Development",
      isMultiservice: false,
      isVarios: true,
      videoUrl: "https://www.youtube.com/watch?v=example11",
      demoUrl: "https://demo.ipinnovatech.com/software-factory"
    }
  ];

  return { products };
}