import Navbar from "../components/Navbar"
import dropLine from "../assets/Link.svg";
import Hero from "../components/Hero";
import Works from "../components/Works";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";
import { useState } from "react";
import cancelMenu from "../assets/cancelmenu.svg";
import logo from "../assets/cregital-logo.svg";

const Home = () => {
    const [isDropLine,setIsDropLine] = useState(false);

 const openDropLine = ()=>{
    setIsDropLine(true)
 }

 const closeDropLine = ()=>{
    setIsDropLine(false)
 }
  return (
    <>
    <div>
        <Navbar/>
        <Hero/>
        <Works/>
        <WhoWeAre/>
        <Footer/>
        <div onClick={openDropLine} className="dropline fixed bottom-[1.5rem] right-[1.5rem]">
            <img  className="dropline" src={dropLine} alt="drop-line" />
        </div>
    </div>
    { isDropLine && (
      <div className="fixed bg-black inset-0 flex">
          <nav className="h-[100px] max-w-[90%] w-full mx-auto flex items-center">
      <div className="logo"><img src={logo} alt="cregital-logo" /></div>
            </nav>
            <div className=" absolute min-h-[calc(100vh-100px)]flex w-full flex items-center inset-0 ">
                <div className="flex flex-col gap-8 w-full max-w-[684px] mx-auto">
                <p className="font-ibm text-[70px] font-semibold text-white text-center">Drop us a line</p>
                <span className="text-white font-light text-[25px] font-ibm text-center">Complete the form or email <span className="footer-links border-b border-[#aaa]">hello@gmail.com</span>.</span>
                <form action="#"  className="font-ibm flex flex-col gap-4">
                    <input type="text" placeholder="Name" name="name" id="name" />
                    <input type="text" placeholder="Phone Number" name="name" id="name" />
                    <input type="text" placeholder="Email" name="name" id="name" />
                     <textarea name="message" id="" cols="30" rows="10" placeholder="Briefly tell us about your project"></textarea>
                     <button className="font-ibm text-[15px] font-semibold bg-white min-h-[59px] w-full flex items-center justify-center hover:bg-[#B5B5B5] transition-all">SEND MESSAGE</button>
                </form>
                </div>
            </div>
         <div onClick={closeDropLine} className="dropline bg-white p-4 rounded-full fixed bottom-[3rem] right-[3rem]">
            <img  className="dropline" src={cancelMenu} height={15} width={15} alt="drop-line" />
        </div>
      </div>
    )
    }
    </>
  )
}

export default Home
