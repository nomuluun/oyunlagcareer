export default function SuggestedCareer(){
    return(
        <div className="w-[378px] bg-[#5E17EB] rounded-[48px] flex flex-col justify-center items-center h-[247px] space-y-[20px]">
            <h1 className="text-[24px] font-bold text-[#F5F5F5] "> санхүүгийн шинжээч </h1>
            <div className="flex flex-row justify-around">
                <img src="/svg/Rectangle 14.png" alt=""  className="w-[90px]"/>
                <p className="w-[182px] text-[#F5F5F5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, </p>
            </div>
            <div className="flex ">
                <p className="text-[#f5f5f5]">ЭЕШ өгөх хичээлүүд</p>
                <div className="flex -space-x-[20px]">
                    <img src="/svg/bio.png" alt="" className="w-[38px]"/>
                    <img src="/svg/chem.png" alt="" className="w-[38px]"/>
                    <img src="/svg/math.png" alt="" className="w-[38px]" />
                </div>

            </div>
        </div>
    )
}