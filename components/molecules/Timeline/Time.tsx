import { cl } from "@/utils/styles";
import { FC } from "react";

const Time: FC<{ className?: string; years: number[] }> = ({
    className,
    years,
}) => {
    return (
        // <div className={cl("absolute -bottom-10 left-0 w-full", className)}>
        <div
            className="absolute z-30 bottom-2 left-0 right-0 w-full grid gap-2  border-foreground"
            style={{
                gridTemplateColumns: `repeat(${
                    years.length * 4
                }, minmax(20px, 1fr))`,
            }}
        >
            {years.map((year, i) => (
                <div className=" text-center col-span-4 border-t-4 " key={i}>
                    {year}
                </div>
            ))}
        </div>
        // </div>
    );
};

export default Time;
