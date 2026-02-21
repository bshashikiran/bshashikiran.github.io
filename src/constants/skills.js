import {
    SiSpringboot,
    SiHibernate,
    SiMysql,
    SiApachekafka,
    SiRedis,
    SiReact,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiAmazons3,
    SiGit,
    SiPostman,
    SiLinux,
    SiIntellijidea
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { GrServices } from "react-icons/gr";

export const SKILLS = [
    {
        category: "backend",
        items: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Hibernate", icon: SiHibernate },
            { name: "REST APIs", icon: IoMdSettings },
            { name: "Microservices", icon: GrServices },
            { name: "MySQL", icon: SiMysql },
        ],
    },

    {
        category: "messaging",
        items: [
            { name: "Kafka", icon: SiApachekafka },
            { name: "Redis", icon: SiRedis },
        ],
    },

    {
        category: "frontend",
        items: [
            { name: "React", icon: SiReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
        ],
    },

    {
        category: "cloud",
        items: [{ name: "Amazon S3", icon: SiAmazons3 }],
    },

    {
        category: "tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "Postman", icon: SiPostman },
            { name: "Linux", icon: SiLinux },
            { name: "VS Code", icon: VscVscode },
            { name: "IntelliJ", icon: SiIntellijidea },
        ],
    },
];