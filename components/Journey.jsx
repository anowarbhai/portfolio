import AnimatedText from "./AnimatedText";
import Cards from "./cards/Cards";

export default function Journey() {
  return (
    <section id="journey">
        <div className="container mx-auto">
          <AnimatedText text="My Professional Journey" textStyle="h2 mb-[30px] text-center" />
          <Cards />
        </div>
    </section>
  )
}
