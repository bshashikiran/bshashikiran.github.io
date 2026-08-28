import { getExperienceString } from "../utils/experience";

export const ABOUT = {
    points: [
        `Backend-focused Software Engineer with ${getExperienceString(new Date(2023, 6, 3)).replace(" of experience", "")} of experience building scalable and reliable systems.`,
        "Strong experience designing RESTful APIs and microservices architectures.",
        "Built and automated high-volume data ingestion pipelines.",
    ],
};