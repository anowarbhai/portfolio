import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

import Nav from "./Nav";
import Socials from "./Socials";


export default function FixedMenu() {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const isMobile = useMediaQuery({
        query: "(max-width:640px)",
    });

    useEffect(() =>{
        setIsMounted(true);
    }, []);

    useEffect(() =>{
        if (isMounted) {
            const handleScroll = () => {
                setShowMenuButton(window.scrollY > 150);
            }
            if (!isMobile) {
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            }else {
                setShowMenuButton(true);
            }
        }
    }, [isMobile, isMounted]);

    if (!isMounted) return null;
  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-auto bg-transparent items-center">
        {/* menu */}
        <AnimatePresence>
            {showMenu && showMenuButton &&<motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.3}} 
            className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[37rem] px-4 pointer-events-auto">
                <div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 transition-all duration-300">
                <Nav 
                    containerStyle="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left" 
                    listStyle="flex flex-col justify-center gap-4" 
                    linkStyle="text-primary font-primary text-4xl cursor-pointer" spy={true} />
                    <div className="hidden md:flex mx-auto">
                        <div>
                            <div className="flex gap-12 mb-12">
                                {/* Location */}
                                <div className="flex flex-col">
                                    <div className="text-[28px] text-accent mb-2">
                                        <FiMapPin />
                                    </div>
                                    <p className="font-semibold text-primary text-lg">Location</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                                {/* Phone */}
                                <div className="flex flex-col">
                                    <div className="text-[28px] text-accent mb-2">
                                        <FiPhoneCall />
                                    </div>
                                    <p className="font-semibold text-primary text-lg">Phone</p>
                                    <p>+88 (0172) 931 2186</p>
                                </div>
                                {/* Email */}
                                <div className="flex flex-col">
                                    <div className="text-[28px] text-accent mb-2">
                                        <FiMail />
                                    </div>
                                    <p className="font-semibold text-primary text-lg">Email</p>
                                    <p>m.anowarbhai@gmail.com</p>
                                </div>
                            </div>
                            <Socials containerStyles="flex gap-2" IconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full" />
                        </div>
                    </div>
                </div>    
            </motion.div>}
        </AnimatePresence>
        {/* menu button */}
        {isMobile ? (
            <div className="fixed bottom-16 z-50">
                <button onClick={() => setShowMenu(!showMenu)} className="bg-accent shadow-custom rounded-lg w-[54px] h-[54px] flex justify-center items-center cursor-pointer select-none"><CgMenuGridR className="text-4xl text-white" /></button>
            </div>
        ): (
            <AnimatePresence>
                {showMenuButton && (
                    <motion.div 
                    initial={{y:100, opacity: 0}} 
                    animate={{y:0, opacity: 1}}
                    exit={{y:100, opacity: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                    }}
                    className="fixed pointer-events-auto z-50 bottom-16"
                    >
                        <button onClick={() => setShowMenu(!showMenu)}  className="bg-accent shadow-custom rounded-lg w-[54px] h-[54px] flex justify-center items-center cursor-pointer select-none"><CgMenuGridR className="text-4xl text-white"/></button>
                    </motion.div>
                )}
            </AnimatePresence>
        )}
    </div>
  )
}
