"use Client";
import { motion } from "framer-motion";

const letterAnimation = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    animate: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1], delay: i[0] }
    })
}

const getLetter = (name) => {
    let letters = [];
    name.split("").forEach((letter, index)=> {
        return letters.push(
            <motion.span 
            variants={letterAnimation} 
            initial="initial"
            whileInView="animate"
            custom={[index * 0.02, (name.length - index) * 0.01]}
            key={index}
            >{letter}</motion.span>
        );
    });
    return letters;
}



export default function AnimatedText({text, textStyle}) {
  return (
    <div className={`${textStyle}`}>{getLetter(text)}</div>
  )
}
