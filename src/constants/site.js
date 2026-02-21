import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const SITE = {
    name: "Shashi Kiran",
    role: "Software Engineer",
    tagline: "Building scalable and reliable systems.",

    social: [
        {
            name: "Email",
            url: "mailto:bolleddulashashikiran@gmail.com",
            icon: MdEmail,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/bshashikiran",
            icon: FaLinkedin,
        },
        {
            name: "GitHub",
            url: "https://github.com/bshashikiran",
            icon: FaGithub,
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/bshashikiran",
            icon: SiLeetcode,
        },
    ],
    heroStatus: [
        "Working as a SWE at Magicbricks",
        "2.8+ years of experience",
        "Graduated from NIT Nagpur in 2023",
    ]
};