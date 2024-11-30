import { Project } from "@/types/Project";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const ProjectCard = ({ title, description, cover, link }: Project) => {

    return (

        <div className="w-full max-w-lg flex flex-col gap-5">

            <motion.div 
                className="relative"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
                    opacity: 0.8
                }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                }} 
            >

                <motion.div
                    className="absolute h-full w-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{
                        opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                >
                    <div className="flex justify-center items-center h-10 w-10 bg-primary rounded-full">
                        <Link href={link} target="_blank">
                            <Plus size={24} />
                        </Link>
                    </div>

                </motion.div>

                <motion.img 
                    src={cover} 
                    alt={title}
                    className="rounded-xl h-72 w-full object-cover"
                />

            </motion.div>

            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-xl">{title}</h3>
                <p>{description}</p>
            </div>

        </div>

    );

};