import { motion } from "framer-motion";
import { Button as StaticButton } from "../ui/button";

type Props = {
    label?: string;
};

export const Button = ({ label } : Props ) => {

    return (

        <motion.div
            whileHover={{
                scale: 1.1, // Aumenta o card
                rotate: -1, // Dá uma leve rotação
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)", // Adiciona sombra ao hover
            }}
            transition={{
                duration: 0.3, // Duração da animação
                type: "spring", // Tipo de transição suave
                stiffness: 200, // Define a elasticidade
            }}    
            className="w-fit" 
        >

            <StaticButton className="rounded-full w-fit">
                {label ? label : "Contact-me"}
            </StaticButton>

        </motion.div>

    )

}