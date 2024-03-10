import firstBank from "../assets/firstbank.png";
import disha from "../assets/disha.png";
import hash from "../assets/hash.png";
import coronation from "../assets/coronation.png";
import tonyFoundation from "../assets/tonyelumelu.png"
import heirsHolding from "../assets/heirs.png";
import ark from "../assets/ark.png";
import zenith from "../assets/zenith.png"
import WorksCard from "./WorksCard";

const Works = () => {
  return (
    <div className=" mt-[10vh] w-full max-w-[1140px] mx-auto">
     <WorksCard image1={firstBank} title1={'First Bank'} text1='Website, UI/UX' image2={disha} title2={'Disha Pages'} text2='Branding, Website, UI/UX, Web app' />

     <WorksCard image1={hash} title1={'Hash'} text1='Branding, Website' image2={coronation} title2={'Coronation Bank'} text2='Website' />

     <WorksCard image1={tonyFoundation} title1={'Tony Elumelu Foundation'} text1='Website' image2={heirsHolding} title2={'Heirs Holdings'} text2='Website' />

     <WorksCard image1={ark} title1={'ARK'} text1='Branding, Website, UI/UX, Web app' image2={zenith} title2={'Zenith Bank'} text2='Website' />
    </div>
  )
}

export default Works
