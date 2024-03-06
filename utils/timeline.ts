import { Experience } from '@/app/data';

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
    (startDate.getFullYear() - 2015) / 4 + Math.floor(startDate.getMonth() / 3);
  console.log(startDate.getFullYear());
  const endDate =
    experience.end === 'present' ? new Date() : new Date(experience.end);
  const end =
    (endDate.getFullYear() - 2015) * 4 + Math.floor(endDate.getMonth() / 3) - 1;

  console.table({ name: experience.company, start, end });
  return { start, end };
};
