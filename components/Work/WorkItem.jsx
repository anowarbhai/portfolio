import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

export default function WorkItem({href, category, img, title}) {
  return (
    <Link href="/" className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-8 relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-primary text-base z-40 absolute left-6 top-6 capitalize">{category}</Badge>
        <Image src={img} fill priority quality={100} className=" object-cover group-hover:scale-105 transition-all duration-300" alt="" />
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[48px] h-[48px] flex justify-center items-center -rotate-45 group-hover:rotate-0 transition-all duration-500"><FiArrowRight className="text-2xl" /></button>
      </div>
    </Link>
  )
}
