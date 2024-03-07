import { Experience } from "@/app/data";

/**
 * Returns the start and end indices of an experience in the timeline
 *
 * @param experience - The experience to get the indices for
 * @param years - The years to get the indices for
 * @returns The start and end indices of the experience
 */
export const experienceTimelineIndices = (
    experience: Experience,
    years: number[]
) => {
    const startDate = new Date(experience.start);
    const start =
        (startDate.getFullYear() - years[0]) * 4 +
        Math.ceil(startDate.getMonth() / 3);

    const endDate =
        experience.end === "present" ? new Date() : new Date(experience.end);
    const end =
        (endDate.getFullYear() - years[0]) * 4 +
        Math.ceil(endDate.getMonth() / 3);

    console.table({
        name: experience.company,
        yearStart: experience.start,
        yearEnd: experience.end,
        endDate,
        start,
        end,
    });
    return { start, end };
};
