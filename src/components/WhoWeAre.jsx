import imageCollage from "../assets/weare.png"

const WhoWeAre = () => {
  return (
    <div className='flex flex-col gap-20 mt-[100px] w-full max-w-[1140px] mx-auto'>
        <div className="flex flex-col gap-4">
            <span className="font-ibm text-[75px] font-semibold">Who we are</span>
            <p className="self-end font-ibm text-[25px] font-light max-w-[54ch]">We are designers, developers, writers, thinkers, and problem solvers. Small enough to be simple and fast, but big enough to deliver your project scope at the pace you need. You can learn more <span className="links border-b border-gray-400">about us</span>, check the latest on  <span className="links border-b border-gray-400">Instagram</span> and <span className="links border-b border-gray-400">Twitter</span> or apply to <span className="links border-b border-gray-400">join our team</span>.</p>
        </div>
        <div>
            <img src={imageCollage} alt="who-we-are"/>
        </div>
    </div>
  )
}

export default WhoWeAre
