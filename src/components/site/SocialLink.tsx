import Link from "next/link";
import { Button } from "../ui/button";
import { SocialIcon } from "@/types/SocialIcon";
import { motion } from "framer-motion";

export const SocialLink = ({ icon, link } : SocialIcon ) => {

    return (

        <motion.div

            whileHover={{
                scale: 1.1, // Aumenta o card
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)", // Adiciona sombra ao hover
            }}
            transition={{
                duration: 0.3, // Duração da animação
                type: "spring", // Tipo de transição suave
                stiffness: 200, // Define a elasticidade
            }}  

        >
            <Button 
                size={"icon"}
                className="rounded-full p-2"
            >

                <Link 
                    href={link}
                    target="_blank"
                >

                    <img 
                        src={icon}
                        className="w-6 h-6"
                    />

                </Link>

            </Button>

        </motion.div>


    );

};