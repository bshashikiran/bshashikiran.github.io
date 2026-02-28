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
            gaLabel: "email_click",
            url: "mailto:bolleddulashashikiran@gmail.com",
            icon: MdEmail,
        },
        {
            name: "LinkedIn",
            gaLabel: "linkedin_click",
            url: "https://linkedin.com/in/bshashikiran",
            icon: FaLinkedin,
        },
        {
            name: "GitHub",
            gaLabel: "github_click",
            url: "https://github.com/bshashikiran",
            icon: FaGithub,
        },
        {
            name: "LeetCode",
            gaLabel: "leetcode_click",
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