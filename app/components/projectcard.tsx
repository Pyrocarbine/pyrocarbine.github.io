"use client";
import * as motion from "motion/react-client";
import { InView } from "react-intersection-observer";

export default function ProjectCard({ title, description, link }: 
    {title: string; description: React.ReactNode; link: string}
) {
    return (
        <InView threshold={0.4} triggerOnce>
            {({ ref, inView}) => (
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView? {opacity: 1, y: 0 } : {opacity: 0, y: 20 }}
                className="w-full bg-white border flex flex-col border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5 flex flex-col grow">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <div className="mt-auto">
                        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Source
                        </a>
                    </div>
                </div>
            </motion.div>  
        )}
        </InView>
    );
}