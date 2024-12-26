import { motion } from "framer-motion";
import { Button as StaticButton } from "../ui/button";

type Props = {
    label?: string;
};

export const Button = ({ label } : Props ) => {

    return (

        <motion.div
            whileHover={{
                scale: 1.1,
                rotate: -1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
            }}
            transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 200,
            }}    
            className="w-fit" 
        >

            <StaticButton className="rounded-full w-fit">
                {label ? label : "Contact-me"}
            </StaticButton>

        </motion.div>

    )

}