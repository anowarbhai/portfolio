import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";


export default function Header() {
  return (
    <header className="w-full absolute py-8 xl:py-[48px] z-30">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:justify-between">
                {/** Logo */}
                <Logo />
                {/** nav and socical */}
                <div className="flex gap-12 items-center">
                    <Nav 
                    containerStyle="hidden xl:flex" 
                    listStyle="flex gap-6" 
                    linkStyle="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer" />
                    
                    <Socials containerStyles="flex items-center gap-2" IconStyles="text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full" />
                </div>
            </div>
        </div>
    </header>
  )
}
