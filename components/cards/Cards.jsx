
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaReact, FaWordpress } from "react-icons/fa";
import Card from "./Card";

const journey = [
    // experience
    {
        type: "experience",
        company: "Vestige Services",
        logoUrl: "/assets/journey/experience/logo-1.svg",
        position: "Web Developer",
        duration: "Dec 2016 - Present",
        description: "Build websites and web apps using Next.js, Tailwind CSS, and Javascript, Worked on scalable, user-friendly solutions.",
    },
    {
        type: "experience",
        company: "Creative Soft Technology",
        logoUrl: "/assets/journey/experience/logo-2.svg",
        position: "Frontend Developer",
        duration: "May 2022 - Aug 2023",
        description: "Developed responsive websites with HTML, CSS, and Javascript. Ensured seamless user experiences.",
    },
    {
        type: "experience",
        company: "T3 Communications",
        logoUrl: "/assets/journey/experience/logo-3.svg",
        position: "UX/UI Developer",
        duration: "Nav 2019 - Mar 2021",
        description: "Designed web iterfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs.",
    },
    {
        type: "experience",
        company: " Confidence IT",
        logoUrl: "/assets/journey/experience/logo-4.svg",
        position: "Full Stack Developer",
        duration: "Mar 2017 - Feb 2021",
        description: "Developed full-stack solutions using React and Node,js. Integrated frontend and backend technologies.",
    },
    // education
    {
        type: "education",
        instatution: "Peopol Univercity of Bangladesh",
        logoUrl: "/assets/journey/education/logo-1.svg",
        qualification: "Bsc in Computer",
        duration: "Mar 2018 - Feb 2022",
        description: "Learned full-stack development concepts, focusing on React, Node.js, APIs. Completed hands-on projects to solidify skills.",
    },
    {
        type: "education",
        instatution: "Optimal IT",
        logoUrl: "/assets/journey/education/logo-2.svg",
        qualification: "Wordpress Developer Course",
        duration: "Spt 2015 - Dec 2015",
        description: "Learned full-stack development concepts, focusing on Wordpress, Wordpress Theme Development, APIs. Completed hands-on projects to solidify skills.",
    },
    {
        type: "education",
        instatution: "Optimal IT",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "Advance PHP Course",
        duration: "Spt 2015 - Dec 2015",
        description: "Learned full-stack development concepts, focusing on Advance PHP, OPP PHP. Completed hands-on projects to solidify skills.",
    },
    // skill
    {
        type: "skill",
        name: "HTML",
        icon: <FaHtml5 />,
        duration: "Learn in 2014",
        description: "Crafted structured web content using HTML effectively for modern websites, ensuring semating marckup and accessibility.",
    },
    {
        type: "skill",
        name: "CSS",
        icon: <FaCss3Alt />,
        duration: "Learn in 2014",
        description: "Styled responsive web pages using CSS, ensuring an appealing user experience with modern desing principles and layouts.",
    },
    {
        type: "skill",
        name: "Javascript",
        icon: <FaJs />,
        duration: "Learn in 2015",
        description: "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
    },
    {
        type: "skill",
        name: "React.js",
        icon: <FaReact />,
        duration: "Learn in 2022",
        description: "Build dynamic user interfaces using React.js, optimizing component-driven design for seamless user experiences and efficiency.",
    },
    {
        type: "skill",
        name: "WordPress",
        icon: <FaWordpress />,
        duration: "Learn in 2016",
        description: "Developed dynamic websites with WordPress, simplifying content management processes while ensuring scalability and performance.",
    },
    {
        type: "skill",
        name: "PHP",
        icon: <FaPhp />,
        duration: "Learn in 2015",
        description: "Developed dynamic websites with PHP, simplifying content management processes while ensuring scalability and performance.",
    },
]

export default function Cards() {
  return (
    <>
        <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
            <TabsList className="max-w-max mb-[30px]">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">My Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="w-full">
                <AnimatePresence>
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} transition={{duration:0.3}}>
                        {journey.filter((item) => item.type === "experience").map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
            <TabsContent value="education" className="w-full">
             <AnimatePresence>
                 <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} transition={{duration:0.3}}>
                    {journey.filter((item) => item.type === "education").map((card, index) => {
                        return <Card key={index} {...card} />;
                    })}
                </motion.div>
                </AnimatePresence>
            </TabsContent>
            
            <TabsContent value="skills" className="w-full">
                <AnimatePresence>
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} transition={{duration:0.3}}>
                        {journey.filter((item) => item.type === "skill").map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                </motion.div>
                </AnimatePresence>
            </TabsContent>
        </Tabs>
    </>
  )
}
