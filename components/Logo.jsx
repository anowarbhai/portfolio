import Link from "next/link";

export default function Logo({light = false}) {
    const colorClass = light ? "text-white" : "text-primary";
  return (
    <Link href="/" className="font-primary text-2xl tracking-[4px]"><span className={colorClass}>Anowar Hossain</span></Link>
  )
}
