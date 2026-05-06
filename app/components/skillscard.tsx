"use client";
import * as motion from "motion/react-client";
import { InView } from "react-intersection-observer";

export default function SkillsCard({ skill }: 
    {skill: string }
) {
    return (
        <InView threshold={1} triggerOnce>
        {({ ref, inView }) => (
            <motion.div className="h-20 bg-green-palette-lighter border flex flex-col border-gray-200 rounded-lg shadow-sm"
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView? {opacity: 1, y: 0 } : {opacity: 0, y: 20 }}>
                <div className="p-5 flex flex-col grow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-palette-dark">{skill}</h5>
                </div>
            </motion.div>
        )}
        </InView>
    );
}
