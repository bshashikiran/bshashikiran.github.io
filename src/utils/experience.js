export const getExperienceString = (startDate = new Date(2023, 6, 3)) => {
    const now = new Date();
    let totalMonths =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

    if (totalMonths < 0) totalMonths = 0;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (months === 0) {
        return `${years}+ years of experience`;
    }
    return `${years}.${months}+ years of experience`;
};
