'use client';

import { cl } from '@/utils/styles';
import { experienceTimelineIndices } from '@/utils/timeline';
import { FC } from 'react';
import Time from './Time';
import { Experience } from '@/app/data';
import TimelineEvent from '../Timeline/TimelineEvent';

const Timeline: FC<{
  className?: string;
  experiences: Experience[];
}> = ({ className, experiences }) => {
  if (!experiences.length) return null;
  const startYear =
    (experiences.toReversed()[0]?.start.getFullYear() as number) - 1;
  const years = Array.from(
    { length: new Date().getFullYear() - startYear },
    (_, i) => startYear + i + 1
  );

  return (
    <div
      className={cl(
        className,
        'flex flex-col w-full px-8 my-4 py-8 rounded bg-black'
      )}
    >
      <div
        className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${years.length * 4}, 1fr)`,
          gridTemplateRows: `repeat(${experiences.length + 1}, 1fr)`,
        }}
      >
        {experiences.map((experience, i) => {
          const { start, end } = experienceTimelineIndices(experience, years);
          return (
            <TimelineEvent
              key={i}
              index={i}
              experience={experience}
              style={{
                gridRowStart: i + 1,
                gridRowEnd: i + 2,
                gridColumnStart: 1 + parseInt((start * 4).toString()),
                gridColumnEnd: 1 + parseInt((end * 4).toString()),
              }}
            />
          );
        })}
      </div>
      <Time years={years} />
    </div>
  );
};

export default Timeline;
