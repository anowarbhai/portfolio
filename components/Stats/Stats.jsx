import StatsItem from "./StatsItem";
const statsData = [
  {
      endCountNum: 8,
      endCountText: "+",
      text: "Yrs. of experience",
  },
  {
      endCountNum: 100,
      endCountText: "+",
      text: "Websites Build",
  },
  {
      endCountNum: 75,
      endCountText: "+",
      text: "Client Satisfied",
  },
]
export default function Stats() {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) =>{
        return <StatsItem endCountNum={item.endCountNum} endCountText={item.endCountText} text={item.text} key={index} />
      })}
    </section>
  )
}
