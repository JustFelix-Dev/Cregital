import Navbar from "../components/Navbar"
import dropLine from "../assets/Link.svg";
import Hero from "../components/Hero";
import Works from "../components/Works";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import cancelMenu from "../assets/cancelmenu.svg";
import logo from "../assets/cregital-logo.svg";
import { motion } from "framer-motion";



const Home = () => {
    const [isDropLine,setIsDropLine] = useState(false);
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const [ cursorVariant,setCursorVariant] = useState('default');
    const [ mousePosition,setMousePosition] = useState({
        x:0,
        y:0
    })

    useEffect(()=>{
        const mouseMove = (e)=>{
            setMousePosition({
                x: e.clientX,
                y:e.clientY
            })
        }

        window.addEventListener('mousemove',mouseMove)

        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])
 const openDropLine = ()=>{
    setIsDropLine(true)
 }

 const closeDropLine = ()=>{
    setIsDropLine(false)
 }


 const variants = {
    default: {
        x: mousePosition.x - 16,
        y: mousePosition.y- 16,
        transition: { duration: 0},
        backgroundColor:'white',
        mixBlendMode:'difference'
    },
    actionable:{
        x: mousePosition.x - 50,
        y: mousePosition.y- 50,
        height:100,
        width:100,
        backgroundColor:'white',
        mixBlendMode:'difference'
    },
    images: {
        x: mousePosition.x - 50,
        y: mousePosition.y- 50,
        height:100,
        width:100,
        backgroundColor:'black',
        transition:{ stiffness:0}
    }
 }


 const mouseEnter =()=> setCursorVariant('actionable')
 const mouseLeave =()=> setCursorVariant('default')

 const mouseImageEnter = ()=> setCursorVariant('images')
 const mouseImageLeave = ()=> setCursorVariant('default')

 const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
}

  return (
    <>
    <div>
        <Navbar mouseEnter={mouseEnter} mouseLeave={mouseLeave} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero/>
        <Works mouseEnter={mouseImageEnter} mouseLeave={mouseImageLeave} />
        <WhoWeAre/>
        <Footer mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={openDropLine} className="dropline fixed bottom-[1.5rem] right-[1.5rem]">
            <img  className="dropline" src={dropLine} alt="drop-line" />
        </div>
    </div>
    { isDropLine && (
      <div  className="fixed bg-black inset-0 flex">
          <nav className="h-[100px] max-w-[90%] w-full mx-auto flex items-center">
      <div className="logo"><img src={logo} alt="cregital-logo" /></div></nav>
            <div className=" absolute min-h-[calc(100vh-100px)]flex w-full flex items-center inset-0">
                <div className="flex flex-col gap-8 w-full max-w-[684px] mx-auto">
                <motion.p initial={{y:"50px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className="font-ibm text-[70px] font-semibold text-white text-center">Drop us a line</motion.p>
                <motion.span initial={{y:"70px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className="text-white font-light text-[25px] font-ibm text-center">Complete the form or email <span className="footer-links border-b border-[#aaa]">hello@gmail.com</span>.</motion.span>
                <motion.form initial={{y:"400px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} action="#"  className="font-ibm flex flex-col gap-4">
                    <input type="text" placeholder="Name" name="name" id="name" />
                    <input type="text" placeholder="Phone Number" name="name" id="name" />
                    <input type="text" placeholder="Email" name="name" id="name" />
                     <textarea name="message" id="" cols="30" rows="10" placeholder="Briefly tell us about your project"></textarea>
                     <button className="font-ibm text-[15px] font-semibold bg-white min-h-[59px] w-full flex items-center justify-center hover:bg-[#B5B5B5] transition-all">SEND MESSAGE</button>
                </motion.form>
                </div>
            </div>
         <div onClick={closeDropLine} className="dropline bg-white p-4 rounded-full fixed bottom-[3rem] right-[3rem]">
            <img  className="dropline" src={cancelMenu} height={15} width={15} alt="drop-line" />
        </div>
      </div>
    )
    }
      {
        isMenuOpen && (
            <>
          <div className="fixed isMenu bg-black z-10 inset-0 items-center justify-center text-white">
             <nav className="h-[100px] max-w-[90%] w-full mx-auto flex items-center justify-between">
      <div className="logo"><img src={logo} alt="cregital-logo" /></div>
      <div onClick={toggleMenu} className="flex items-center gap-4" >
        <img  className='menu' src={cancelMenu} alt="menu-open" />
        <span className="font-ibm thick-text text-[15px] text-dark font-bold">CLOSE</span>
      </div>
            </nav>
            <motion.div initial={{y:"400px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className="flex mx-auto items-center justify-center hero font-ibm text-[70px] font-semibold max-w-[23ch] text-white text-center">
                <div className="-mt-8 menu-tight"> Learn more <a className="border-b border-[#aaa] footer-links">about us</a>, check out <a className=" border-b border-[#aaa] footer-links">our work</a>, the latest on <a className="border-b border-[#aaa] footer-links">instagram</a> and <a className="border-b border-[#aaa] footer-links">contact us</a></div>
               
            </motion.div>
          </div>
    </>
        )
    }
    <motion.div className="cursor flex items-center justify-center" variants={variants} animate={cursorVariant}>
      { cursorVariant === 'images' && <span className="font-ibm text-white font-semibold text-[16px]">VIEW</span>}
    </motion.div>
    </>
  )
}

export default Home
