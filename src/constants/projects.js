export const PROJECTS = [
    {
        id: "magicspace3d",
        name: "MagicSpace 3D",
        description:
            "Automated GenAI-powered 2D-to-3D floor plan transformation pipeline delivering immersive 3D architectural visuals across core discovery pages.",
        tech: [
            "Java",
            "Spring Batch",
            "Kafka",
            "Apache Solr",
            "MySQL",
            "Amazon S3"
        ],
        highlights: [
            "Engineered a high-volume Spring Batch pipeline to extract 2D floor plan assets from DB and publish them to Kafka topics for AI processing.",
            "Built asynchronous, event-driven workflows to ingest AI-generated 3D floor plans and room metadata back into DB and Amazon S3.",
            "Integrated metadata synchronization with Apache Solr to index and serve 3D assets on core high-traffic pages (SRP, LDP, PDP, and Project Galleries).",
            "Streamlined data flow between backend services and Data Science pipelines, eliminating manual asset processing."
        ],
    },
    {
        id: "magicql",
        name: "MagicQL",
        description:
            "Internal Natural Language-to-SQL platform enabling cross-functional teams to query high-scale ClickHouse analytical data using plain English prompts.",
        tech: [
            "Java",
            "Spring Boot",
            "ClickHouse",
            "React.js",
            "REST APIs",
            "GenAI / LLMs"
        ],
        highlights: [
            "Built a full-stack text-to-SQL internal productivity tool using React.js and Spring Boot to translate natural language prompts into executable ClickHouse queries.",
            "Integrated analytical query execution against ClickHouse DB, enabling business, product, and database teams to perform self-service data extraction.",
            "Designed RESTful APIs with schema-aware context mapping to enhance query generation accuracy and prevent invalid SQL syntax.",
            "Streamlined cross-team data access workflows, significantly reducing dependency on DBA and analytics teams for ad-hoc queries."
        ],
    },
    {
        id: "propAvatarAi",
        name: "PropAvatar AI",
        description:
            "Interactive AI Avatar platform generating digital twins of builders and agents from short video & voice samples to deliver automated property walk-throughs and real-time interactive query resolution.",
        tech: [
            "Java",
            "Spring Boot",
            "Cartesia AI",
            "REST APIs",
            "React.js",
            "WebSockets / Real-time Streaming"
        ],
        highlights: [
            "Engineered end-to-end backend workflows to generate interactive digital avatars from 30-second silent selfie videos and recorded voice samples.",
            "Developed services supporting dual-mode avatar capabilities: automated narration for pre-defined project highlights and real-time interactive conversational query resolution.",
            "Built robust API interfaces and media delivery pipelines to seamlessly stream avatar responses to end users on web and mobile clients."
        ],
    },
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
            "Architected in-house AI generation services integrating OpenAI APIs to produce personalized interior design concepts based on user-selected reference styles.",
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