export const PROJECTS = [
    {
        id: "magicDesignAi",
        name: "MagicDesign AI",
        description: "Scalable AI-Driven Interior Design Platform that generates personalized home interior concepts from customer leads.",
        tech: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Amazon S3",
            "Rest APIs",
            "React.js"
        ],

        highlights: [
            "Integrated third-party SEGMIND APIs to automate AI image generation workflows, reducing manual design effort.",
            "Built backend workflows to transform lead data into personalized AI-generated interior design concepts.",
            "Designed scalable media storage and retrieval using Amazon S3 for generated design assets.",
            "Enabled asynchronous processing for AI generation pipelines to improve system responsiveness."
        ],
    },
    {
        id: "cms",
        name: "Content Management System",
        description:
            "CMS platform for secure media storage, retrieval, and management for home interior brand partners.",
        tech: [
            "Java",
            "Spring Boot",
            "Amazon S3",
            "MySQL",
            "React.js",
            "Microservices"
        ],

        highlights: [
            "Designed and implemented backend services for centralized media storage and retrieval using Amazon S3.",
            "Built secure upload, access control, and media delivery workflows for internal platforms.",
            "Optimized storage integration to ensure reliable and efficient media handling."
        ],
    },
    {
        id: "crm",
        name: "Home Interior CRM",
        description:
            "CRM platform enabling sales agents and Relationship Managers to manage leads, follow-ups, and communication workflows.",
        tech: [
            "Java",
            "Spring Boot",
            "Kafka",
            "MySQL",
            "Microservices"
        ],
        highlights: [
            "Developed a custom CRM platform for lead tracking, follow-up management, and workflow automation.",
            "Designed scalable backend services to support lead lifecycle management across multiple user roles.",
            "Implemented event-driven architecture using Kafka for asynchronous notifications and system coordination.",
            "Streamlined communication workflows, improving operational efficiency for sales teams."
        ],
    },
    {
        id: "quotation",
        name: "MagicInterior Quotation Estimator (MiQE)",
        description:
            "Dynamic cost estimatior that calculates interior project budgets based on configurable business parameters.",
        tech: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "MySQL"
        ],

        highlights: [
            "Engineered a dynamic quotation estimator to compute interior project budgets using size, material, finish, and hardware parameters.",
            "Designed configurable rule-based pricing logic enabling flexible business driven cost calculations.",
            "Optimized calculation performance to support real-time quotation generation at scale."
        ],
    },
    {
        id: "bre",
        name: "Brand Recommendation Engine",
        description:
            "Brand recommendation system that surfaces relevant interior brands using budget, preferences, and micromarket insights.",
        tech: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "MySQL",
            "Microservices"
        ],
        highlights: [
            "Built a brand recommendation engine to match users with interior brands based on budget and preferences.",
            "Designed rule-based decision logic leveraging micromarket data to improve recommendation relevance.",
            "Enabled configurable business rules allowing dynamic tuning of recommendation strategies.",
        ],
    },
    {
        id: "brandPartnerApp",
        name: "Brand Partner App",
        description:
            "Backend platform powering brand partner workflows to manage leads, showcase designs, and handle end-to-end service lifecycle.",
        tech: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "MySQL"
        ],
        highlights: [
            "Developed REST APIs consumed by the Android application to support brand partner operations.",
            "Enabled lead lifecycle management from design presentation to final service delivery.",
            "Designed backend workflows for lead tracking, status transitions, and partner coordination.",
            "Built scalable service endpoints ensuring reliable communication between mobile clients and backend systems.",
        ],
    }
];