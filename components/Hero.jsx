"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import Header from "./Header";
import RotatingShape from "./RotatingShape";
import Stats from "./Stats/Stats";
 
export default function Home() {
  return (
    <section id="home" className="h-[800px] relative bg-accent/10 xl:bg-white">
     {/* header */}
      <Header />
      
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And </span> Design Powerful
            <TypeAnimation preRenderFirstString={true} sequence={["Websites", 2000, "Apps", 2000]} speed={50} repeat={Infinity} wrapper="span" cursor={false} className="ml-2 xl:ml-4" />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blend aesthetics with performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact Me</button>
          </ScrollLink>
          {/** stats */}
          <Stats />
        </div>
        {/** Image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
            <Image src="/assets/hero/anowar.png" alt="" fill quality="100%" property="true" className="object-contain" />
          </div>
          {/** arrow */}
          <div className="hidden xl:flex absolute top-48 left-[4vw]" data-scroll data-scroll-speed="0.05">
            <Image src="/assets/hero/arrow.svg" alt="" width="160" height="160" />
          </div>
          {/** shape 1 */}
          <div className="top-[600px] absolute left-[3vw]" data-scroll data-scroll-speed="0.2">
            <RotatingShape content={<Image src="/assets/hero/shape-1.svg" width="38" height="38" alt="" />} direction="left" duration={6} />
          </div>
          {/** shape 2 */}
          <div className="top-[240px] absolute right-[20vw]" data-scroll data-scroll-speed="0.2">
            <RotatingShape content={<Image src="/assets/hero/shape-2.svg" width="34" height="34" alt="" />} direction="right" duration={5} />
          </div>
          
          {/** shape 3 */}
          <div className="top-[440px] absolute left-[40vw]" data-scroll data-scroll-speed="0.2">
            <RotatingShape content={<Image src="/assets/hero/shape-3.svg" width="36" height="36" alt="" />} direction="left" duration={7} />
          </div>
        </div>
      </div>
    </section>
  );
}
