import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstanceFill } from "react-icons/ri";

const socials = [
  {icon: <RiInstanceFill /> , path: ""},
  {icon: <FaFacebookF /> , path: ""},
  {icon: <FaTwitter />, path: ""},
  {icon: <FaLinkedin />, path: ""},
];
export default function Socials({containerStyles, IconStyles}) {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} className={IconStyles}>
        <span>{item.icon}</span>
        </Link>
      );
    })}
  </div>
  )
}
