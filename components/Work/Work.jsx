"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

const data = [
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-1.png",
    title: "Luminex UX Kit",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-2.png",
    title: "Nebula Dashboard",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-3.png",
    title: "Velox App",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-4.png",
    title: "Quantum Portfolio",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-5.png",
    title: "Synargy App UI",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/thumb-6.png",
    title: "Apollo Travel Platform",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/thumb-7.png",
    title: "Horaizon SaaS Dashboard",
  },
]

export default function Work() {

  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    {category: "all"},
    ...uniqueCategories.map((category) => ({category})),
  ];
  // console.log(tabData);
 const [tabValue, setTabValue] = useState("all");

 const [visibleItems, setVIsibleItems] = useState(6);

 const filterWork = 
    tabValue === "all" 
    ? data.filter((item) => item.category !== "all") 
    : data.filter((item) => item.category === tabValue);

//  console.log(filterWork);

 const loadMoreItem = () => {
  setVIsibleItems((prev) => prev + 2);
 }


  return (
    <section className="pt-24 min-h-[1000px]" id="work">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="flex flex-col w-full">
            <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
              <AnimatedText text="My Latest Work" textStyle="h2 mb-[30px] xl:mb-0" />
              <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                {tabData.map((item, index) =>{
                  return (
                    <TabsTrigger value={item.category} key={index} className=" capitalize" onClick={() => setTabValue(item.category)}>
                      {item.category}
                    </TabsTrigger>
                  );                
                })}
            </TabsList>
            </div>
            <TabsContent value={tabValue}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                  <AnimatePresence>
                    {filterWork.slice(0, visibleItems).map((item, index) =>(
                      <motion.div 
                      key={index} 
                      initial={{opacity:0, y:20}} 
                      animate={{opacity:1, y:0}} 
                      transition={{duration:0.3}}>
                        <WorkItem {...item} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                {/** loading more */}
                {visibleItems < filterWork.length && (
                  <div className="flex justify-center mt-12">
                    <button onClick={loadMoreItem} className="btn btn-accent">Load More</button>
                  </div>
                )}
            </TabsContent>
          </Tabs>
        </div>
    </section>
  )
}
