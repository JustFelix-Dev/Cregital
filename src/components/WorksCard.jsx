import imageArrow from "../assets/image-arrow.svg";

const WorksCard = ({ image1,title1,text1,image2,title2,text2,mouseEnter,mouseLeave}) => {
  return (
    <div className='flex justify-between'>
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="self-center relative">
        <img src={image1} alt={title1} />
        <div className="min-h-[146px] flex flex-col  gap-2 justify-center"><p className="font-ibm font-semibold text-black text-[30px]">{title1}</p> <span className="font-ibm font-light text-black text-[15px]">{text1}</span></div>
        <img src={imageArrow} alt="image-arrow" className="absolute top-3 right-3" />
    </div>
    <div  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="self-center relative">
        <img src={image2} alt={title2} />
        <div className="min-h-[146px] flex flex-col  gap-2 justify-center" ><p className="font-ibm font-semibold text-black text-[30px]">{title2}</p> <span className="font-ibm font-light text-black text-[15px]" >{text2}</span> </div>
        <img src={imageArrow} alt="image-arrow" className="absolute top-3 right-3" />
    </div>
  </div>
  )
}

export default WorksCard
