import Navbar from "../components/Navbar"
import dropLine from "../assets/Link.svg";
import Hero from "../components/Hero";
import Works from "../components/Works";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Works/>
        <WhoWeAre/>
        <Footer/>
        <div className="dropline fixed bottom-[1.5rem] right-[1.5rem]">
            <img  className="dropline" src={dropLine} alt="drop-line" />
        </div>
    </div>
  )
}

export default Home
