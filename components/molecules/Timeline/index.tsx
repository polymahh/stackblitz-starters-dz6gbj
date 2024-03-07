"use client";

import { cl } from "@/utils/styles";
import { experienceTimelineIndices } from "@/utils/timeline";
import { FC } from "react";
import Time from "./Time";
import { Experience } from "@/app/data";
import TimelineEvent from "../Timeline/TimelineEvent";

const Timeline: FC<{
    className?: string;
    experiences: Experience[];
}> = ({ className, experiences }) => {
    if (!experiences.length) return null;
    const sortedExperiences = experiences.sort(
        (a, b) => a.start.getFullYear() - b.start.getFullYear()
    );
    const startYear = (sortedExperiences[0]?.start.getFullYear() as number) - 1;
    const years = Array.from(
        { length: new Date().getFullYear() - startYear },
        (_, i) => startYear + i + 1
    );

    return (
        <div
            className={cl(
                className,
                "flex flex-col w-full px-8 my-4 py-8 rounded bg-black  "
            )}
        >
            <div
                className={`grid gap-2 overflow-y-visible overflow-x-auto relative pb-12`}
                style={{
                    gridTemplateColumns: `repeat(${
                        years.length * 4
                    }, minmax(20px, 1fr))`,
                    gridTemplateRows: `repeat(${experiences.length + 1}, 1fr)`,
                }}
            >
                <Time years={years} />
                {experiences.map((experience, i) => {
                    const { start, end } = experienceTimelineIndices(
                        experience,
                        years
                    );
                    return (
                        <TimelineEvent
                            key={i}
                            index={i}
                            experience={experience}
                            style={{
                                gridRowStart: i + 1,
                                gridRowEnd: i + 2,
                                gridColumnStart: start,
                                gridColumnEnd: end + 1,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
