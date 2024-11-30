"use client"

import { Link } from "react-scroll"
import { ToggleTheme } from "../ToggleTheme"

export const Header = () => {

    return (

        <header className="flex gap-3 border-b justify-between items-center h-20 px-8 bg-card z-50 sticky top-0">

            <div className="flex gap-4 items-center justify-center">

                <div className="flex gap-2 items-center">

                    <h1 className="scroll-m-20 text-4xl text-primary font-extrabold tracking-tight">
                        KV
                    </h1>
                    
                    <p className="max-w-28 text-xs text-muted-foreground">Web Developer & Web Designer</p>
                
                </div>

                <ToggleTheme/>

            </div>

            <nav>

                <ul className="flex gap-3">

                    <li>

                        <Link to="home" 
                            offset={-85} 
                            smooth={true} 
                            duration={500}
                            className="cursor-pointer items-center relative inline-block underline-hover"
                        >   Home
                        </Link>

                    </li>

                    <li>

                        <Link to="about" 
                            offset={-85} 
                            smooth={true} 
                            duration={500}
                            className="cursor-pointer items-center relative inline-block underline-hover"
                        >   About
                        </Link>

                    </li>

                    <li>

                        <Link to="services" 
                            offset={-85} 
                            smooth={true} 
                            duration={500}
                            className="cursor-pointer items-center relative inline-block underline-hover"
                        >   Services
                        </Link>

                    </li>

                    <li>

                        <Link to="works" 
                            offset={-85} 
                            smooth={true} 
                            duration={500}
                            className="cursor-pointer items-center relative inline-block underline-hover"
                        >   Works
                        </Link>

                    </li>

                    <li>

                        <Link to="contact" 
                            offset={-85} 
                            smooth={true} 
                            duration={500}
                            className="cursor-pointer items-center relative inline-block underline-hover"
                        >   Contact
                        </Link>

                    </li>


                </ul>

            </nav>

        </header>

    )

}