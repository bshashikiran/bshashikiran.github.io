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
            { name: "Java", icon: FaJava, color: "#f89820" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "Hibernate", icon: SiHibernate, color: "#BCAE79" },
            { name: "REST APIs", icon: IoMdSettings, color: "#00ff9f" },
            { name: "Microservices", icon: GrServices, color: "#00ff9f" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ],
    },

    {
        category: "messaging",
        items: [
            { name: "Kafka", icon: SiApachekafka, color: "#e5e7eb" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
        ],
    },

    {
        category: "frontend",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss3, color: "#1572B6" },
        ],
    },

    {
        category: "cloud",
        items: [{ name: "Amazon S3", icon: SiAmazons3, color: "#569A31" }],
    },

    {
        category: "tools",
        items: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "IntelliJ", icon: SiIntellijidea, color: "#FE315E" },
        ],
    },
];
