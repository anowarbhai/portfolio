import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section className="relative pt-12 pb-24" id="about">
        <div className="container mx-auto h-full">
          <div className="h-full flex items-center justify-center">
            {/** image & shape */}
            <div className="hidden xl:flex flex-1 pl-8">
              <div className="relative w-full max-w-[380px]">
                {/* shape */}
                <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
                {/* image */}
                <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                  <Image src="/assets/about/anowar2.png" width="350" height="478" quality={100} priority alt="" />
                </div>
                <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 10, 
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    <Image src="/assets/about/shape-1.svg" width="160" height="160" alt="" />
                  </motion.div>
                  <div className="absolute text-white text-center">
                    <div className="text-5xl leading-none">10+</div>
                    <div className="leading-none">Years of <br /> experience</div>
                </div>
                </div>
              </div>
            </div>
            {/** text */}
            <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
              <div>
              <AnimatedText text="My name is Anowar Hossain" textStyle="h2 mb-2" />
              <p className="text-lg">Frontend Developer & Desinger</p>
              </div>
              <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">I create visually stunning and functiona; websites using modern frontend technologies and desing principales. Explore my work to see how I combine creativity with technical skill to deliver exceptional digital expreriences.</p>
              {/** info item */}
              <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center xl:items-start">
                {/* item 1 */}
                <div className="max-w-max">
                    <div className="uppercase font-bold text-primary">Agg</div>
                    <p className="text-[15px]">30 Years</p>
                </div>
                {/* item 2 */}
                <div className="max-w-max">
                    <div className="uppercase font-bold text-primary">Bron In</div>
                    <p className="text-[15px]">Dhaka, Bangladesh</p>
                </div>
                {/* item 3 */}
                <div className="max-w-max">
                    <div className="uppercase font-bold text-primary">Phone</div>
                    <p className="text-[15px]">+8801729312186</p>
                </div>{/* item 4 */}
                <div className="max-w-max">
                    <div className="uppercase font-bold text-primary">Email</div>
                    <p className="text-[15px]">m.anowarbhai@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>        
    </section>
  )
}
