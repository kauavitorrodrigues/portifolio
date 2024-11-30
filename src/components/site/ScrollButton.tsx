"use client"

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-scroll";

export const ScrollButton = () => {

    return (

        <Button
            size={"icon"}
            className="fixed bottom-10 right-10 z-20"
        >

            <Link 
                to="home"
                offset={-85} 
                smooth={true} 
                duration={500}
                className="border w-full h-full flex items-center justify-center"
            >
                <ChevronUp/>

            </Link>

        </Button>

    );

};