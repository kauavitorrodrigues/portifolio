import { Project } from "@/types/Project";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const ProjectCard = ({ title, description, cover, link, skills, cardPosition }: Project) => {

    return (

        <div className={`${cardPosition === "right" ? "md:flex-row-reverse" : ""} w-full flex gap-5 rounded-md bg-card border`}>

            <motion.img 
                src={cover} 
                className="relative w-1/2 p-8"
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

                {/*  

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

                <img 
                    src={cover} 
                    alt={title}
                    className="h-full w-full object-cover"
                />
                */}

            </motion.img>

            <div className="flex flex-col gap-8 p-8 bg-muted w-1/2">

                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-muted-foreground">{description}</p>

                <div className="flex gap-2">

                    { skills.map((skill, index) => (
                        <Badge 
                            key={index}
                            variant={"destructive"}
                        >{skill}
                        </Badge>
                    ))}

                </div>

            </div>

        </div>

    );

};