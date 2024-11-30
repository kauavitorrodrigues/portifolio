"use client"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "../Button";

export const Home = () => {

    return (

        <motion.section 
            id="home"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="flex flex-col items-center justify-center p-8 min-h-[calc(100vh-80px)] gap-6"
        > 

            <div className="min-h-44">

                <div>

                    <p className="text-lg text-muted-foreground">Hello!</p>

                    <motion.div 
                        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl max-w-[865px] inline-block"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1.5 }}  
                    >

                        <h1>My name is <span className="text-primary">Kauã</span>.</h1>

                        <TypeAnimation
                        
                            sequence={[
                                1500,                                        
                                "I'm A Web Developer",
                                1500, 
                                "I'm A Web Designer",
                                1500,
                                "I'm A Entrepreneur",
                                1500,
                                "I'm A Tech Enthusiast",
                            ]}

                            wrapper="span"
                            speed={50}

                        />

                    </motion.div>

                </div>

            </div>

            <Button/>

        </motion.section>

    );

};