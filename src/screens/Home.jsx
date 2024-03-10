import Navbar from "../components/Navbar"
import dropLine from "../assets/Link.svg";
import Hero from "../components/Hero";
import Works from "../components/Works";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Works/>
        <WhoWeAre/>
        <div className=" bg-white fixed bottom-[1rem] right-[1rem]">
            <img  className="dropline" src={dropLine} alt="drop-line" />
        </div>
    </div>
  )
}

export default Home
