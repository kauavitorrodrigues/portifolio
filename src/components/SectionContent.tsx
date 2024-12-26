"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
    children: ReactNode;
};

export const SectionContent = ({ children } : Props ) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [ isInView ]);

    return (

        <motion.div 
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay : 0.15 }}  
        > {children}
        </motion.div>

    );

};