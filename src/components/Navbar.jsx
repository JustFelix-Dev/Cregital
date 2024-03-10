import { useState } from "react";
import logo from "../assets/cregital-logo.svg";
import menuOpen from "../assets/menu.svg";
import cancelMenu from "../assets/cancelmenu.svg";

const Navbar = () => {
    const [ isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <>
    <nav className="h-[100px] max-w-[90%] w-full mx-auto bg-white flex items-center justify-between">
      <div className="logo"><img src={logo} alt="cregital-logo" /></div>
      <div onClick={toggleMenu} className="flex items-center gap-4" >
        <img  className='menu' src={menuOpen} alt="menu-open" />
        <span className="font-ibm thick-text text-[15px] text-dark font-bold" >MENU</span>
      </div>
    </nav>
    {
        isMenuOpen && (
          <div className="fixed  bg-black z-10 inset-0 items-center justify-center text-white">
             <nav className="h-[100px] max-w-[90%] w-full mx-auto flex items-center justify-between">
      <div className="logo"><img src={logo} alt="cregital-logo" /></div>
      <div onClick={toggleMenu} className="flex items-center gap-4" >
        <img  className='menu' src={cancelMenu} alt="menu-open" />
        <span className="font-ibm thick-text text-[15px] text-dark font-bold">CLOSE</span>
      </div>
            </nav>
            <div className="flex mx-auto items-center justify-center hero font-ibm text-[70px] font-semibold max-w-[23ch] text-white text-center">
                <div className="-mt-8 menu-tight"> Learn more <a className="border-b border-[#aaa] footer-links">about us</a>, check out <a className=" border-b border-[#aaa] footer-links">our work</a>, the latest on <a className="border-b border-[#aaa] footer-links">instagram</a> and <a className="border-b border-[#aaa] footer-links">contact us</a></div>
               
            </div>
          </div>
        )
    }
    </>
  )
}

export default Navbar
