import { Link as ScrollLink } from "react-scroll";

const links = [
    {
        name: 'home',
    },
    {
        name: 'about',
    },
    {
        name: 'journey',
    },
    {
        name: 'work',
    },
    {
        name: 'contact',
    },
];

export default function Nav({containerStyle, listStyle, linkStyle, spy}) {
  return (
    <nav className={containerStyle}>
        <ul className={listStyle}>
            {links.map((item, index) =>{
                return <ScrollLink spy={spy} key={index} activeClass="active" to={item.name} smooth className={linkStyle}>{item.name}</ScrollLink>
            } )}
        </ul>
    </nav>
  )
}
