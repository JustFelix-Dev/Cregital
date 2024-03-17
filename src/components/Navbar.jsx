// import { useState } from "react";
import logo from "../assets/cregital-logo.svg";
import menuOpen from "../assets/menu.svg";


const Navbar = ({mouseEnter,mouseLeave,isMenuOpen,setIsMenuOpen}) => {
    // const [ isMenuOpen,setIsMenuOpen] = useState(false);
   
     
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <>
    <nav className="h-[100px] max-w-[90%] w-full mx-auto bg-white flex items-center justify-between">
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="logo h-[30px] w-[30px] sm:h-auto sm:w-auto"><img src={logo} alt="cregital-logo" /></div>
      <div  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={toggleMenu} className="flex items-center gap-4" >
        <img  className='menu h-[15px] w-[15px] sm:h-auto sm:w-auto' src={menuOpen} alt="menu-open" />
        <span className="font-ibm thick-text text-[13px] md:text-[15px] text-dark font-bold" >MENU</span>
      </div>
    </nav>
  

    </>
  )
}

export default Navbar
