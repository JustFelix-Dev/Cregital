
const Footer = ({ mouseEnter, mouseLeave}) => {
  return (
    <footer className=" text-white h-[484px] flex items-center  bg-black" >
        <div className="flex flex-col gap-[9rem] w-full max-w-[1140px] mx-auto">
      <div className="px-3 flex flex-col gap-8">
        <span className="font-ibm text-[75px] font-semibold" >Get in touch </span>
        <p  className=" self-end max-w-[52ch] font-ibm text-[25px] font-light leading-[42.5px]">Contact us to find out how we can help you. If it&apos;s easier you can email us at <span onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="footer-links border-b border-[hsl(0,0%,67%)]" >hello@cregital.com</span> Download the <span onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}className="footer-links border-b border-[#aaaaaa]">Cregital brochure.pdf</span> <span className="text-[#4D4D4D]">(5mb)</span></p>
      </div>
      <div className="flex justify-between text-white font-ibm text-[15px] font-light">
        <p className="" >&copy; 2020 Cregital Design Agency</p>
        <div className="flex gap-4 ">
            <a  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">Instagram</a>
            <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">Twitter</a>
            <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#">Linkedin</a>
        </div>
      </div>
        </div>
    </footer>
  )
}

export default Footer
