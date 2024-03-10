
const WorksCard = ({ image1,title1,text1,image2,title2,text2}) => {
  return (
    <div className='flex justify-between'>
    <div className="self-center">
        <img src={image1} alt={title1} />
        <div className="min-h-[146px] flex flex-col  gap-2 justify-center"><p className="font-ibm font-semibold text-black text-[30px]">{title1}</p> <span className="font-ibm font-light text-black text-[15px]">{text1}</span></div>
    </div>
    <div className="self-center">
        <img src={image2} alt={title2} />
        <div className="min-h-[146px] flex flex-col  gap-2 justify-center" ><p className="font-ibm font-semibold text-black text-[30px]">{title2}</p> <span className="font-ibm font-light text-black text-[15px]" >{text2}</span> </div>

    </div>
  </div>
  )
}

export default WorksCard
